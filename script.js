// script.js

const sounds = {
  applause: new Audio('./sounds/applause.mp3'),
  boo: new Audio('./sounds/boo.mp3'),
  gasp: new Audio('./sounds/gasp.mp3'),
  tada: new Audio('./sounds/tada.mp3'),
  victory: new Audio('./sounds/victory.mp3'),
  wrong: new Audio('./sounds/wrong.mp3')
};

function playSound(soundName) {
  sounds[soundName].play();
}

function stopSound() {
  for (const sound in sounds) {
    sounds[sound].pause();
    sounds[sound].currentTime = 0;
  }
}