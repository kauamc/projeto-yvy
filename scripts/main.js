function iniciarComponentes() {
    carregarComponentes('header', '/componentes/header.html')
    carregarComponentes('footer', '/componentes/footer.html')
}

document.addEventListener('DOMContentLoaded', () => {
    iniciarComponentes()
})