const btnVoltarTopo = document.getElementById("back-to-top");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnVoltarTopo.style.display = "block";
    } else {
        btnVoltarTopo.style.display = "none";
    }
};

btnVoltarTopo.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};