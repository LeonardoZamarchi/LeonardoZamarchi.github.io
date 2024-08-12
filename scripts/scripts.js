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