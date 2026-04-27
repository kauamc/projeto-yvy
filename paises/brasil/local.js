const fatos = document.querySelectorAll('.fatos-im li')

fatos.forEach(fato => {
    fato.addEventListener('click', () => {
        const p = fato.querySelector('p')
        p.classList.toggle('fato-ativo')
    })
})