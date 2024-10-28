let currentLanguage = 'pt'; // Idioma padrão

function toggleLanguage() {
    const welcomeMessage = document.getElementById("welcome-message");
    if (currentLanguage === 'pt') {
        currentLanguage = 'en';
        welcomeMessage.innerText = "You are welcome here!";

    } else {
        currentLanguage = 'pt';
        welcomeMessage.innerText = "Seja bem-vindo aqui!";
        
    }
}