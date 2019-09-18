import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import App from './App';
import { ProductProvider } from './context';

ReactDOM.render(
  <HashRouter>
    <ProductProvider>
      <App />
    </ProductProvider>
  </HashRouter>,
  document.getElementById('root')
);
