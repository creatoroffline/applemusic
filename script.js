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
