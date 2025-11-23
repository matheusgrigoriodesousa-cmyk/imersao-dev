# Base de Conhecimento de Sistemas Operacionais

Uma página web interativa que funciona como uma enciclopédia sobre sistemas operacionais. O projeto foi desenvolvido como parte da Imersão Alura, com foco em praticar conceitos fundamentais de desenvolvimento front-end, como manipulação do DOM, consumo de dados via `fetch` e design responsivo.

---

## 📋 Índice

*   Visão Geral
*   Demonstração
*   Funcionalidades Detalhadas
*   Tecnologias e Conceitos Aplicados
*   Estrutura de Dados
*   Como Executar
*   Possíveis Melhorias
*   Autor

---

## 🔭 Visão Geral do Projeto

A aplicação apresenta uma lista de sistemas operacionais carregados a partir de um arquivo JSON local. O usuário pode pesquisar em tempo real por um sistema específico, e a interface filtra os resultados dinamicamente. Cada sistema é exibido em um card que contém informações relevantes e um link para saber mais.

O principal objetivo é criar uma experiência de usuário fluida e informativa, utilizando boas práticas de HTML semântico, CSS moderno e JavaScript assíncrono.

---

## 🚀 Demonstração

!Demonstração do Projeto
*(Sugestão: grave um GIF ou tire um print da tela do seu projeto em funcionamento e substitua o link acima para mostrar como ele funciona!)*

---

## ✨ Funcionalidades Detalhadas

*   **Busca Dinâmica e em Tempo Real**:
    *   A barra de pesquisa filtra os cards a cada tecla pressionada (`input` event).
    *   A busca é *case-insensitive* (não diferencia maiúsculas de minúsculas) e verifica correspondências tanto no **nome** quanto na **descrição** do sistema operacional, tornando a pesquisa mais abrangente.

*   **Renderização de Conteúdo Assíncrona**:
    *   Os dados dos sistemas não estão fixos no HTML. Eles são buscados do arquivo `data.json` usando a `fetch` API do JavaScript.
    *   O uso de `async/await` garante que os dados sejam carregados antes de tentar renderizar os cards na tela, evitando erros.

*   **Interface Responsiva**:
    *   O layout foi construído com **Flexbox**, garantindo que os elementos se ajustem de forma fluida.
    *   **Media Queries** são usadas no `style.css` para adaptar a interface a diferentes tamanhos de tela, como tablets e celulares, ajustando tamanhos de fonte, layout do cabeçalho e ocultando elementos menos essenciais em telas menores.

*   **Cards Interativos**:
    *   Cada card de sistema operacional é um elemento `<article>` que escuta por um evento de `click`.
    *   Ao ser clicado, o card redireciona o usuário para o link associado (`dado.link`), que é aberto em uma nova aba (`target="_blank"`) para não interromper a navegação na página principal.

*   **Estilização Moderna**:
    *   O tema escuro foi definido com **Variáveis CSS (Custom Properties)**, facilitando a manutenção e futuras alterações de paleta de cores.
    *   A barra de rolagem do navegador foi customizada para se integrar ao design da página.
    *   Uma animação sutil de `fadeIn` foi adicionada aos cards para uma entrada mais suave na tela.

---

## 🛠️ Tecnologias e Conceitos Aplicados

*   **HTML5**:
    *   **Estrutura Semântica**: Uso correto de tags como `<header>`, `<main>`, `<section>`, `<article>` e `<footer>` para melhorar a acessibilidade e o SEO.

*   **CSS3**:
    *   **Flexbox**: Para criar layouts flexíveis e alinhamento de componentes.
    *   **Variáveis CSS (`:root`)**: Para gerenciar a paleta de cores de forma centralizada e reutilizável.
    *   **Media Queries**: Para aplicar estilos específicos com base na largura da tela, garantindo a responsividade.
    *   **Animações (`@keyframes`)**: Para adicionar transições visuais, como o efeito de fade-in dos cards.
    *   **Pseudo-elementos**: Utilizados para customizar a aparência da barra de rolagem (`::-webkit-scrollbar`).

*   **JavaScript (ES6+)**:
    *   **Manipulação do DOM**: Criação e inserção dinâmica de elementos (`createElement`, `appendChild`).
    *   **Eventos**: Captura de interações do usuário com `addEventListener` ('input' para a busca e 'click' para os cards e botão).
    *   **Fetch API com `async/await`**: Para buscar e processar dados de forma assíncrona sem bloquear a interface.
    *   **Métodos de Array**: Uso de `.filter()` para a lógica de busca e `.forEach()` (implícito no `for...of`) para iterar sobre os dados.

---

## 📦 Estrutura de Dados

As informações de cada sistema operacional são armazenadas em um array de objetos no arquivo `data.json`. Cada objeto segue a seguinte estrutura:

```json
{
    "nome": "Nome do Sistema",
    "desenvolvedor": "Quem desenvolveu",
    "categoria": "Desktop, Mobile, Servidor, etc.",
    "descricao": "Um breve resumo sobre o sistema.",
    "ano": 2024,
    "link": "https://url.para.saber.mais",
    "curiosidade": "Um fato interessante.",
    "tags": ["tag1", "tag2"]
}


---

## 🏁 Como Executar

Este é um projeto puramente front-end e não requer um servidor ou processo de build. Para executá-lo:

1.  Clone este repositório:
    ```bash
    git clone https://github.com/seu-usuario/nome-do-repositorio.git
    ```
2.  Navegue até a pasta do projeto.
3.  Abra o arquivo `index.html` diretamente no seu navegador de preferência.

E pronto! A aplicação estará funcionando.

---

## 👨‍💻 Autor

Feito por **Matheus Grigorio de Sousa**.

*   LinkedIn
*   GitHub




