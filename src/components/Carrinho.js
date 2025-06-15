import React from 'react';

function Carrinho({ carrinho, removerDoCarrinho }) {
  const calcularTotal = () => {
    return carrinho.reduce((total, item) => total + item.preco, 0).toFixed(2);
  };

  return (
    <div className="carrinho">
      <h2>Carrinho de Compras</h2>
      <ul>
        {carrinho.map(item => (
          <li key={item.id}>
            {item.nome} - R${item.preco.toFixed(2)}
            <button onClick={() => removerDoCarrinho(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
      <div>Total: R${calcularTotal()}</div>
    </div>
  );
}

export default Carrinho;
