let vid=document.getElementById("vid");
let playPause=document.getElementById("play");

let sound=document.getElementById("sound");

let volumBar=document.querySelector(".volumebar");
let volProgress=document.querySelector(".volume-progress");

let progressBar=document.querySelector(".progress-bar")
let progress=document.querySelector(".progress");
 
let forward= document.querySelector(".fa-forward");
let backward= document.querySelector(".fa-backward");

 let timeLapse=document.querySelector(".time-elapsed");
 let totalLength=document.querySelector(".time-duration");

 let screenSize=document.querySelector("#screensize");
 let screen=document.querySelector(".screen");

 let speed=document.getElementById("select");
 
 
 vid.defaultPlaybackRate=1.0;


 //displaying time on video
 let displayTime= ()=>{
  
  // finding and converting current time
   let cTime= vid.currentTime;

   let minut=Math.floor(cTime/60)
   let second=  Math.floor(cTime%60);

   timeLapse.textContent=`${minut} : ${second} /`;

    // finding and converting total video time
  
   let dur=vid.duration;
   let dMin=Math.floor(dur/60);
   let dSec=Math.floor(dur%60);

   totalLength.textContent=`${dMin}:${dSec}`;


 }

 

function playOrPause(){
  if(playPause.classList[1]==="fa-play"){
      vid.play();
      playPause.classList.replace("fa-play", "fa-pause");

      
      
  }else{

    vid.pause();
    playPause.classList.replace("fa-pause", "fa-play");

  
  }
  
}

// sound on or mute function

function  muteOrPlay(){
  if(sound.classList[1]==="fa-volume-high"){

    vid.muted = true;
    sound.classList.replace("fa-volume-high", "fa-volume-xmark");
  }else{

    vid.muted = false;
    sound.classList.replace("fa-volume-xmark", "fa-volume-high");

  }

}

// video progress bar functiuon

function seekProgress(event){
   

    let currentTime=event.target.currentTime;
    let duration= event.target.duration;
    let progressWidth=currentTime/duration *100;     // calculate percentage

    progressBar.style.cssText= `width:${progressWidth}%`;

  

}

// controll progress bar.  video move forward or backward by clicking bar


function progressControll(event){

   
   let position=event.offsetX;
   let width=this.clientWidth;
   let vidDuration=vid.duration;


 // console.log(event.offsetX, event.target.clientWidth);

   let progressRange=(position /width)* vidDuration;      // calculate target position of video in  seconds
 
    vid.currentTime=progressRange;    // currenTime is an inbuilt keyword
}

// forward video 5 second

function vidForward(){

  vid.currentTime+=5;

}

//backward video 5 second


function vidBackward(){
  vid.currentTime-=5;

}
 
function expandVid(){

if(screenSize.classList[1]==="fa-expand"){

       vid.style.cssText=`width:100%;
                         height:100vh;`;
  
       screenSize.classList.replace("fa-expand", "fa-minimize");

}else{

  vid.style.cssText=`width:80%;
                     height:90%;`;
 
             screenSize.classList.replace("fa-minimize", "fa-expand");                  
}



}

// sound control
function volumeUp(event){
  cVolume=event.offsetX;
  fVolume=this.clientWidth;
  let volPrctg=cVolume/fVolume*100;

  vid.volume=Math.floor(volPrctg)/100;

  volProgress.style.cssText=`width:${volPrctg}%`

}
 

function playback(){

  let playSpeed=speed.value;
  console.log(playSpeed);
 vid.playbackRate=speed.value;
}
 playPause.addEventListener("click",playOrPause);
vid.addEventListener("click",playOrPause);
sound.addEventListener("click", muteOrPlay);

vid.addEventListener("timeupdate", seekProgress);

progress.addEventListener("click", progressControll)

forward.addEventListener("click", vidForward)
backward.addEventListener("click", vidBackward)
vid.addEventListener("timeupdate",displayTime);
screenSize.addEventListener("click", expandVid);
volumBar.addEventListener("click", volumeUp);
speed.addEventListener("click",playback);