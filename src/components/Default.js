import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Default extends Component {
  render() {
    return (
      <Link to='/' style={{ textDecoration: 'none' }}>
        <div className='container'>
          <div className='row'>
            <div className='col-10 mx-auto text-center text-title text-uppercase pt-5'>
              <h1 className='display-3'>404 </h1>
              <h2>error</h2>

              <i className='fas fa-exclamation-triangle fa-5x text-warning ' />

              <br />
              <h3>page not found</h3>
              <h4>
                the requested URL{' '}
                <span className='text-danger'>
                  {this.props.location.pathname}
                </span>
                was not found
              </h4>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default Default;
