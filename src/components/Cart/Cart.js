import React, { Component, Fragment } from 'react';
import { ProductConsumer } from '../../context';

import Header from '../nav/Header';
import Title from '../nav/Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotal from './CartTotal';

export class Cart extends Component {
  render() {
    return (
      <Fragment>
        <Header branding='Cart' />
        <section>
          <ProductConsumer>
            {value => {
              const { cart } = value;
              if (cart.length > 0) {
                return (
                  <Fragment>
                    <Title pageTitle='Your Cart' />
                    <CartColumns />
                    <CartList value={value} />
                    <CartTotal value={value} history={this.props.history} />
                  </Fragment>
                );
              } else {
                return <EmptyCart />;
              }
            }}
          </ProductConsumer>
        </section>
      </Fragment>
    );
  }
}

export default Cart;
