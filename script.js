const translations = {
    'en': {
        greeting: "hey, I'm Luan 👋",
        skillsHeading: "Skills",
        toolsHeading: "Tools",
        projectsHeading: "Projects",
        contactHeading: "Contact",
    },
    'pt-BR': {
        greeting: 'Olá, sou o Luan 👋',
        skillsHeading: 'Habilidades',
        toolsHeading: 'Ferramentas',
        projectsHeading: 'Projetos',
        contactHeading: 'Contato',
    }
};

function changeLanguage(language) {
    const elements = document.querySelectorAll('[id]');
    elements.forEach((element) => {
        const translation = translations[language][element.id];
        if (translation) {
            element.textContent = translation;
        }
    });
}

changeLanguage('en');