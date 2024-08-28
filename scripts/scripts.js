function setLanguage(language) {
    document.querySelectorAll('[data-en]').forEach(element => {
        element.innerText = element.getAttribute(`data-${language}`);
    });
    document.querySelectorAll('.toggle-btn').forEach(button => {
        const project = button.closest('.projeto');
        if (project.classList.contains('expandido')) {
            button.innerText = language === 'en' ? 'Collapse' : 'Colapsar';
        } else {
            button.innerText = language === 'en' ? 'Description' : 'Descrição';
        }
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

document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', function() {
        const project = this.closest('.projeto');
        project.classList.toggle('expandido');
        const currentLanguage = localStorage.getItem('language') || 'en';
        this.textContent = project.classList.contains('expandido') 
            ? (currentLanguage === 'en' ? 'Collapse' : 'Colapsar') 
            : (currentLanguage === 'en' ? 'Description' : 'Descrição');
    });
});