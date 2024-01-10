# Store App
### Aplicação Cadastro de produtos

![Vercel Deploy](https://therealsujitk-vercel-badge.vercel.app/?app=store-app-jet-eight)

## Acesso
 A aplicação pode ser acessada por esse [Link](https://store-app-jet-eight.vercel.app/).

## Páginas e Funcionalidades

### Login
A aplicação permite o usuário logar com um email próprio ou com uma conta do Google ou Github através do OAuth.
O login com email apenas retorna status 200 de uma api própria, não sendo necessário cadastro prévio.


###  Cadastro de Produto
Preenchendo com nome, preço e descrição, adicionará um novo produto a lista.
- Nome - Mínimo de 2 caractéres
- Preço: Deve ser maior que 0
- Descrição: Mínimo de 10 caractéres

###  Lista de Produtos
Listagem de todos os produtos com as informações de nome, preço e descrição. Cada card possui um botão que irá adicionar ao carrinho um item do produto escolhido.
O campo de busca ira filtrar todos os produtos que possuam em alguma parte do seu nome o termo procurado.

### Carrinho
Ao clicar em "Carrinho" no menu superior, abrirar um Drawe lateral com a listagem de itens escolhidos pelo usuário.
No carrinho é possivél adicionar ou remover quantidades de cada item através do input numérico. Também é possivel remover toda a quantidade de um determinado item clicando no botão "Remover". Cada linha de item possui a informação do valor total das quantidades do item em questão. 
Também estará presente um resumo do carrinho com o total de itens escolhidos e soma do valor desses itens.
Também é possivel remover todos os itens do carrinho ou clicar no botão "Esvaziar carrinho"

## Botão de Sign Out
Dentro de "Menu" na barra principal, a última opção "Sign Out" irá deslogar o usuário da plataforma e enviá-lo novamente para a página inicial de Login.

## Página de erro

Caso ocorra alguma erro na tentativa de login, o usuário será enviado para uma página de erro. Essa página possui um botão para enviá-lo novamente a página de login para que ele tente novamente entrar na aplicacação.
