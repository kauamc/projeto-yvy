function mostrarInfoExtras() {
    const infoExtras = document.querySelector('#info-extras')
    const seta = document.querySelector('#seta-info-extra')

    infoExtras.style.display = infoExtras.style.display === 'grid' ? 'none' : 'grid'
    seta.style.transform = infoExtras.style.display === 'grid' ? 'rotate(180deg)' : 'rotate(0deg)'
}

fetch('body.html')
    .then(res => res.text())
    .then(corpo => {
        document.getElementById('corpo').innerHTML = corpo
    })

// Troca de informações
    const ID = "br"
// Troca de informações

fetch('dados.json')
    .then(res => res.json())
    .then(dados => {
        const pais = dados.find(p => p.id === ID)
        
        fetch(`${pais.nome.toLowerCase()}.svg`)
            .then(resposta => resposta.text())
            .then(svg => {
                document.querySelector('#territorio').innerHTML = svg

                var mapa = document.getElementById("mapa")
                var info = document.getElementById("info")

                mapa.addEventListener('click', function(evento) {
                    var outrosEstados = mapa.querySelectorAll('path')
                    outrosEstados.forEach(function(estado){
                        estado.style.fill = "lightgrey"
                    })

                    var pathClicado = evento.target
                    var estado = pathClicado.closest('path')

                    if(!estado){
                        return
                    }

                    var nome = estado.getAttribute('data-name')
                    info.innerHTML= `<p>${nome}</p>`
                    estado.style.fill = "grey"
                })
            })

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

        bandeira.innerHTML = `<img src="${pais.nome.toLowerCase()}.png" alt="Bandeira de ${pais.nome}">`
        nome.innerHTML = pais.nome
        capital.innerHTML = pais.capital
        localizacao.innerHTML = pais.localizacao
        idioma.innerHTML = pais.idioma
        populacao.innerHTML = pais.populacao
        area.innerHTML = `${pais.area} km²`
        moedaNome.innerHTML = pais.moeda.nome
        moedaSimbolo.innerHTML = pais.moeda.simbolo
        moedaIso.innerHTML = pais.moeda.iso
        lema.innerHTML = `<i>&quot${pais.lema}&quot</i>`
        
        nomeCompleto.innerHTML = pais.nomeCompleto
        idh.innerHTML = pais.idh
        pib.innerHTML = `US$ ${pais.pib}`
        sisPolitico.innerHTML = pais.sisPolitico
        sisEconomico.innerHTML = pais.sisEconomico
        ddi.innerHTML = pais.ddi
        principalReligiao.innerHTML = pais.principalReligiao
    })