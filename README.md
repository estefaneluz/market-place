![](https://i.imgur.com/xG74tOh.png)

# Desafio Front-end - Módulo 3

[VOLTAR PARA SUMÁRIO](https://github.com/cubos-academy/desafio-modulo-03)

A empresa que você está trabalhando recebeu uma demanda de um cliente muito importante, trata-se de um projeto de dashboard para um Market Place, onde o usuário deve se cadastrar e logar na dashboard, após o login ele poderá adicionar, remover, excluir e alterar produtos da sua loja, bem como fazer a edição do seu perfil. Cada usuário irá representar uma loja no Market Place. Lembre-se, esse é um cliente muito importante e você é o responsável por entregar da melhor maneira a solução para o problema dele.

[Visualização do Desafio](https://desafio-03.netlify.app)

## Front-end

Telas que precisam ser desenvolvidas:

## Áreas não protegidas

### Cadastro de usuário: `/cadastro` (Obrigatório)
- Funcionalidades obrigatórias:
    - Validar a igualdade das senhas
    - Validar os campos obrigatórios (consultar nos requisitos do back-end)
    - Enviar os dados do formulário para a rota `POST /usuarios`
    - Redirecionar para a rota de login (`/`);
    - Inputs:
        - nome
        - nome_loja
        - email
        - senha
        - senhaConfirmacao
- Funcionalidades extras: 
    - Controle de estado de requisições (erro e carregamento)
        
<details>
    <summary>Dicas</summary>
    <ul>
    <li><code>react-hook-form</code></li>
    <li><code>react-router-dom</code></li>
    <li><code>fetch</code></li>
    <li>
        componentes <code>TextField</code>,             <code>Backdrop</code>, <code>CircularProgress</code>, <code>Alert</code> e <code>Button</code> do Material UI
    </li>
    </ul>
</details>



### Login: `/`(Obrigatório)
- Funcionalidades obrigatórias:
    - Validar os campos obrigatórios (consultar nos requisitos do back-end)
    - Enviar os dados do formulário para a rota `POST /login`
    - Salvar o `token` em um *contexto*
    - Redirecionar para a rota de produtos (`/produtos`);
    - Inputs:
        - email
        - senha
- Funcionalidades extras: 
    - Controle de estado de requisições (erro e carregamento)

<details>
    <summary>Dicas</summary>
    <ul>
    <li><code>react-hook-form</code></li>
    <li><code>react-router-dom</code></li>
    <li><code>fetch</code></li>
    <li><code>context</code></li>
    <li>
        componentes <code>TextField</code>,             <code>Backdrop</code>, <code>CircularProgress</code>, <code>Alert</code> e <code>Button</code> do Material UI
    </li>
    </ul>
</details>

## Áreas protegidas

### Produtos: `/produtos`(Extra)

- Funcionalidades obrigatórias:
    - Carregamento dos produtos da loja (`GET /produtos`)
    - Ao clicar no card do produto, redirecionar para a rota de (`/produto/:id/editar`)
    - Ao clicar no icone de lixo no card do produto, abrir um modal e se o cliente confirmar, deletar o produto (`DELETE /produtos/:id`)
    - Ao clicar no botão de "ADICIONAR PRODUTO", redirecionar para a rota de (`/produtos/novo`) 
- Funcionalidades extras: 
    - Controle de estado de requisições (erro e carregamento)

<details>
    <summary>Dicas</summary>
    <ul>
    <li><code>fetch</code></li>
    <li><code>context</code></li>
    <li><code>react-router-dom</code></li>
    <li>
    componentes <code>TextField</code>,             <code>Backdrop</code>, <code>CircularProgress</code>, <code>Snackbar</code>code>, <code>Alert</code>, <code>Grid</code> e <code>Button</code> do Material UI
    </li>
    </ul>
</details>

### Editar Produtos: `/produtos/:id/editar`(Extra)

- Funcionalidades obrigatórias:
    - Como a atualização dos dados do produto pode ser parcial (somente um campo por ex), não é obrigatório carregar os dados do produto nesta tela e nem verificar os dados obrigatórios.
    - Enviar os dados do formulário para a rota `PUT /produtos/:id`
    - Redirecionar para a rota de produtos (`/produtos`);
    - Inputs:
        - nome 
        - preco
        - estoque
        - descricao
        - imagem (link para uma imagem)
- Funcionalidades extras: 
    - Controle de estado de requisições (erro e carregamento)

<details>
    <summary>Dicas</summary>
    <ul>
    <li><code>fetch</code></li>
    <li><code>react-hook-form</code></li>
    <li><code>context</code></li>
    <li><code>react-router-dom</code></li>
    <li>
    componentes <code>TextField</code>,             <code>Backdrop</code>, <code>CircularProgress</code>, <code>Snackbar</code>, <code>Alert</code> e <code>Button</code> do Material UI
    </li>
    <li><img src="https://i.imgur.com/OAxmxYB.png"></li>
    </ul>
</details>

### Adicionar Produtos: `/produtos/novo`(Extra)

- Funcionalidades obrigatórias:
    - Enviar os dados do formulário para a rota `POST /produtos`
    - Redirecionar para a rota de produtos (`/produtos`);
    - Inputs:
        - nome 
        - preco
        - estoque
        - descricao
        - imagem (link para uma imagem)
- Funcionalidades extras: 
    - Controle de estado de requisições (erro e carregamento)

<details>
    <summary>Dicas</summary>
    <ul>
    <li><code>fetch</code></li>
    <li><code>react-hook-form</code></li>
    <li><code>context</code></li>
    <li><code>react-router-dom</code></li>
    <li>
    componentes <code>TextField</code>,             <code>Backdrop</code>, <code>CircularProgress</code>, <code>Snackbar</code>, <code>Alert</code> e <code>Button</code> do Material UI
    </li>
    </ul>
</details>

### Perfil de usuário: `/perfil`(Extra)

- Funcionalidades obrigatórias:
    - Visualização dos dados do perfil.
    - Redirecionar para a rota de perfil (`/perfil/editar`);
    - Inputs (não precisamos controlá-los):
        - nome 
        - nome_loja
        - email
- Funcionalidades extras: 
    - Controle de estado de requisições (erro e carregamento)

<details>
    <summary>Dicas</summary>
    <ul>
    <li><code>fetch</code></li>
    <li><code>context</code></li>
    <li><code>react-router-dom</code></li>
    <li>
    componentes <code>TextField</code>,             <code>Backdrop</code>, <code>CircularProgress</code>, <code>Snackbar</code>code>, <code>Alert</code> e <code>Button</code> do Material UI
    </li>
    </ul>
</details>

### Edição de usuário: `/perfil/editar`(Extra)

- Funcionalidades obrigatórias:
    - Como a atualização dos dados do perfil pode ser parcial (somente um campo por ex), não é obrigatório carregar os dados do usuário nesta tela e nem verificar os dados obrigatórios.
    - Se a senha for informada, validar a igualdade das senhas
    - Enviar os dados do formulário para a rota `PUT /perfil`
    - Redirecionar para a rota de perfil (`/perfil`);
    - Inputs:
        - nome 
        - nome_loja
        - email
        - senha
        - senhaConfirmacao
- Funcionalidades extras: 
    - Controle de estado de requisições (erro e carregamento)

<details>
    <summary>Dicas</summary>
    <ul>
    <li><code>fetch</code></li>
    <li><code>react-hook-form</code></li>
    <li><code>context</code></li>
    <li><code>react-router-dom</code></li>
    <li>
    componentes <code>TextField</code>,             <code>Backdrop</code>, <code>CircularProgress</code>, <code>Snackbar</code>code>, <code>Alert</code> e <code>Button</code> do Material UI
    </li>
    <li><img src="https://i.imgur.com/OAxmxYB.png"></li>
    </ul>
</details>

## Componentes

### Navbar

- Funcionalidades obrigatórias:
    - Redirecionar o usuário para as rotas `/produtos` e `/perfil`
    - Deslogar (remover o token do *contexto*)

<details>
    <summary>Dicas</summary>
    <ul>
    <li><code>material-icons</code></li>
    <li><code>react-router-dom</code></li>
    <li>Usar o componente <code>NavLink</code> do react-router-dom para conseguir renderizar os icones ativos</li>
    </ul>
</details>


## Requisitos obrigatórios
- Sua aplicação deve ser desenvolvida com `React`;
- Trabalhar com `Hooks` (`useState`, `useEffect`, `useRef`...)
- Trabalhar com `componentização`;
- Utilizar `context API` (Context);
- Utilizar roteamento (`react-router-dom`);
- Utilizar Material UI para criação das telas;
- As requisições devem ser feitas utilizando `fetch`;
- Integração ao back-end (sua API ou [https://desafio-m03.herokuapp.com](https://desafio-m03.herokuapp.com));
- Seguir a estrutura de layout do wireframe que está no arquivo `.fig` que se encontra na pasta raiz do desafio;


## Links Úteis
- Documentação do ReactJS: https://reactjs.org/
    - Context API: https://reactjs.org/docs/context.html
    - Hooks (useState, useEffect, useRef): https://reactjs.org/docs/hooks-intro.html
- Documentação react-router-dom: https://reactrouter.com/web/guides/quick-start
- Documentação react-hook-form: https://react-hook-form.com/
- Documentação Material UI: https://material-ui.com/
- Documentação Fetch: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch


## Aulas Úteis
- [Context](https://plataforma.cubos.academy/curso/61b2921e-a262-4f04-b943-89c4cfb15e5c/data/06/07/2021/aula/2fe44792-7fe4-4d24-85ef-e1def5bc0b7a/871071bd-177c-4fcd-89fc-1151bc1fe1d2)
- [Gerenciando o estado de aplicações](https://plataforma.cubos.academy/curso/61b2921e-a262-4f04-b943-89c4cfb15e5c/data/03/06/2021/aula/434c58b2-88f1-43fb-856a-71d6ef54803d/863715e0-b81e-4e9d-b6a2-9f4d43f65f95)
- [Opções com o Fetch](https://plataforma.cubos.academy/curso/61b2921e-a262-4f04-b943-89c4cfb15e5c/data/03/06/2021/aula/434c58b2-88f1-43fb-856a-71d6ef54803d/a82f81fb-4ce7-44c4-b966-cf2d15ae62de)
- [Rotas protegidas](https://plataforma.cubos.academy/curso/61b2921e-a262-4f04-b943-89c4cfb15e5c/data/13/07/2021/aula/f312cf10-bd30-4b39-86c2-4ca03bd634a1/34602cbb-1dc3-4c8d-b77d-e3fff3286a62)
- [Redirecionamento de rotas](https://plataforma.cubos.academy/curso/61b2921e-a262-4f04-b943-89c4cfb15e5c/data/13/07/2021/aula/f312cf10-bd30-4b39-86c2-4ca03bd634a1/93efaf25-386f-4eb2-beae-7183f9d94b11)
- [Parametros de rota](https://plataforma.cubos.academy/curso/61b2921e-a262-4f04-b943-89c4cfb15e5c/data/13/07/2021/aula/f312cf10-bd30-4b39-86c2-4ca03bd634a1/330aa980-4b0e-4f2c-94b1-668ccb084112)
- [Apresentando o react-hook-form](https://plataforma.cubos.academy/curso/61b2921e-a262-4f04-b943-89c4cfb15e5c/data/20/07/2021/aula/c81f0775-c014-4e2f-a453-5d235eb1fac4/dd2a8627-661e-419b-be26-a7888047301f)
- [Validações com o react-hook-form](https://plataforma.cubos.academy/curso/61b2921e-a262-4f04-b943-89c4cfb15e5c/data/20/07/2021/aula/c81f0775-c014-4e2f-a453-5d235eb1fac4/6b7f1095-de8b-4a36-93b6-30aa18d00309)
- [useLocalStorage](https://plataforma.cubos.academy/curso/61b2921e-a262-4f04-b943-89c4cfb15e5c/data/27/07/2021/aula/33ba2718-bd74-432f-ae55-e9694be33884/846280b3-7940-4138-afaf-b1e5fe2711e2)
- [Primeiros componentes do Material UI](https://plataforma.cubos.academy/curso/61b2921e-a262-4f04-b943-89c4cfb15e5c/data/27/07/2021/aula/33ba2718-bd74-432f-ae55-e9694be33884/4fda4fbc-154d-4396-9d9e-829052b9697d)
- [Resumão React](https://plataforma.cubos.academy/curso/61b2921e-a262-4f04-b943-89c4cfb15e5c/data/03/08/2021/aula/1fe16ca2-462a-4b2b-bd89-45df7f004293/)
- [Continuação Resumão](https://plataforma.cubos.academy/curso/61b2921e-a262-4f04-b943-89c4cfb15e5c/data/05/08/2021/aula/370c0275-0aef-4d37-b2dd-dc399a502bcb/)

**LEMBRE-SE**: Feito é melhor que perfeito!!!


###### tags: `front-end` `módulo 3` `React` `HTML` `CSS` `desafio`
