const base = window.location.hostname.includes('github.io') ? '/projeto-yvy' : '';

function caminho(rota){
    return `${base}${rota}`;
}

function iniciarComponentes() {
    Promise.all([
        carregarComponente('header', caminho('/componentes/header.html')),
        carregarComponente('footer', caminho('/componentes/footer.html'))
    ]).then(() => {
        ajustarLinks()
    })
}

function ajustarLinks(){
    const links = document.querySelectorAll('[data-link]')
    links.forEach(link => {
        link.href = caminho(link.dataset.link);
    });

    const imagens = document.querySelectorAll('[data-src]')
    imagens.forEach(img => {
        img.src = caminho(img.dataset.src);
    });
}

document.addEventListener('DOMContentLoaded', iniciarComponentes);