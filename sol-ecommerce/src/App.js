import { Filter } from './Componentes/Filter/Filter';
import { Home } from './Componentes/ProductList/Home/Home';
import { Cart } from './Componentes/ShoppingCart/Cart/Cart';
import { GlobalStyle } from './GlobalStyle';
import { productList } from './assents/productList';

function App() {
  
  
  return (
    <div className="App">
      <GlobalStyle />
      <Filter />
      <Home 
      product
      />
      <Cart 
      // cart = {cart}
      />
    </div>
  );
}

export default App;
