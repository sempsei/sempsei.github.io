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
    
    const message = document.getElementById('message');
    if (language === 'en') {
        message.src = "https://readme-typing-svg.herokuapp.com/?color=8727a8&size=33&center=true&vCenter=true&width=1000&lines=I'm+21+years+old;I+am+from+São+José+do+Rio+Preto,+SP;I+study+Computer+Science+at+Estácio;Be+Welcome!+:%29";
    } else if (language === 'pt-BR') {
        message.src = "https://readme-typing-svg.herokuapp.com/?color=8727a8&size=33&center=true&vCenter=true&width=1000&lines=Eu+tenho+21+anos;Eu+sou+de+São+José+do+Rio+Preto,+SP;Eu+estudo+Ciência+da+Computação+na+Estácio;Seja+Bem-vindo!+:%29";
    }
}
function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
}
const copyButton = document.querySelector('.copy');

copyButton.addEventListener('click', () => {
    copyToClipboard('luan.rezende.contato@gmail.com');
}); 