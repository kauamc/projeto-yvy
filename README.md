# Projeto YVY - Dados e Cultura

[🇧🇷 Português](#-português) | [🇺🇸 English](#-english)

---

## 🇧🇷 Português

Um projeto que une paixão por mapas, informação e cultura.

## O que é o YVY?

O YVY é um projeto com fins de estudo e prática, focado no uso de HTML, CSS e JavaScript básico. Ele apresenta uma página principal que redireciona o usuário ao país escolhido.

Na página de cada país, são exibidos dados como: bandeira, nome, área, população, sistema econômico, entre outros. Além disso, alguns países (como o Brasil) contam com uma seção extra chamada Seção Imersiva, que traz uma apresentação cultural e histórica do local, permitindo uma melhor conexão com o país.

A palavra *yvy* vem do tupi-guarani e pode significar terra, chão ou território, o que se relaciona diretamente com a proposta do projeto.

## Quem sou eu e por que o projeto existe?

Me chamo Kauã e sou estudante de programação há pouco tempo, tendo retomado os estudos em 2026. Já conhecia um pouco de HTML e CSS desde os 13 anos, mas havia abandonado o aprendizado na época. Em 2025, decidi voltar com mais foco, com o objetivo de seguir carreira como desenvolvedor.

Após concluir o curso de HTML e CSS do Curso em Vídeo, senti a necessidade de aplicar o que aprendi em um projeto maior. Apesar de já ter desenvolvido projetos menores (disponíveis no repositório [Projetos de Estudo](https://kauamc.github.io/projetos-de-estudo)), ainda queria algo mais completo.

A ideia então surgiu a partir de um interesse pessoal: aprender sobre países e cultura. Desde o início, pensei em dividir cada página em duas partes principais: uma com dados e outra com a cultura e a “alma” do país. A partir disso, fui desenvolvendo ideias e buscando referências.

Meu objetivo não era dominar completamente HTML e CSS, mas entender se o que eu sabia já era suficiente para avançar para novas linguagens sem precisar voltar ao básico depois. Atualmente, estou me preparando para iniciar os estudos em JavaScript de forma mais aprofundada.

## Tecnologias, ferramentas e estratégias utilizadas

O projeto foi desenvolvido com a abordagem Mobile First, visando melhor responsividade. Foram utilizados Flexbox, Grid Layout, Media Queries e mapas SVG interativos.

Como as páginas seguem uma padronização (principalmente na seção de dados), seria muito repetitivo criar cada uma manualmente. Para evitar isso, foi utilizado um único arquivo modelo em HTML, reutilizado com auxílio da função `fetch` no JavaScript.

Os estilos em CSS também foram organizados de forma reutilizável, permitindo o uso das mesmas classes em diferentes partes do projeto.

Além disso, os dados dos países foram centralizados em um único arquivo JSON. Com o uso de JavaScript, esses dados são inseridos dinamicamente nas páginas, evitando a necessidade de alterar o HTML diretamente a cada novo país.

Para desenvolvimento e testes, foram utilizados:

- Visual Studio Code  
- Navegadores: Google Chrome, Microsoft Edge, Brave, Zen Browser e Firefox  
- No celular: Google Chrome  

## Como acessar e usar o YVY

Para acessar, basta [clicar aqui](https://kauamc.github.io/projeto-yvy/).

Caso queira rodar localmente, é necessário abrir o `index.html` em um servidor local, como o Live Server.

Em telas menores (até 800px), o usuário verá uma interface simples com um botão "Começar a explorar". Ao clicar ou rolar a página, é possível escolher um país na lista organizada por continentes. Países em vermelho ainda não possuem página.

Em telas maiores, há um mapa interativo que permite acessar países diretamente. Como essa navegação pode não ser prática para todos, também há a opção de acessar pela lista.

Ao entrar em um país, são exibidas as seguintes informações básicas:

- Bandeira  
- Capital  
- Localização  
- Idioma  
- População  
- Área  
- Moeda (nome, símbolo e código ISO)  
- Lema  

E as seguintes informações extras (encolhidas em telas pequenas):

- Nome completo  
- IDH  
- PIB  
- Sistema político e econômico  
- DDI  
- Principal religião  

Também há um mapa interativo do território. Em alguns casos (como países mais compridos horizontalmente), o layout foi adaptado para melhor visualização.

A Seção Imersiva não está disponível para todos os países. Atualmente, pode ser encontrada nas páginas do Brasil e da Turquia.

---

## 🇺🇸 English

A project that brings together a passion for maps, information, and culture.

## What is YVY?

YVY is a study and practice project focused on HTML, CSS, and basic JavaScript. It features a main page that redirects the user to a selected country.

On each country page, data such as flag, name, area, population, economic system, and others are displayed. In addition, some countries (such as Brazil) include an extra section called the Immersive Section, which presents cultural and historical aspects, allowing a deeper connection with the country.

The word *yvy* comes from Tupi-Guarani and can mean land, ground, or territory, which directly relates to the project's purpose.

## Who am I and why does this project exist?

My name is Kauã, and I am a programming student who recently resumed studies in 2026. I had some prior knowledge of HTML and CSS since I was 13, but I stopped learning at the time. In 2025, I decided to return with more focus, aiming to pursue a career as a developer.

After finishing the HTML and CSS course by Curso em Vídeo, I felt the need to apply what I had learned in a larger project. Although I had already created smaller projects (available in the repository [Study Projects](https://kauamc.github.io/projetos-de-estudo)), I wanted something more complete.

The idea came from a personal interest: learning about countries and culture. From the beginning, I planned to divide each page into two main parts: one focused on data and another focused on the culture and “soul” of the country. From there, I developed ideas and looked for references.

My goal was not to fully master HTML and CSS, but to understand whether my current knowledge was enough to move forward to new languages without needing to go back to the basics later. Currently, I am preparing to start studying JavaScript more deeply.

## Technologies, tools, and strategies

The project was developed using a Mobile First approach, aiming for better responsiveness. It uses Flexbox, Grid Layout, Media Queries, and interactive SVG maps.

Since the pages follow a standardized structure (especially in the data section), creating each one manually would be repetitive. To solve this, a single HTML template file was used and reused with the help of the JavaScript `fetch` function.

The CSS styles were also organized to be reusable, allowing the same classes to be used across different parts of the project.

Additionally, all country data was centralized in a single JSON file. With JavaScript, this data is dynamically inserted into the pages, avoiding the need to manually edit the HTML for each new country.

For development and testing, the following were used:

- Visual Studio Code  
- Browsers: Google Chrome, Microsoft Edge, Brave, Zen Browser, and Firefox  
- Mobile: Google Chrome  

## How to access and use YVY

To access the project, simply [click here](https://kauamc.github.io/projeto-yvy/).

To run locally, you need to open the `index.html` file on a local server, such as Live Server.

On smaller screens (up to 800px), the user will see a simple interface with a "Start exploring" button. By clicking or scrolling, it is possible to select a country from a list organized by continent. Countries in red are not yet available.

On larger screens, an interactive map allows direct access to countries. Since this may not be practical for everyone, the list option is also available.

When accessing a country, the following basic information is displayed:

- Flag  
- Capital  
- Location  
- Language  
- Population  
- Area  
- Currency (name, symbol, and ISO code)  
- Motto  

Additional information (collapsed on smaller screens):

- Full name  
- HDI  
- GDP  
- Political and economic system  
- Country code  
- Main religion  

There is also an interactive territorial map. In some cases (such as horizontally long countries), the layout was adapted for better visualization.

The Immersive Section is not available for all countries. Currently, it can be found on the Brazil and Turkey pages.