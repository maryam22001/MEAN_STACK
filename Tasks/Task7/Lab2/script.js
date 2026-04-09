let NowPlay = document.getElementById("now-playing");
let trackName = document.getElementById("track-name");
let trackArtist = document.getElementById("track-artist");
let playPauseBtn = document.getElementById("playpause");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("pre");
let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let audio = new Audio();
let isPlaying = false;
let updateTimer;
let curr_track = document.getElementById("audio-player");

let track_list = [
  {
    name: "Track 1",
    artist: "Artist 1",
    image: "../Lab2/Cats1.jpeg",
    path: "../Lab2/audio1.mp3"
  },
  {
    name: "Track 2",
    artist: "Artist 2",
    image: "../Lab2/Cats2.jpeg",
    path: "../Lab2/audio2.mp3"

  }
];
function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();
  audio.src = track_list[track_index].path;
  audio.load();
  audio.play();
  NowPlay.textContent = "Playing " + (track_index + 1) + " of " + track_list.length;
  trackName.textContent = track_list[track_index].name;
  trackArtist.textContent = track_list[track_index].artist;
  document.getElementById("track-art").style.backgroundImage = "url(" + track_list[track_index].image + ")";
  updateTimer = setInterval(seekUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);


}

function playpauseTrack() {
  // Switch between playing and pausing
  // depending on the current state
  if (!isPlaying) playTrack();
  else pauseTrack();
};

function playTrack() {
  curr_track.play();
  isPlaying = true;
  playPauseBtn.innerHTML = '<i class="fa fa-pause"></i>';
};

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  playPauseBtn.innerHTML = '<i class="fa fa-play"></i>';
};

volume_slider.addEventListener("input", function() {
  audio.volume = volume_slider.value ;

});
audio.addEventListener("volumeChange", function () {
  volume_slider.value = audio.volume ;
});

loadTrack(track_index);
