import React, { Component } from 'react';
import Header from './nav/Header';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';

class Details extends Component {
  render() {
    return (
      <div>
        <Header branding='Details' />
        <ProductConsumer>
          {value => {
            const {
              title,
              image,
              price,
              brand,
              description,
              inCart,
              id
            } = value.detailProduct;
            return (
              <div className='container py-5'>
                <div className='row'>
                  <div className='col-10 mx-auto text-center my-5'>
                    <h2 className='mb-5'>{title}</h2>
                    <div className='row'>
                      <div className='col-10 mx-auto col-md-6 my-3 '>
                        <img src={image} alt='Product ' className='img-fluid' />
                      </div>
                      <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
                        <h2>Model : {title}</h2>
                        <h4 className='text-uppercase text-muted mt-3 mb-2'>
                          Made by :{' '}
                          <span className='text-uppercase'>{brand}</span>
                        </h4>
                        <h4 className='text-info'>
                          <strong>
                            Price : {price} <span>$</span>
                          </strong>
                        </h4>
                        <p className='text-capitalize font-weight-bold mt-3 mb-0'>
                          product info
                        </p>
                        <p className='text-muted lead'>{description}</p>
                        <div className=' d-flex justify-content-between '>
                          <Link to='/shop'>
                            <button className='btn btn-sm mb-0'>
                              <i className='fas fa-arrow-left   text-info' />
                              To Products
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
                              <p>
                                Add
                                <i className='fas fa-cart-plus fa-lg text-success mb-0' />
                              </p>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    );
  }
}

export default Details;
