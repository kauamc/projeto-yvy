function carregarComponentes(id, arquivo) {
    fetch(arquivo)
        .then(res => res.text())
        .then(html => {
            const elemento = document.getElementById(id)
            if(elemento){
                elemento.innerHTML = html
            }
        })
}