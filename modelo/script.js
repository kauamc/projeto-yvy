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
    })