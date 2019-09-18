import React, { Component } from 'react';
import Header from '../components/nav/Header';
import Products from '../components/Products';

export class Shop extends Component {
  render() {
    return (
      <div>
        <Header branding='Products' />

        <Products />
      </div>
    );
  }
}

export default Shop;
