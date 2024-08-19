function setLanguage(language) {
    document.querySelectorAll('[data-en]').forEach(element => {
        element.innerText = element.getAttribute(`data-${language}`);
    });
    localStorage.setItem('language', language);
}


document.addEventListener('DOMContentLoaded', () => {
    const language = localStorage.getItem('language') || 'en';
    setLanguage(language);
});

function toggleLanguage() {
    const currentLanguage = localStorage.getItem('language') || 'en';
    const newLanguage = currentLanguage === 'en' ? 'pt' : 'en';
    setLanguage(newLanguage);
}

document.addEventListener('DOMContentLoaded', () => {
    const language = localStorage.getItem('language') || 'en';
    setLanguage(language);
});