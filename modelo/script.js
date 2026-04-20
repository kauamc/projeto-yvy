function mostrarInfoExtras() {
    const infoExtras = document.querySelector('#info-extras')
    const seta = document.querySelector('#seta-info-extra')

    infoExtras.style.display = infoExtras.style.display === 'grid' ? 'none' : 'grid'
    seta.style.transform = infoExtras.style.display === 'grid' ? 'rotate(180deg)' : 'rotate(0deg)'
}

fetch('territorio.svg')
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

fetch('dados.json')
    .then(res => res.json())
    .then(dados => {
        const nome = document.querySelector('#p-nome')
        nome.innerHTML = dados[0].nome
    })