import React from 'react';
import Title from '../nav/Title';

const EmptyCart = () => {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-10 mx-auto text-center'>
          <Title pageTitle='Your Cart Is Empty' />
          <img className='img-fluid' src='/images/empty.jpg' alt='Empty Cart' />
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
