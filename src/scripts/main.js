document.addEventListener('DOMContentLoaded', function () {
    const hero = document.querySelector('.hero');
    const alturahero = hero.clientHeight;
    const personagens = document.querySelectorAll('.personagens-list');

    for (let i = 0; i < personagens.length; i++) {
        personagens[i].addEventListener('click', function(personagem){
            const personagemAlvo =personagem.target.dataset;
            personagemAlvo.classList.add('personagens-list--is-active');
            console.log(personagemAlvo)
        })
    }

    window.addEventListener('scroll', function () {
        const posiçãoatual = window.scrollY;

        if (posiçãoatual < alturahero) {
            exibeheader();
        } else {
            ocultaheader();
        }
    })
})

function exibeheader() {
    const header = document.querySelector('.header');
    header.classList.add('header--is-active');
}

function ocultaheader() {
    const header = document.querySelector('.header');
    header.classList.remove('header--is-active');
}