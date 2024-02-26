const songs =[
    "_Jukebox Portfolio/10 Minute Old Ketchup Packet.mp3",
    "_Jukebox Portfolio/Beary Good Day.mp3",
    "_Jukebox Portfolio/Blood Moon.mp3",
    "_Jukebox Portfolio/Casscifers Confrontation.mp3",
    "_Jukebox Portfolio/Creepies & Crawlies.mp3",
    "_Jukebox Portfolio/Deathroll.mp3",
    "_Jukebox Portfolio/Decorating Time.mp3",
    "_Jukebox Portfolio/Endless & Bouncy.mp3",
    "_Jukebox Portfolio/Finding Confidence.mp3",
    "_Jukebox Portfolio/FTL Inspired (Min-Max Distortion).mp3",
    "_Jukebox Portfolio/Good Idea.mp3",
    "_Jukebox Portfolio/Lacrymose Head.mp3",
    "_Jukebox Portfolio/Lightkeeper.mp3",
    "_Jukebox Portfolio/Logging Off!.mp3",
    "_Jukebox Portfolio/Magician.mp3",
    "_Jukebox Portfolio/Ode To Mort Garson.mp3",
    "_Jukebox Portfolio/Other Views.mp3",
    "_Jukebox Portfolio/Present.mp3",
    "_Jukebox Portfolio/Radience.mp3",
    "_Jukebox Portfolio/Self Limitation.mp3",
    "_Jukebox Portfolio/Shoreline.mp3",
    "_Jukebox Portfolio/Space Debris.mp3",
    "_Jukebox Portfolio/Sweet Victory.mp3",
    "_Jukebox Portfolio/V-ish.mp3",
    "_Jukebox Portfolio/Watching The Waves.mp3",
    "_Jukebox Portfolio/Wordends.mp3",
    "_Jukebox Portfolio/WTSOILAPB.mp3"
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