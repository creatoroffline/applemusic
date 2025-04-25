let isPlaying = false;
let currentSongIndex = 0;

const songs = [
    {
        title: "Música 1",
        artist: "Artista 1",
        src: "link-da-musica1.mp3",
        albumCover: "link-da-capa1.jpg"
    },
    {
        title: "Música 2",
        artist: "Artista 2",
        src: "link-da-musica2.mp3",
        albumCover: "link-da-capa2.jpg"
    }
];

const audio = document.getElementById('audio');
const songTitle = document.getElementById('song-title');
const songArtist = document.getElementById('song-artist');
const albumCover = document.getElementById('album-cover');

function loadSong(songIndex) {
    const song = songs[songIndex];
    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;
    albumCover.src = song.albumCover;
    audio.src = song.src;
}

function togglePlay() {
    if (isPlaying) {
        audio.pause();
    } else {
        audio.play();
    }
    isPlaying = !isPlaying;
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
}

audio.addEventListener('ended', nextSong);

loadSong(currentSongIndex); // Carrega a primeira música ao iniciar
