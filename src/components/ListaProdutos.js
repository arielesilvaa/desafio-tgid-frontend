import React from 'react';
import Produto from './Produto';

function ListaProdutos({ produtos, adicionarAoCarrinho }) {
  return (
    <div className="lista-produtos">
      {produtos.map(produto => (
        <Produto key={produto.id} produto={produto} adicionarAoCarrinho={adicionarAoCarrinho} />
      ))}
    </div>
  );
}

export default ListaProdutos;
