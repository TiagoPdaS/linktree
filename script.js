let currentLanguage = 'pt';

function toggleLanguage() {
    const welcomeMessage = document.getElementById("welcome-message");
    const footer = document.getElementById("footer"); 
    if (currentLanguage === 'pt') {
        currentLanguage = 'en';
        welcomeMessage.innerHTML = `You are welcome here!<br>Front-End Developer | My Projects and Networks`;
        footer.innerHTML = `Created with ♥ by Tiago PdaS`
    } else {
        currentLanguage = 'pt';
        welcomeMessage.innerHTML = `Seja bem-vindo aqui!<br>Desenvolvedor Front-End | Meus Projetos e Redes`;
        footer.innerHTML = `Criado com ♥ por Tiago PdaS`
    
    }
}
