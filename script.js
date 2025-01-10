let currentLanguage = 'pt';

function toggleLanguage() {
    const welcomeMessage = document.getElementById("welcome-message");
    if (currentLanguage === 'pt') {
        currentLanguage = 'en';
        welcomeMessage.innerHTML = `You are welcome here!<br>Front-End Developer | My Projects and Networks`;
    } else {
        currentLanguage = 'pt';
        welcomeMessage.innerHTML = `Seja bem-vindo aqui!<br>Desenvolvedor Front-End | Meus Projetos e Redes`;
    }
}
