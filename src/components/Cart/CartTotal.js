import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PaypalExpressBtn from './Paypal';

const CartTotal = ({ value, history }) => {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;

  return (
    <Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col-1 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right'>
            <Link to='/'>
              <button
                type='button'
                className='btn btn-outline-danger text-uppercase mb-3 px-5'
                onClick={() => clearCart()}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className='text-title'>subtotal :</span>

              <strong> {cartSubTotal}</strong>
              <sub className='font-italic'>
                <small>RM</small>
              </sub>
            </h5>
            <h5>
              <span className='text-title'>tax : </span>
              <strong>{cartTax}</strong>
              <sub className='font-italic'>
                <small>RM</small>
              </sub>
            </h5>
            <h5>
              <span className='text-title' />
              total : <strong>{cartTotal}</strong>
              <sub className='font-italic'>
                <small>RM</small>
              </sub>
            </h5>
            <PaypalExpressBtn
              total={cartTotal}
              clearCart={clearCart}
              history={history}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CartTotal;
