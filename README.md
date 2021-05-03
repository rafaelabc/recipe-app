<h1 align="center">
    <img alt="recipe-app" title="#recipe-app" src="./assets/recipe-book.png" width="200px" />
</h1>

<p align="center">
 <img alt="License" src="https://img.shields.io/badge/license-MIT-orange">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/rafaelabc/recipe-app">


  <a href="https://github.com/tgmarinho/nlw1/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/rafaelabc/recipe-app">
  </a>


   <a href="https://github.com/tgmarinho/nlw1/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/forks/rafaelabc/recipe-app?style=social">
  </a>
   <a href="https://github.com/tgmarinho/nlw1/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/rafaelabc/recipe-app?style=social">
  </a>
</p>
<p align="center">

  <img alt="Web" src="https://img.shields.io/badge/web-react-9cf">
<img alt="Web" src="https://img.shields.io/badge/server-spring-green">

  <img alt="License" src="https://img.shields.io/badge/npm-6.14.11-red">

</p>


## Sobre o projeto

RecipeApp - é um gerenciador de receitas, seu objetivo é centralizar todas as receitas em um só lugar e também sugerir novas receitas vindas da API
[The Meal DB][meal].

Os usuários encontrarão as seguintes funcionalidades:
- Cadastrar nova receita
- Editar receita existente
- Excluir receita existente
- Visualizar receitas
- Visualizar Sugestões de Receitas

Os usuários terão acesso ao aplicativo web, onde poderão:
- Realizar operações de criar e editar uma receita
- Visualizar as receitas cadastras
- Visualizar sugestões de receitas
- Excluir receitas

Projeto desenvolvido para aplicar estudos do [ReactJS][reactjs] e [SpringBoot][spring]

## Layout

O layout da aplicação está disponível no Figma:

<a href="https://www.figma.com/file/VZEkjX9ZLRiY0dXSbYEnHJ/RecipeApp">
  <img alt="Made by rafaelabc" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
</a>


## Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website**

- [React][reactjs]
- [Axios][axios]
- [MaterialUI][materialui]

#### **Server**

  - [SpringBoot][spring]
  - [Postgres][postgres]

## Como executar o projeto

Este projeto está dividido em 2 partes:
1. FrontEnd
2. Backend

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js][nodejs], [Java JDK 11][java-11], [Maven][maven] e [PostgresSQL][postgres].
Além disto é bom ter um editor para trabalhar com o código como [VSCode][vscode] ou [SpringTools][springtools]

### Banco de dados

O banco de dados utilizado é o PostgresSQL
Antes de iniciar a aplicação crie o banco de dados: `CREATE DATABASE recipe_app`

### Rodando o Backend (Servidor)
Verifique no arquivo **application.properties** se o nome de usuário e senha
de seu banco de dados é o default (`username: postgres e password: postgres`). Caso não seja, troque de acordo com suas credenciais.

```bash
# Clone este repositório
$ git clone https://github.com/rafaelabc/recipe-app
# Acesse a pasta do projeto no terminal/cmd
$ cd recipe-app

# Acesse a pasta do backend do projeto no terminal/cmd
$ cd backend

# Inicie a aplicação
$ mvn spring-boot:run

# A aplicação será aberta na porta:8080
```

### Rodando a aplicação web (Front End)

```bash
# Clone este repositório
$ git clone https://github.com/rafaelabc/recipe-app

# Acesse a pasta do projeto no terminal/cmd
$ cd recipe-app

# Acesse a pasta do frontend do projeto no terminal/cmd
$ cd frontend

# Instale as dependências
$ yarn install

# Inicie a aplicação
$ yarn start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000
```

## Licença

Este projeto esta sobe a licença MIT.

Feito por Rafaela Custódio - [Entre em contato!](https://www.linkedin.com/in/rafaela-custodio/)

[axios]: https://github.com/axios/axios
[materialui]: https://material-ui.com/pt/
[react-icons]: https://react-icons.github.io/react-icons/
[spring]: https://spring.io/projects/spring-boot
[meal]: [https://www.themealdb.com/api.php]
[reactjs]: https://reactjs.org
[yarn]: https://yarnpkg.com/
[vscode]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[license]: https://opensource.org/licenses/MIT
[prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[postgres]: https://www.postgresql.org/
[maven]: https://maven.apache.org/download.cgi
[java-11]: https://openjdk.java.net/projects/jdk/11/
[nodejs]: https://nodejs.org/en/
[springtools]: https://spring.io/tools
