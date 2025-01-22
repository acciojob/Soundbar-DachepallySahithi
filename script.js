let currentAudio = null;  // To keep track of the currently playing audio

// Map sound IDs to their corresponding file names
const sounds = {
    applause: 'applause.mp3',
    boo: 'boo.mp3',
    gasp: 'gasp.mp3',
    tada: 'tada.mp3',
    victory: 'victory.mp3',
    wrong: 'wrong.mp3',
};

// Function to play sound
function playSound(soundId) {
    // Stop the current audio if any is playing
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;  // Reset the audio to start from the beginning
    }

    // Create a new Audio object and play the selected sound
    currentAudio = new Audio(`sounds/${sounds[soundId]}`);
    currentAudio.play();
}

// Function to stop sound
function stopSound() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
}

// Attach event listeners to buttons
document.getElementById('applause').addEventListener('click', () => playSound('applause'));
document.getElementById('boo').addEventListener('click', () => playSound('boo'));
document.getElementById('gasp').addEventListener('click', () => playSound('gasp'));
document.getElementById('tada').addEventListener('click', () => playSound('tada'));
document.getElementById('victory').addEventListener('click', () => playSound('victory'));
document.getElementById('wrong').addEventListener('click', () => playSound('wrong'));
document.getElementById('stop').addEventListener('click', stopSound);