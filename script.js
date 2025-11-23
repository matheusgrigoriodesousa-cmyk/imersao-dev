// Seleciona os elementos do HTML com os quais vamos interagir e os armazena em variáveis.
let cardcontainer = document.querySelector(".card-container");
const searchInput = document.querySelector(".search-container input");

// Declara uma variável global 'dados'. Ela será usada para armazenar a lista de sistemas operacionais que virá do arquivo data.json.
// Manter os dados em uma variável global evita ter que buscar o arquivo JSON repetidamente.
let dados = [];
 
// Função assíncrona para buscar os dados do arquivo JSON.
async function buscarDados() {
    // Otimização: Se os dados já foram carregados (o array 'dados' não está vazio), a função não faz nada.
    if (dados.length === 0) {
        try {
            // 'fetch' busca o arquivo 'data.json'. 'await' pausa a execução até que a promessa seja resolvida.
            let resposta = await fetch("data.json");
            // '.json()' converte a resposta em um objeto JavaScript. 'await' pausa novamente.
            dados = await resposta.json();
        } catch (error) {
            // Se ocorrer um erro na busca (ex: arquivo não encontrado), ele é exibido no console.
            console.error("Erro ao buscar os dados:", error);
        }
    }
}

// Função para criar e exibir os cards na tela com base nos dados fornecidos.
function renderizarCards(dados) {
    cardcontainer.innerHTML = ""; // Limpa os cards existentes antes de renderizar novos.

    // Verifica se o array de dados está vazio. Se estiver, exibe uma mensagem de "nenhum resultado".
    if (dados.length === 0) {
        cardcontainer.innerHTML = `<p class="no-results">Nenhum sistema operacional encontrado para sua busca.</p>`;
        return; // Encerra a função para não executar o loop abaixo.
    }

    // Itera sobre cada objeto 'dado' no array de dados.
    for(let dado of dados){
        // Cria um novo elemento <article> para representar o card.
        let article = document.createElement("article");
        article.classList.add("card");
        // Preenche o conteúdo do card com os dados do objeto, usando template literals (` `) para facilitar a inserção de variáveis.
        article.innerHTML = `
        <h2>${dado.nome}</h2>
        <p class="info-extra">${dado.desenvolvedor} • ${dado.categoria}</p>
        <p class="info-ano">Lançamento: ${dado.ano}</p>
        <p>${dado.descricao}</p>
        <p class="curiosity"><strong>Curiosidade:</strong> ${dado.curiosidade}</p>
        `;
        // Adiciona o card recém-criado ao container de cards na página.
        cardcontainer.appendChild(article);

        // Adiciona um evento de clique a cada card. Ao clicar, abre o link correspondente em uma nova aba.
        article.addEventListener('click', () => {
            window.open(dado.link, '_blank');
        });
    }
}

// Função principal que filtra os dados com base no termo digitado no campo de busca.
async function iniciarBusca() {
    const termoBusca = searchInput.value.toLowerCase();

    // 'filter' cria um novo array com todos os elementos que passam no teste da função.
    const dadosFiltrados = dados.filter(dado => 
        // A condição verifica se o nome ou a descrição do sistema (em minúsculas) incluem o termo da busca.
        (dado.nome.toLowerCase().includes(termoBusca) || 
        dado.descricao.toLowerCase().includes(termoBusca))
    );
    renderizarCards(dadosFiltrados); // Chama a função para renderizar apenas os cards filtrados.
}

// Função de configuração inicial que é executada quando a página carrega.
async function setup() {
    await buscarDados(); // Garante que os dados do JSON estejam carregados antes de continuar.
    renderizarCards(dados); // Mostra todos os cards ao carregar.
    
    // Adiciona um "escutador" de eventos ao campo de busca. O evento 'input' é disparado toda vez que o usuário digita algo.
    searchInput.addEventListener('input', iniciarBusca);
    // Adiciona um "escutador" ao botão de busca para acionar a busca ao ser clicado.
    document.getElementById('botao-busca').addEventListener('click', iniciarBusca);
}

// Inicia a configuração da página assim que o script é carregado.
setup();
