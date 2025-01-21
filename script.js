const buttons = document.querySelectorAll('.btn');
const stopButton = document.getElementById('stop');
let currentSound = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const soundId = button.id;
        const audio = new Audio(`sounds/${soundId}.mp3`); // Assuming sound files are in 'sounds' folder

        if (currentSound) {
            currentSound.pause();
        }

        audio.play();
        currentSound = audio;
    });
});

stopButton.addEventListener('click', () => {
    if (currentSound) {
        currentSound.pause();
        currentSound = null;
    }
});