let audio = new Audio();

function playSound(soundName) {
    audio.src = `sounds/${soundName}.mp3`; 
    audio.play();
}

function stopSound() {
    audio.pause();
    audio.currentTime = 0; 
}