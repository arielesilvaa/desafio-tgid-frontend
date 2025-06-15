# Loja Online React com JSON Server



![Uploading Captura de Tela 2025-06-14 às 22.45.29.png…]()

Este é um projeto de uma **loja online simples**, desenvolvido com **React** e **JSON Server**. A aplicação consome dados de uma **API REST simulada**, fornecendo uma interface onde os usuários podem visualizar produtos, adicionar ao carrinho e visualizar o resumo do carrinho antes de finalizar a compra.

## Funcionalidades

- **Listagem de Produtos**: Exibe uma lista de produtos disponíveis para compra.
- **Detalhes do Produto**: Exibe informações detalhadas de cada produto.
- **Carrinho de Compras**: Permite adicionar e remover produtos do carrinho.
- **Resumo do Carrinho**: Mostra um resumo dos itens no carrinho e o valor total da compra.
- **Responsividade**: O layout é totalmente responsivo e funciona bem tanto em dispositivos móveis quanto em desktops.

## Tecnologias Usadas

- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **JSON Server**: Ferramenta para criar uma API REST fake a partir de um arquivo JSON.
- **Axios**: Cliente HTTP para fazer requisições à API.
- **CSS**: Estilização do layout, utilizando Flexbox e Grid para tornar o site responsivo.

## Estrutura do Projeto

/loja-online
/node_modules
/public
/src
App.js
App.css <-- Arquivo CSS com o estilo moderno e responsivo
/components
Carrinho.js
Produto.js
ListaProdutos.js
dbTeste.json <-- Arquivo JSON com os dados dos produtos
package.json
package-lock.json
...

bash
Copiar
Editar

## Como Rodar o Projeto

Siga os passos abaixo para rodar o projeto localmente:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/loja-online.git
   cd loja-online
Instale as dependências:
Se ainda não tiver o Node.js instalado, faça o download e instale a versão mais recente de Node.js.
Depois, no diretório do projeto, execute:

bash
Copiar
Editar
npm install
Rodar o JSON Server:
O projeto utiliza o JSON Server para simular uma API REST. Antes de rodar o React, execute o JSON Server no terminal:

bash
Copiar
Editar
json-server --watch dbTeste.json --port 5000
Isso irá iniciar a API simulada na URL http://localhost:5000.

Rodar o aplicativo React:
No diretório do projeto, inicie o servidor de desenvolvimento do React:

bash
Copiar
Editar
npm start
O aplicativo será aberto automaticamente no navegador em http://localhost:3000.

Como Funciona a Aplicação
Página inicial: Ao carregar a página, o aplicativo faz uma requisição à API (simulada com o JSON Server) para buscar a lista de produtos.

Adicionar ao Carrinho: O usuário pode clicar no botão "Adicionar ao Carrinho" para incluir um produto no carrinho de compras. O item será adicionado ao estado do aplicativo.

Remover do Carrinho: O usuário pode remover um produto do carrinho clicando no botão "Remover" ao lado do item no carrinho.

Resumo do Carrinho: O carrinho exibe os produtos selecionados e o valor total da compra.

Estrutura de Dados
O arquivo dbTeste.json contém uma lista de produtos com as seguintes propriedades:

id: Identificador único do produto.

nome: Nome do produto.

descricao: Descrição do produto.

preco: Preço do produto.

imagem: URL da imagem do produto.

Exemplo de produto no arquivo JSON:

json
Copiar
Editar
{
  "id": 1,
  "nome": "Camiseta Preta",
  "descricao": "Camiseta básica preta, 100% algodão.",
  "preco": 49.99,
  "imagem": "https://via.placeholder.com/150"
}
Como Personalizar
Adicionar novos produtos: Para adicionar novos produtos, basta adicionar mais objetos dentro do array de produtos no arquivo dbTeste.json.

Alterar o estilo: Você pode modificar o arquivo App.css para personalizar a aparência do site conforme sua preferência.

Links Úteis
React Documentation

JSON Server Documentation

Axios Documentation

yaml
Copiar
Editar

---

### Como usar:

1. Crie um arquivo chamado **`README.md`** dentro do diretório raiz do seu repositório GitHub (onde está o código do seu projeto).
2. Copie e cole o conteúdo acima no arquivo **`README.md`**.
3. Commit e envie o arquivo para o repositório no GitHub.

```bash
git add README.md
git commit -m "Adiciona README explicativo"
git push origin main
Ao acessar o seu repositório no GitHub, o README.md será automaticamente renderizado com a formatação que inclui parágrafos, listas e blocos de código.
