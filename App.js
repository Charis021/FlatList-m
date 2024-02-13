import Navigator from './src/components/Navigation/Navigator';
import React from 'react';
import {CartProvider} from './src/components/Context/CartContext';

const App = () => {
  return (
    <CartProvider>
      <Navigator />
    </CartProvider>
  );
};

export default App;
