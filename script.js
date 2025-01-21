//your JS code here. If required.
const sound1 = new Audio('sounds/sound1.mp3');
const sound2 = new Audio('sounds/sound2.mp3');
const sound3 = new Audio('sounds/sound3.mp3');
const sound4 = new Audio('sounds/sound4.mp3');

const sound1Btn = document.getElementById('sound1Btn');
const sound2Btn = document.getElementById('sound2Btn');
const sound3Btn = document.getElementById('sound3Btn');
const sound4Btn = document.getElementById('sound4Btn');
const stopBtn = document.getElementById('stopBtn');

sound1Btn.addEventListener('click', () => {
    stopAllSounds();
    sound1.play();
});

sound2Btn.addEventListener('click', () => {
    stopAllSounds();
    sound2.play();
});

sound3Btn.addEventListener('click', () => {
    stopAllSounds();
    sound3.play();
});

sound4Btn.addEventListener('click', () => {
    stopAllSounds();
    sound4.play();
});

stopBtn.addEventListener('click', stopAllSounds);

function stopAllSounds() {
    sound1.pause();
    sound1.currentTime = 0;
    sound2.pause();
    sound2.currentTime = 0;
    sound3.pause();
    sound3.currentTime = 0;
    sound4.pause();
    sound4.currentTime = 0;
}
