import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';

class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { image, title, price } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <div style={style}>
                <div className='container'>
                  <div className='row'>
                    <div
                      style={modalStyle}
                      className='col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5'
                    >
                      <h5 style={{ fontFamily: 'Baloo Bhai, cursive' }}>
                        item added to the cart
                      </h5>
                      <img src={image} alt='product' className='img-fluid' />
                      <h5>{title}</h5>
                      <h5 className='text-muted'>
                        price : {price}
                        <sub className='font-italic'>
                          <small>RM</small>
                        </sub>
                      </h5>
                      <Link to='/shop'>
                        <button
                          className='btn btn-sm btn-info m-1'
                          onClick={() => closeModal()}
                        >
                          to shop
                          <br />
                          <i className='fas fa-redo' />
                        </button>
                      </Link>
                      <Link to='/mycart'>
                        <button
                          className='btn btn-sm btn-success m-1'
                          onClick={() => closeModal()}
                        >
                          to cart
                          <br />
                          <i className='fas fa-shopping-basket' />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
const style = {
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  background: 'rgba(0, 0, 0, 0.3)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};
const modalStyle = {
  background: 'white'
};

export default Modal;
