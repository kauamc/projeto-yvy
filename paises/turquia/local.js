const fatos = document.querySelectorAll('.fatos-im li')

fatos.forEach(fato => { 
        fato.addEventListener('click', () => {
            if (window.innerWidth <= 800) {
                fato.classList.toggle('fato-ativo')
            }
        })
})