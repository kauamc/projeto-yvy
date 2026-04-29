const fatos = document.querySelectorAll('.fatos-im li')

fatos.forEach(fato => {
    fato.addEventListener('click', () => {
        fato.classList.toggle('fato-li-ativo')

        const p = fato.querySelector('p')
        p.classList.toggle('fato-ativo')
    })
})