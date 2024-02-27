const songs =[
    "https://github.com/raineivyaeera/Lines-Of-Thought-Website/blob/a789258dd63d73d3ad32869646c1b12603df8411/_Jukebox%20Portfolio/10%20Minute%20Old%20Ketchup%20Packet.mp3?raw=true",
    "https://github.com/raineivyaeera/Lines-Of-Thought-Website/blob/main/_Jukebox%20Portfolio/Beary%20Good%20Day.mp3?raw=true",
    "https://github.com/raineivyaeera/Lines-Of-Thought-Website/blob/a789258dd63d73d3ad32869646c1b12603df8411/_Jukebox%20Portfolio/Blood%20Moon.mp3?raw=true",
    "https://github.com/raineivyaeera/Lines-Of-Thought-Website/blob/a789258dd63d73d3ad32869646c1b12603df8411/_Jukebox%20Portfolio/Casscifers%20Confrontation.mp3?raw=true",
    "https://github.com/raineivyaeera/Lines-Of-Thought-Website/blob/a789258dd63d73d3ad32869646c1b12603df8411/_Jukebox%20Portfolio/Creepies%20%26%20Crawlies.mp3?raw=true",
    "https://github.com/raineivyaeera/Lines-Of-Thought-Website/blob/a789258dd63d73d3ad32869646c1b12603df8411/_Jukebox%20Portfolio/Deathroll.mp3?raw=true",
    "https://github.com/raineivyaeera/Lines-Of-Thought-Website/blob/a789258dd63d73d3ad32869646c1b12603df8411/_Jukebox%20Portfolio/Decorating%20Time.mp3?raw=true",
    "https://github.com/raineivyaeera/Lines-Of-Thought-Website/blob/a789258dd63d73d3ad32869646c1b12603df8411/_Jukebox%20Portfolio/Endless%20%26%20Bouncy.mp3?raw=true",
    "https://github.com/raineivyaeera/Lines-Of-Thought-Website/blob/a789258dd63d73d3ad32869646c1b12603df8411/_Jukebox%20Portfolio/FTL%20Inspired%20(Min-Max%20Distortion).mp3?raw=true",
    "https://github.com/raineivyaeera/Lines-Of-Thought-Website/blob/a789258dd63d73d3ad32869646c1b12603df8411/_Jukebox%20Portfolio/Finding%20Confidence.mp3?raw=true",
    "https://github.com/raineivyaeera/Lines-Of-Thought-Website/blob/a789258dd63d73d3ad32869646c1b12603df8411/_Jukebox%20Portfolio/Good%20Idea.mp3?raw=true",
    "https://github.com/raineivyaeera/Lines-Of-Thought-Website/blob/a789258dd63d73d3ad32869646c1b12603df8411/_Jukebox%20Portfolio/Lacrymose%20Head.mp3?raw=true",
    "https://github.com/raineivyaeera/Lines-Of-Thought-Website/blob/a789258dd63d73d3ad32869646c1b12603df8411/_Jukebox%20Portfolio/Lightkeeper.mp3?raw=true",
    "https://github.com/raineivyaeera/Lines-Of-Thought-Website/blob/a789258dd63d73d3ad32869646c1b12603df8411/_Jukebox%20Portfolio/Logging%20Off!.mp3?raw=true",
    "https://github.com/raineivyaeera/Lines-Of-Thought-Website/blob/a789258dd63d73d3ad32869646c1b12603df8411/_Jukebox%20Portfolio/Magician.mp3?raw=true",
    "https://github.com/raineivyaeera/Lines-Of-Thought-Website/blob/a789258dd63d73d3ad32869646c1b12603df8411/_Jukebox%20Portfolio/Ode%20To%20Mort%20Garson.mp3?raw=true",
    "https://github.com/raineivyaeera/Lines-Of-Thought-Website/blob/a789258dd63d73d3ad32869646c1b12603df8411/_Jukebox%20Portfolio/Other%20Views.mp3?raw=true",
    "https://github.com/raineivyaeera/Lines-Of-Thought-Website/blob/a789258dd63d73d3ad32869646c1b12603df8411/_Jukebox%20Portfolio/Present.mp3?raw=true",
    "https://github.com/raineivyaeera/Lines-Of-Thought-Website/blob/a789258dd63d73d3ad32869646c1b12603df8411/_Jukebox%20Portfolio/Radience.mp3?raw=true",
    "https://github.com/raineivyaeera/Lines-Of-Thought-Website/blob/a789258dd63d73d3ad32869646c1b12603df8411/_Jukebox%20Portfolio/Self%20Limitation.mp3?raw=true",
    "https://github.com/raineivyaeera/Lines-Of-Thought-Website/blob/a789258dd63d73d3ad32869646c1b12603df8411/_Jukebox%20Portfolio/Shoreline.mp3?raw=true",
    "https://github.com/raineivyaeera/Lines-Of-Thought-Website/blob/a789258dd63d73d3ad32869646c1b12603df8411/_Jukebox%20Portfolio/Space%20Debris.mp3?raw=true",
    "https://github.com/raineivyaeera/Lines-Of-Thought-Website/blob/a789258dd63d73d3ad32869646c1b12603df8411/_Jukebox%20Portfolio/Sweet%20Victory.mp3?raw=true",
    "https://github.com/raineivyaeera/Lines-Of-Thought-Website/blob/a789258dd63d73d3ad32869646c1b12603df8411/_Jukebox%20Portfolio/V-ish.mp3?raw=true",
    "https://github.com/raineivyaeera/Lines-Of-Thought-Website/blob/a789258dd63d73d3ad32869646c1b12603df8411/_Jukebox%20Portfolio/WTSOILAPB.mp3?raw=true",
    "https://github.com/raineivyaeera/Lines-Of-Thought-Website/blob/a789258dd63d73d3ad32869646c1b12603df8411/_Jukebox%20Portfolio/Watching%20The%20Waves.mp3?raw=true",
    "https://github.com/raineivyaeera/Lines-Of-Thought-Website/blob/a789258dd63d73d3ad32869646c1b12603df8411/_Jukebox%20Portfolio/Wordends.mp3?raw=true"
    
    // "_Jukebox Portfolio/10 Minute Old Ketchup Packet.mp3",
    // "_Jukebox Portfolio/Beary Good Day.mp3",
    // "_Jukebox Portfolio/Blood Moon.mp3",
    // "_Jukebox Portfolio/Casscifers Confrontation.mp3",
    // "_Jukebox Portfolio/Creepies & Crawlies.mp3",
    // "_Jukebox Portfolio/Deathroll.mp3",
    // "_Jukebox Portfolio/Decorating Time.mp3",
    // "_Jukebox Portfolio/Endless & Bouncy.mp3",
    // "_Jukebox Portfolio/Finding Confidence.mp3",
    // "_Jukebox Portfolio/FTL Inspired (Min-Max Distortion).mp3",
    // "_Jukebox Portfolio/Good Idea.mp3",
    // "_Jukebox Portfolio/Lacrymose Head.mp3",
    // "_Jukebox Portfolio/Lightkeeper.mp3",
    // "_Jukebox Portfolio/Logging Off!.mp3",
    // "_Jukebox Portfolio/Magician.mp3",
    // "_Jukebox Portfolio/Ode To Mort Garson.mp3",
    // "_Jukebox Portfolio/Other Views.mp3",
    // "_Jukebox Portfolio/Present.mp3",
    // "_Jukebox Portfolio/Radience.mp3",
    // "_Jukebox Portfolio/Self Limitation.mp3",
    // "_Jukebox Portfolio/Shoreline.mp3",
    // "_Jukebox Portfolio/Space Debris.mp3",
    // "_Jukebox Portfolio/Sweet Victory.mp3",
    // "_Jukebox Portfolio/V-ish.mp3",
    // "_Jukebox Portfolio/Watching The Waves.mp3",
    // "_Jukebox Portfolio/Wordends.mp3",
    // "_Jukebox Portfolio/WTSOILAPB.mp3"
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