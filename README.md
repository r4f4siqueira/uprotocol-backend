# 🌍 UPROTOCOL-BACKEND

## Sumário

- [Dependencias](#dependências)
- [Instalação](#instalação)
- [Descrição](#descrição)
- [Mais Informações](#mais-inoformações)
  - [Nest-CLI](#nest-cli)
    - [Como Usar](#como-usar)
    - [Exemplo](#exemplo)
  - [Extensões (VS Code)](#extensões-vs-code)
    - [Recomendadas](#recomendadas)
    - [Outras Extensões](#outras-extensões)

## Dependências

| Name    | Version | Doc                                 |
| ------- | ------- | ----------------------------------- |
| Nest.js | 10      | https://docs.nestjs.com/            |
| Node.js | 20.11.0 | https://nodejs.org/docs/latest/api/ |

## Instalação

**_Passo 1_** : Após clonar o repositório crie uma cópia do arquivo `.env.exemple`, renomeie para `.env` e preencha as variaveis de ambiente do arquivo `.env`;

**_Passo 2_** : execute o comando para instalar as dependências do projeto:

```bash
npm install
```

**_Passo 3_** : Execute o comando para iniciar o projeto:

```bash
npm run start:dev
```

> [!NOTE]
> Desta forma irá executar a aplicação em status de desenvolvimento, fazendo com que a cada alteração realizada nos arquivos o servidor reinicie automaticamente;

## Descrição

[...]

## Mais Inoformações

[...]

### Nest-CLI

Primeiro verifique se o CLI do Nest ja está instalado através do comando:

```bash
nest --help
```

Caso não aparecer a pagina de ajuda do Nest execute o comando de instalação:

```bash
npm install -g @nestjs/cli
```

#### Como Usar

Atualmente estamos utilizando apenas o comando:

```bash
nest g res nome-do-model caminho-do-model --no-spec
```

Ou seja, no momento de criar um novo módulo excutamos o comando e desta forma os arquivos nescessários para operação de crud junto com a configuração da rota ja é criado e ajustado;

#### Exemplo

```bash
nest g res exemplo models --no-spec
```

Após executar o comando acima será feita duas perguntas:

```bash
? What transport layer do you use?
? Would you like to generate CRUD entry points?
```

Selecione Rest API na primeira pergunta e digite Y para a segunda pergunta;

Desta forma a CLI cria os arquivos nescessários para serem usados como uma API como por exemplho o controller e os dtos.

Arquivos gerados pelo comando:

```bash
CREATE src/models/exemplo/exemplo.module.ts (292 bytes)
CREATE src/models/exemplo/exemplo.service.ts (717 bytes)
CREATE src/models/exemplo/dto/create-exemplo.dto.ts (37 bytes)
CREATE src/models/exemplo/dto/update-exemplo.dto.ts (192 bytes)
CREATE src/models/exemplo/entities/exemplo.entity.ts (28 bytes)
UPDATE src/app.module.ts (1329 bytes)
```

> [!NOTE]
> Note que o ultimo arquivo esta com a descrição `UPDATE` ou seja o arquivo foi atualizado inserindo o novo módulo para que seja possivel ser utilizado.

### Extensões (VS Code)

#### Recomendadas

| Extenção                  | Motivo                                                                                                                                                                                                                   | Doc                                                                                |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| Prettier - Code formatter | Temos um arquivo na raiz do projeto que define algumas regras referente a padronização da formatão do projeto, com esta extenção instalada pode configurar o VS code para formatar automaticamente no padrão do projeto; | https://prettier.io/docs/en/                                                       |
| ESLint                    | Usado para mostrar erros seja de lógica, tipagem ou formatação                                                                                                                                                           | https://eslint.org/docs/latest/                                                    |
| Comment Anchors           | Todos os comentários usado no projeto deve estar definido com uma tag antes como por exemplo: `//OBS - ...`, `//TEMPORARIO - ...`, `//PENDENTE - ...`, `//REVIEW - ...`.                                                 | https://marketplace.visualstudio.com/items?itemName=ExodiusStudios.comment-anchors |

#### Outras Extensões

Extensões que pode ajudar no dia dia ou no projeto:
Extenção|Motivo|Doc
--------|------|---
Error Lens|Mostra uma descrição mais detalhada de um erro ou warn na linha onde está localizado o problema;|https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens
GitLens — Git supercharged|Com essa extenção você pode fazer todo controle do repositório do projeto sem precisar executar muitos comandos git(na verdade ele executa mas vc só aperta um botão).Não precisa pagar para usar as facilidades ao menos que vc queira pagar para ver coisas coloridas| https://www.gitkraken.com/gitlens
Git Graph| Ajuda a ver o fluxo de trabalho e ver como está o trabalho nas outras `branchs` | https://github.com/mhutchie/vscode-git-graph
Project Manager| Você pode abrir outro repositório sem precisar sair do VS Code, separar os repositórios por tag ex: No meu VS Code este repositório esta na tag UPROTOCOL junto com o repositório do frontend, assim mais fácil de encontrar o projeto;| https://github.com/alefragnani/vscode-project-manager
Gitmoji| Usado para commitar o código com um emoji 😅|https://github.com/seatonjiang/gitmoji-vscode
