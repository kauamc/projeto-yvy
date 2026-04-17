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