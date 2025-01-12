# Frontend - Gerenciamento de Disciplinas

Este é o frontend do projeto de **Gerenciamento de Disciplinas**, desenvolvido com **React**. O aplicativo permite que os usuários visualizem disciplinas, adicionem notas e calculem a média das disciplinas.

## Tecnologias Utilizadas

- **React**: Framework para a construção da interface de usuário.
- **Axios**: Para realizar requisições HTTP para o backend.
- **React Router**: Para navegação entre as páginas.
- **Styled-components**: Para estilização de componentes.

## Pré-requisitos

- **Node.js** 
- **npm** (gerenciador de pacotes)

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/jardelva96/react.git
    ```

2. Navegue até o diretório do frontend:

    ```bash
    cd react
    ```

3. Instale as dependências do projeto:

    ```bash
    npm install
    ```

4. Inicie o servidor de desenvolvimento:

    ```bash
    npm start
    ```

   O aplicativo será executado no `http://localhost:3000`.

## Funcionalidades

- **Visualização das Disciplinas**: Exibe uma lista de disciplinas com suas respectivas notas.
- **Adicionar Notas**: Permite adicionar notas às disciplinas e calcular a média.
- **Adicionar Disciplina**: Adiciona uma nova disciplina à lista.

## Estrutura do Projeto

- `src/`: Contém todos os componentes do frontend.
  - `Disciplinas.js`: Componente principal para o gerenciamento das disciplinas.
  - `App.js`: Arquivo de configuração principal da aplicação.
- `public/`: Contém o arquivo `index.html` e outros arquivos públicos.

## API Backend

Este frontend se conecta ao backend que fornece os dados das disciplinas. Certifique-se de que o backend esteja configurado corretamente e executando no endereço correto (por padrão, `http://localhost:3001`).

