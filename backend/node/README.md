# Gerenciamento de Disciplinas

Este projeto tem como objetivo gerenciar disciplinas acadêmicas, permitindo o cadastro de disciplinas, a adição de notas e o cálculo da média de cada disciplina. O sistema foi desenvolvido utilizando **React** no frontend, com foco na criação de uma interface interativa e dinâmica, e o **backend** está sendo desenvolvido separadamente.

## Tecnologias Usadas

- **Frontend**: React, JavaScript, CSS
- **Testes**: Jest, React Testing Library
- **Backend**: Em construção (RESTful API com Node.js ou Laravel)
- **Banco de Dados**: SQLite ou MySQL (em breve)

## Funcionalidades Implementadas

- **Exibição de Disciplinas**: O sistema lista todas as disciplinas cadastradas, incluindo o nome, descrição e a média calculada com base nas notas.
- **Cálculo de Média**: As médias das disciplinas são automaticamente calculadas com base nas notas inseridas.
- **Adicionar Notas**: O usuário pode adicionar novas notas para cada disciplina, e a média será recalculada automaticamente.
- **Adicionar Nova Disciplina**: O usuário pode adicionar novas disciplinas, fornecendo um nome e uma descrição.
- **Testes Automatizados**: Todos os principais recursos do frontend foram testados utilizando a framework Jest, garantindo a funcionalidade do sistema.

## Estrutura do Projeto
```bash

├── src/
│   ├── components/             # Componentes do projeto
│   ├── pages/                  # Páginas do projeto
│   │   └── Disciplinas.js      # Página principal para gestão de disciplinas
│   ├── styles/                 # Arquivos CSS
│   ├── App.js                  # Arquivo principal do React
│   ├── setupTests.js           # Configuração dos testes
├── public/                     # Arquivos estáticos
├── package.json                # Dependências e scripts do projeto
└── README.md                   # Documentação do projeto
```
## Como Rodar o Projeto

### Passo 1: Instalar as dependências

Para rodar o projeto, primeiro instale as dependências com o seguinte comando:

```bash
npm install
```
### Passo 2: Rodar o projeto
Após a instalação, para rodar o frontend do projeto localmente, execute o comando:

```bash
npm start
```
Isso vai iniciar o servidor de desenvolvimento e o projeto estará disponível em http://localhost:3000.

### Passo 3: Executar os Testes
Os testes automatizados podem ser rodados com o comando:
```bash
npm test
```
Este comando irá executar os testes definidos no projeto, utilizando a biblioteca Jest.

### Status do Backend
O backend está em construção, e será uma API RESTful utilizando Node.js ou Laravel para gerenciar os dados.
Atualmente, o sistema utiliza uma estrutura simplificada no frontend, com as disciplinas armazenadas no estado local. Em breve, será integrado com o backend, utilizando um banco de dados (SQLite ou MySQL).
A integração com o backend incluirá as funcionalidades de persistência de dados e cálculo de média no servidor.
