// Troca de informações
    const ID = document.getElementById('p-id').textContent
// Troca de informações

fetch('../dados.json')
    .then(res => res.json())
    .then(dados => {
        const pais = dados.find(p => p.id === ID)
        
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
        lema.innerHTML = `<i>&quot${pais.lema}&quot</i>`
        if(pais.lema === null){
            lema.innerHTML = `País sem lema oficial`
        }
        nomeCompleto.innerHTML = pais.nomeCompleto
        idh.innerHTML = pais.idh
        pib.innerHTML = `US$ ${pais.pib.toLocaleString('pt-BR')}`
        sisPolitico.innerHTML = pais.sisPolitico
        sisEconomico.innerHTML = pais.sisEconomico
        ddi.innerHTML = `+${pais.ddi}`
        principalReligiao.innerHTML = pais.principalReligiao
    })