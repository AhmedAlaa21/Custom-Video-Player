const video = document.getElementById("video");
const play = document.getElementById("play");
const progress = document.getElementById("progress");
const stop = document.getElementById("stop");
const timestamp = document.getElementById("timestamp");

//Methods..
//1- Play & Pause Video..
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

//2- updatePlayIcon..
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}
//5- set Video time Progress & update timestamp..

//4- update progress..
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

//4- stop video..
function stopVideo() {
  //There is no function called video.stop();
  video.currentTime = 0;
  video.pause();
}

//5- update progress..
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  // Get the minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = "0" + String(mins);
  }

  // Get Seconds
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = "0" + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}

//Event Listeners..
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);

stop.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);
