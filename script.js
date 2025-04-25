document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById('audio');
    const playBtn = document.getElementById('play-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const progressBar = document.getElementById('progress-bar');
    
    let isPlaying = false;

    // Função para alternar play/pause
    playBtn.addEventListener('click', function() {
        if (isPlaying) {
            audio.pause();
            playBtn.innerHTML = "&#9654;"; // Play icon
        } else {
            audio.play();
            playBtn.innerHTML = "&#10074;&#10074;"; // Pause icon
        }
        isPlaying = !isPlaying;
    });

    // Atualizar barra de progresso
    audio.addEventListener('timeupdate', function() {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = progress + "%";
    });

    // Funções de controle de próxima e anterior música
    nextBtn.addEventListener('click', function() {
        // Lógica para próxima música (ajustar conforme sua biblioteca de músicas)
        console.log("Próxima música");
    });

    prevBtn.addEventListener('click', function() {
        // Lógica para música anterior (ajustar conforme sua biblioteca de músicas)
        console.log("Música anterior");
    });
});
const clientId = 'SEU_CLIENT_ID'; // Substitua pelo seu Client ID
const clientSecret = 'SEU_CLIENT_SECRET'; // Substitua pelo seu Client Secret
let accessToken = '';

// Função para obter o token de acesso
async function getAccessToken() {
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret),
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials'
    });
    const data = await response.json();
    accessToken = data.access_token;
}

// Função para pesquisar artistas
async function searchArtist(query) {
    const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=artist`, {
        headers: {
            'Authorization': 'Bearer ' + accessToken
        }
    });
    const data = await response.json();
    return data.artists.items;
}

// Função para exibir os artistas encontrados
function displayArtists(artists) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';
    artists.forEach(artist => {
        const artistDiv = document.createElement('div');
        artistDiv.classList.add('artist');
        artistDiv.innerHTML = `
            <img src="${artist.images[0].url}" alt="${artist.name}" />
            <h3>${artist.name}</h3>
        `;
        resultsContainer.appendChild(artistDiv);
    });
}

// Chama a função para obter o token e depois realizar a pesquisa
getAccessToken().then(() => {
    document.getElementById('search-btn').addEventListener('click', async () => {
        const query = document.getElementById('search-input').value;
        const artists = await searchArtist(query);
        displayArtists(artists);
    });
});
