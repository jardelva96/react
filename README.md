# Frontend - Gerenciamento de Disciplinas

Este é o **frontend** do projeto de **Gerenciamento de Disciplinas**, desenvolvido com **React**. O aplicativo permite que os usuários visualizem disciplinas, adicionem notas e calculem a média das disciplinas.

## Tecnologias Utilizadas

- **React**: Framework para a construção da interface de usuário.
- **Axios**: Para realizar requisições HTTP para o backend.
- **React Router**: Para navegação entre as páginas.
- **Styled-components**: Para estilização de componentes.
- **Jest**: Para testes unitários e de integração.

## Backend

O **backend** deste projeto está sendo desenvolvido separadamente e será responsável por fornecer os dados das disciplinas e lidar com a persistência das informações. O frontend se conecta ao backend para realizar operações como adicionar notas e criar novas disciplinas.

**Status do Backend**: Em desenvolvimento.

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

## Testes com Jest

O projeto utiliza **Jest** para realizar testes unitários e de integração. Para rodar os testes, siga as etapas abaixo:

1. Para rodar todos os testes:

    ```bash
    npm test
    ```

   Isso iniciará o Jest em modo interativo, mostrando quais testes estão sendo executados.

2. Para rodar os testes em modo contínuo (watch mode), onde o Jest irá automaticamente reexecutar os testes à medida que você fizer mudanças nos arquivos:

    ```bash
    npm test -- --watch
    ```

3. Para rodar apenas testes específicos:

    - Use o filtro de teste para rodar apenas testes de uma funcionalidade específica.
    - Por exemplo, `npm test -- testsNamePattern="discs"` irá rodar apenas os testes com a palavra "discs".

## Funcionalidades

- **Visualização das Disciplinas**: Exibe uma lista de disciplinas com suas respectivas notas.
- **Adicionar Notas**: Permite adicionar notas às disciplinas e calcular a média.
- **Adicionar Disciplina**: Adiciona uma nova disciplina à lista.

## Estrutura do Projeto

- `src/`: Contém todos os componentes do frontend.
  - `Disciplinas.js`: Componente principal para o gerenciamento das disciplinas.
  - `App.js`: Arquivo de configuração principal da aplicação.
- `public/`: Contém o arquivo `index.html` e outros arquivos públicos.
- `__tests__/`: Contém os arquivos de teste para o Jest.

## API Backend

Este frontend se conecta ao backend que fornece os dados das disciplinas. Certifique-se de que o backend esteja configurado corretamente e executando no endereço correto (por padrão, `http://localhost:3001`).


