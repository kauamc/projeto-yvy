const base = window.location.hostname.includes('github.io') ? '/projeto-yvy' : '';

function caminho(rota){
    return `${base}${rota}`;
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

function carregarComponente(id, arquivo) {
    return fetch(arquivo)
        .then(res => res.text())
        .then(html => {
            const elemento = document.getElementById(id)
            if(elemento){
                elemento.innerHTML = html
            }
        })
        .catch(erro => console.error(erro))
}

function mostrarInfoExtras() {
    const infoExtras = document.querySelector('#info-extras')
    const seta = document.querySelector('#seta-info-extra')

    infoExtras.style.display = infoExtras.style.display === 'grid' ? 'none' : 'grid'
    seta.style.transform = infoExtras.style.display === 'grid' ? 'rotate(180deg)' : 'rotate(0deg)'
}

function iniciarMapa() {
    var mapa = document.getElementById('mapa')
    var info = document.getElementById('info')

    if(!mapa) return

    mapa.addEventListener('click', function(evento) {
        var outrosEstados = mapa.querySelectorAll('path');

        outrosEstados.forEach(function(estado){
            estado.classList.remove('selecionado')
        });

        var estado = evento.target.closest('path');

        if (!estado) return;

        info.innerHTML = `<p>${estado.dataset.name}</p>`;
        estado.classList.add('selecionado')
    });
}

function preencherDados(pais) {
    if (!pais) return;

    const bandeira = document.getElementById('p-bandeira')
    const nome = document.getElementById('p-nome')
    const capital = document.getElementById('p-capital')
    const localizacao = document.getElementById('p-localizacao')
    const idioma = document.getElementById('p-idioma')
    const populacao = document.getElementById('p-populacao')
    const area = document.getElementById('p-area')
    const moedaNome = document.getElementById('moeda-nome')
    const moedaSimbolo = document.getElementById('moeda-simbolo')
    const moedaIso = document.getElementById('moeda-iso')
    const lema = document.getElementById('p-lema')
    
    const nomeCompleto = document.getElementById('p-nome-completo')
    const idh = document.getElementById('p-idh')
    const pib = document.getElementById('p-pib')
    const sisPolitico = document.getElementById('p-sis-politico')
    const sisEconomico = document.getElementById('p-sis-economico')
    const ddi = document.getElementById('p-ddi')
    const principalReligiao = document.getElementById('p-principal-religiao')

    bandeira.innerHTML = `<img src="bandeira.png" alt="Bandeira de ${pais.nome}">`
    nome.innerHTML = pais.nome
    capital.innerHTML = pais.capital
    localizacao.innerHTML = pais.localizacao
    idioma.innerHTML = pais.idioma
    populacao.innerHTML = pais.populacao.toLocaleString('pt-BR')
    area.innerHTML = `${pais.area.toLocaleString('pt-BR')} km²`
    moedaNome.innerHTML = pais.moeda.nome
    moedaSimbolo.innerHTML = pais.moeda.simbolo
    moedaIso.innerHTML = pais.moeda.iso
    if (pais.lema) {
        lema.innerHTML = `<i>"${pais.lema}"</i>`;
    } else {
        lema.innerHTML = `País sem lema oficial`;
    }
    nomeCompleto.innerHTML = pais.nomeCompleto
    idh.innerHTML = pais.idh.toFixed(3)
    pib.innerHTML = `US$ ${pais.pib.toLocaleString('pt-BR')}`
    sisPolitico.innerHTML = pais.sisPolitico
    sisEconomico.innerHTML = pais.sisEconomico
    ddi.innerHTML = `+${pais.ddi}`
    principalReligiao.innerHTML = pais.principalReligiao
}

function iniciarPagina() {
    carregarComponente('corpo', caminho('/componentes/corpo-pais.html'))

    .then(function() {
        // Header e Footer
        return Promise.all([
            carregarComponente('header', caminho('/componentes/header.html')),
            carregarComponente('footer', caminho('/componentes/footer.html'))
        ]);
    })

    .then(function() {
        ajustarLinks()

        // Dados
        return fetch(caminho('/paises/dados.json'))
    })

    .then(function(res) {
        return res.json();
    })

    .then(function(dados) {
        const pais = dados.find(p => p.id === document.getElementById('p-id').textContent)

        // Mapa
        return fetch('territorio.svg')
        .then(function(resSvg) {
                return resSvg.text();
            })
            .then(function(svg) {
                return { pais: pais, svg: svg };
            });
    })

    .then(function(resultado) {

        // Inserindo mapa
        document.querySelector('#territorio').innerHTML = resultado.svg

        // Funcionalidades

        iniciarMapa();
        preencherDados(resultado.pais);
    })

    .catch(function(erro) {
        console.error("Erro geral:", erro);
    });
}

document.addEventListener('DOMContentLoaded', iniciarPagina());