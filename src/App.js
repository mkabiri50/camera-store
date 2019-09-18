import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Layouts/Home';
import Journal from './Layouts/Journal';
import More from './Layouts/More';
import Cart from './components/Cart/Cart';
import Shop from './Layouts/Shop';
import Details from './components/Details';
import Default from './components/Default';
import Modal from './components/Modal';

import './App.css';

function App() {
  return (
    <div className='container'>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/journal' exact component={Journal} />
        <Route path='/more' exact component={More} />
        <Route path='/mycart' exact component={Cart} />
        <Route path='/shop' exact component={Shop} />
        <Route path='/details' exact component={Details} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </div>
  );
}

export default App;
