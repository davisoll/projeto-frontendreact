import React from 'react'
import {Home} from './Componentes/ProductList/Home/Home'
import {Filter} from './Componentes/Filters/Filter';
import { Cart } from './Componentes/ShoppingCart/Cart/Cart';

function App() {

  return (
    <div className="App">
      <Home />
      <Filter />
      <Cart />
    </div>
  );
}

export default App;
