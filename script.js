<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EchoMave Music</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="player">
        <div class="login">
            <input type="email" id="email" placeholder="Digite seu email">
            <input type="password" id="password" placeholder="Digite sua senha">
            <button onclick="login()">Login</button>
        </div>
        <div class="music-player">
            <input type="file" id="music" accept="audio/*">
            <button onclick="playMusic()">Tocar Música</button>
            <audio id="audio" controls></audio>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
