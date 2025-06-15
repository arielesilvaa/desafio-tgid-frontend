import React from 'react';

function Produto({ produto, adicionarAoCarrinho }) {
  return (
    <div className="produto">
      <img src={produto.imagem} alt={produto.nome} />
      <h3>{produto.nome}</h3>
      <p>{produto.descricao}</p>
      <p>R${produto.preco.toFixed(2)}</p>
      <button onClick={() => adicionarAoCarrinho(produto)}>Adicionar ao Carrinho</button>
    </div>
  );
}

export default Produto;
