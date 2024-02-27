const songs =[
    "https://github.com/raineivyaeera/Lines-Of-Thought-Website/blob/main/_Jukebox%20Portfolio/10%20Minute%20Old%20Ketchup%20Packet.mp3",
    "https://github.com/raineivyaeera/Lines-Of-Thought-Website/blob/main/_Jukebox%20Portfolio/Beary%20Good%20Day.mp3",
    "https://github.com/raineivyaeera/Lines-Of-Thought-Website/blob/main/_Jukebox%20Portfolio/Blood%20Moon.mp3",
    "https://github.com/raineivyaeera/Lines-Of-Thought-Website/blob/main/_Jukebox%20Portfolio/Casscifers%20Confrontation.mp3",
    "https://github.com/raineivyaeera/Lines-Of-Thought-Website/blob/main/_Jukebox%20Portfolio/Creepies%20%26%20Crawlies.mp3",
    "https://github.com/raineivyaeera/Lines-Of-Thought-Website/blob/main/_Jukebox%20Portfolio/Deathroll.mp3",
    "https://github.com/raineivyaeera/Lines-Of-Thought-Website/blob/main/_Jukebox%20Portfolio/Decorating%20Time.mp3",
    "https://github.com/raineivyaeera/Lines-Of-Thought-Website/blob/main/_Jukebox%20Portfolio/Endless%20%26%20Bouncy.mp3",
    "https://github.com/raineivyaeera/Lines-Of-Thought-Website/blob/main/_Jukebox%20Portfolio/FTL%20Inspired%20(Min-Max%20Distortion).mp3",
    "https://github.com/raineivyaeera/Lines-Of-Thought-Website/blob/main/_Jukebox%20Portfolio/Finding%20Confidence.mp3"
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let shuffledSongs = shuffleArray([...songs]);
let currentIndex = 0;

function randomSong() {
    let audioPlayer = document.getElementById("audio");

    if (currentIndex >= shuffledSongs.length) {
        shuffledSongs = shuffleArray([...songs]);
        currentIndex = 0;
    }

    audioPlayer.src = shuffledSongs[currentIndex];
    audioPlayer.play();
    currentIndex++;
}