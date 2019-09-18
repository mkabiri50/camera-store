import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import PropTypes from 'prop-types';

class Product extends Component {
  render() {
    const { title, image, price, brand, inCart, id } = this.props.product;

    return (
      <div className='card'>
        <div className='imageContainer p-3'>
          <img src={image} className='card-img-top' alt='Product ' />
        </div>
        <div className='card-body'>
          <h6 className='card-title'>{title}</h6>
          <strong className='card-text'>{brand}</strong>
          <p className='card-text font-italic'>
            {price}
            <sub>
              <small>RM</small>
            </sub>
          </p>
        </div>
        <ProductConsumer>
          {value => (
            <div className='card-footer d-flex justify-content-between '>
              <Link to='/details' className='mb-0'>
                <button
                  className='btn btn-sm mb-0'
                  onClick={() => value.handleDetail(id)}
                >
                  <i className='fas fa-info-circle fa-lg  text-info' />
                </button>
              </Link>
              <button
                className='btn btn-sm mb-0'
                onClick={() => {
                  value.addToCart(id);
                  value.openModal(id);
                }}
                disabled={inCart ? true : false}
              >
                {inCart ? (
                  <p className='text-capitalize mb-0' disabled>
                    already in cart
                  </p>
                ) : (
                  <i className='fas fa-cart-plus fa-lg text-success mb-0' />
                )}
              </button>
            </div>
          )}
        </ProductConsumer>
      </div>
    );
  }
}
Product.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    inCart: PropTypes.bool,
    title: PropTypes.string,
    price: PropTypes.number,
    brand: PropTypes.string
  }).isRequired
};

export default Product;
