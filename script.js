const btnVoltarTopo = document.getElementById("back-to-top");

window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnVoltarTopo.style.display = "block";
    } else {
        btnVoltarTopo.style.display = "none";
    }
};

btnVoltarTopo.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

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

function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
}
const copyButton = document.querySelector('.copy');

copyButton.addEventListener('click', () => {
    copyToClipboard('luan.rezende.contato@gmail.com');
});