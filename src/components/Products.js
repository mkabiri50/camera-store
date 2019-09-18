import React, { Component, Fragment } from 'react';
import Product from './Product';
import { ProductConsumer } from '../context';
import Title from './nav/Title';

class Products extends Component {
  render() {
    return (
      <Fragment>
        <Title pageTitle='Cameras' />
        <div className='card-columns '>
          <ProductConsumer>
            {value => {
              return value.products.map(product => {
                return <Product key={product.id} product={product} />;
              });
            }}
          </ProductConsumer>
        </div>
      </Fragment>
    );
  }
}

export default Products;
