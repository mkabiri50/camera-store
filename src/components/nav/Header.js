import React, { Component, Fragment } from 'react';
import { ProductConsumer } from '../../context';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <Fragment>
        <ProductConsumer>
          {value => {
            const { cartProduct } = value;
            return (
              <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <button
                  className='navbar-toggler'
                  type='button'
                  data-toggle='collapse'
                  data-target='#navbarTogglerDemo03'
                  aria-controls='navbarTogglerDemo03'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                >
                  <span className='navbar-toggler-icon' />
                </button>
                <div>
                  <Link className='navbar-brand' id='brand' to='/'>
                    Hero
                  </Link>
                  <span id='branding'>{this.props.branding}</span>
                </div>
                <div
                  className=' justify-content-center collapse navbar-collapse'
                  id='navbarTogglerDemo03'
                >
                  <ul className=' navbar-nav  '>
                    <li className='nav-item '>
                      <Link className='btn btn-light m-1' to='/'>
                        Home
                      </Link>
                    </li>
                    <li className='nav-item '>
                      <Link className='btn btn-light m-1' to='/shop'>
                        Shop
                      </Link>
                    </li>
                    <li className='nav-item '>
                      <Link className='btn btn-light m-1' to='/journal'>
                        Journal
                      </Link>
                    </li>
                    <li className='nav-item '>
                      <Link className=' btn btn-light m-1' to='/more'>
                        More
                        <i className='fas fa-sort-down ml-1' />
                      </Link>
                    </li>
                  </ul>
                </div>
                <Link className=' btn btn-light' to='/mycart'>
                  <i
                    className='fas fa-shopping-cart mr-1'
                    style={{ color: '#5FAE57' }}
                  />
                  Cart {cartProduct}
                </Link>
              </nav>
            );
          }}
        </ProductConsumer>
      </Fragment>
    );
  }
}

export default Header;
