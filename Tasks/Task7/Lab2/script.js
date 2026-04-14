// ===== SELECT ELEMENTS (USING IDs) =====
let NowPlay = document.getElementById("now-playing");
let trackArt = document.getElementById("track-art");
let trackName = document.getElementById("track-name");
let trackArtist = document.getElementById("track-artist");

let playPauseBtn = document.getElementById("playpause");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

let seek_slider = document.getElementById("seek-slider");
let volume_slider = document.getElementById("volume-slider");

let curr_time = document.getElementById("current-time");
let total_duration = document.getElementById("total-duration");

let randomIcon = document.querySelector(".fa-random"); // no id → keep this
let wave = document.getElementById("wave");

let curr_track = document.getElementById("audio-player");

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

// ===== TRACK LIST =====
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
  },
  {
    name: "Track 3",
    artist: "Artist 3",
    image: "../Lab2/Cats3.jpeg",
    path: "../Lab2/audio3.mp3"
  }
];


loadTrack(track_index);

function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();

  curr_track.src = track_list[track_index].path;

  trackArt.style.backgroundImage =
    "url(" + track_list[track_index].image + ")";

  trackName.textContent = track_list[track_index].name;
  trackArtist.textContent = track_list[track_index].artist;

  NowPlay.textContent =
    "Playing " + (track_index + 1) + " of " + track_list.length;

  updateTimer = setInterval(setUpdate, 1000);

  curr_track.addEventListener("ended", nextTrack);
}

// Reset UI values
function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

// Play / Pause toggle
function playpauseTrack() {
  isPlaying ? pauseTrack() : playTrack();
}

// Play track
function playTrack() {
  curr_track.play();
  isPlaying = true;

  trackArt.classList.add("rotate");
  wave.classList.add("loader");

  playPauseBtn.innerHTML =
    '<i class="fas fa-pause-circle fa-5x"></i>';
}

// Pause track
function pauseTrack() {
  curr_track.pause();
  isPlaying = false;

  trackArt.classList.remove("rotate");
  wave.classList.remove("loader");

  playPauseBtn.innerHTML =
    '<i class="fas fa-play-circle fa-5x"></i>';
}

// Next track
function nextTrack() {
  if (isRandom) {
    track_index = Math.floor(Math.random() * track_list.length);
  } else {
    track_index = (track_index + 1) % track_list.length;
  }

  loadTrack(track_index);
  playTrack();
}

// Previous track
function prevTrack() {
  track_index =
    (track_index - 1 + track_list.length) % track_list.length;

  loadTrack(track_index);
  playTrack();
}

// Random toggle
function randomTrack() {
  isRandom = !isRandom;
  randomIcon.classList.toggle("randomActive");
}

// Repeat track
function repeatTrack() {
  loadTrack(track_index);
  playTrack();
}

// Seek
function seekTo() {
  let seekto =
    curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

// Volume
function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

// Update progress + time
function setUpdate() {
  if (!isNaN(curr_track.duration)) {
    let seekPosition =
      curr_track.currentTime *
      (100 / curr_track.duration);

    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime % 60);

    if (currentSeconds < 10)
      currentSeconds = "0" + currentSeconds;

    curr_time.textContent =
      currentMinutes + ":" + currentSeconds;

    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration % 60);

    if (durationSeconds < 10)
      durationSeconds = "0" + durationSeconds;

    total_duration.textContent =
      durationMinutes + ":" + durationSeconds;
  }
}


volume_slider.addEventListener("input", setVolume);
seek_slider.addEventListener("input", seekTo);
