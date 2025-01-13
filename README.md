# Frontend - Gerenciamento de Disciplinas

Este é o **frontend** do projeto de **Gerenciamento de Disciplinas**, desenvolvido com **React**. O aplicativo permite que os usuários visualizem disciplinas, adicionem notas e calculem a média das disciplinas.

## Tecnologias Utilizadas

- **React**: Framework para a construção da interface de usuário.
- **Axios**: Para realizar requisições HTTP para o backend.
- **React Router**: Para navegação entre as páginas.
- **Styled-components**: Para estilização de componentes.
- **Jest**: Para testes unitários e de integração.

## Backend

O **backend** deste projeto está sendo desenvolvido separadamente e segue a mesma lógica de **CRUD** e **API RESTful**. O backend pode ser encontrado nas versões desenvolvidas em **Node.js**, **Django** e **Laravel**. Todos os backends funcionam na porta **3001** e seguem a mesma lógica de CRUD e API RESTful para servir o frontend na porta **3000**.

### Tecnologias do Backend

- **Node.js**: Backend em Node.js com Express.
- **Django**: Backend utilizando Django REST framework.
- **Laravel**: Backend utilizando Laravel com SQLite.

## Pré-requisitos

- **Node.js**
- **npm** (gerenciador de pacotes)

## Instalação

### 1. Clone o repositório:

```bash
git clone https://github.com/jardelva96/react.git
```
2. Navegue até o diretório do frontend:
```bash
cd react
```
3. Instale as dependências do projeto:
```bash
cd frontend
npm install
```
4. Instale o Jest para rodar os testes do frontend:
```bash

npm install --save-dev jest
```
5. Inicie o servidor de desenvolvimento:
```bash
npm start
```
O aplicativo será executado no http://localhost:3000.

6. Configurando o Jest
- **Certifique-se de que o Jest esteja configurado corretamente no seu projeto. O Jest será usado para realizar os testes unitários e de integração.
```bash
npm test
```
Isso iniciará o Jest em modo interativo, mostrando quais testes estão sendo executados.

Rodando os testes em modo contínuo (watch mode):
```bash
npm test -- --watch
```
Isso fará com que o Jest reexecute os testes automaticamente à medida que você faz modificações no código.

### Como rodar o backend

#### 1. **Node.js** (Porta 3001)

Para rodar o backend com **Node.js**:

1. Navegue até a pasta do backend:

    ```bash
    cd backend/node
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Inicie o servidor:

    ```bash
    node server.js
    ```

O servidor estará rodando em `http://localhost:3001`.

#### 2. **Django** (Porta 3001)

Para rodar o backend com **Django**:

1. Navegue até a pasta do backend:

    ```bash
    cd backend/django
    ```

2. Crie um ambiente virtual (se ainda não tiver criado):

    ```bash
    python -m venv venv
    ```

3. Ative o ambiente virtual:

    - **Windows**:

        ```bash
        venv\Scripts\activate
        ```

    - **Linux/macOS**:

        ```bash
        source venv/bin/activate
        ```

4. Instale as dependências do projeto:

    ```bash
    pip install -r requirements.txt
    ```

5. Execute as migrações do banco de dados:

    ```bash
    python manage.py migrate
    ```

6. Inicie o servidor:

    ```bash
    python manage.py runserver 0.0.0.0:3001
    ```

O servidor estará rodando em `http://localhost:3001`.

#### 3. **Laravel** (Porta 3001)

Para rodar o backend com **Laravel**:

1. Navegue até a pasta do backend:
    ```bash
    cd backend/laravel/disciplinas-api
    ```

2. Instale as dependências do projeto:
    ```bash
    composer install
    ```

3. Execute as migrações do banco de dados:
    ```bash
    php artisan migrate
    ```

4. Inicie o servidor:
    ```bash
    php artisan serve --host=0.0.0.0 --port=3001
    ```
- servidor estará rodando em `http://localhost:3001`.

Funcionalidades
- **Visualização das Disciplinas: Exibe uma lista de disciplinas com suas respectivas notas.
- **Adicionar Notas: Permite adicionar notas às disciplinas e calcular a média.
- **Adicionar Disciplina: Adiciona uma nova disciplina à lista.
- **Editar Disciplina: Permite editar o nome e a descrição de uma disciplina.
- **Excluir Disciplina: Permite excluir uma disciplina da lista.
- **Estrutura do Projeto
- **src/: Contém todos os componentes do frontend.
- **Disciplinas.js: Componente principal para o gerenciamento das disciplinas.
- **App.js: Arquivo de configuração principal da aplicação.
- **public/: Contém o arquivo index.html e outros arquivos públicos.
- **__tests__/: Contém os arquivos de teste para o Jest.
- **API Backend
- **Este frontend se conecta ao backend que fornece os dados das disciplinas. Certifique-se de que o backend esteja configurado corretamente e executando no endereço correto (por padrão, http://localhost:3001).

Exemplos de Endpoints da API:
- **GET /api/disciplinas: Retorna todas as disciplinas.
- **POST /api/disciplinas: Adiciona uma nova disciplina.
- **PUT /api/disciplinas/{id}: Edita uma disciplina existente.
- **DELETE /api/disciplinas/{id}: Exclui uma disciplina.
- **PUT /api/disciplinas/{id}/nota: Adiciona uma nova nota a uma disciplina.
