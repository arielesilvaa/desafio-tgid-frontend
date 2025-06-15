import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListaProdutos from './components/ListaProdutos';
import Carrinho from './components/Carrinho';
import './App.css'; 

function App() {
  const [produtos, setProdutos] = useState([]);
  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/produtos')
      .then(response => setProdutos(response.data));
  }, []);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
  };

  const removerDoCarrinho = (produtoId) => {
    setCarrinho(carrinho.filter(item => item.id !== produtoId));
  };

  return (
    <div className="App">
      <h1>Loja Online</h1>
      <ListaProdutos produtos={produtos} adicionarAoCarrinho={adicionarAoCarrinho} />
      <Carrinho carrinho={carrinho} removerDoCarrinho={removerDoCarrinho} />
    </div>
  );
}

export default App;
