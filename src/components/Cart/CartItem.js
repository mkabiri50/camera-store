import React from 'react';

const CartItem = ({ item, value }) => {
  const { id, title, image, price, total, count } = item;
  const { increment, decrement, removeItem } = value;

  return (
    <div className='row my-1 text-capitalize text-center'>
      <div className='col-10 mx-auto col-lg-2'>
        <img
          style={{ width: '5rem', height: '5rem' }}
          src={image}
          alt='product'
          className='img-fluid'
        />
      </div>
      {/* //small screen */}
      <div className='col-10 mx-auto col-lg-2'>
        <span className='d-lg-none'>product :</span>
        {title}
      </div>

      <div className='col-10 mx-auto col-lg-2'>
        <span className='d-lg-none'>price :</span>
        <i>
          {price}
          <sub>
            <small>RM</small>
          </sub>
        </i>
      </div>

      {/* //small screen */}

      <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
        <div className='d-flex justify-content-center'>
          <div>
            <span
              onClick={() => {
                decrement(id);
              }}
            >
              <i
                style={{ cursor: 'pointer' }}
                className='far fa-minus-square btn text-warning mx-1 btn-sm btn-light'
              />
            </span>

            <span className='btn btn-dark btn-sm mx-1 '>{count}</span>

            <span
              onClick={() => {
                increment(id);
              }}
            >
              <i
                style={{ cursor: 'pointer' }}
                className='far fa-plus-square btn text-primary mx-1 btn-sm btn-light'
              />
            </span>
          </div>
        </div>
      </div>
      <div className='col-10 mx-auto col-lg-2 '>
        <div>
          <span
            className=' btn btn-light text-danger btn-sm '
            style={{ cursor: 'pointer' }}
            onClick={() => {
              removeItem(id);
            }}
          >
            <i className='fas fa-trash' />
          </span>
        </div>
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <strong>
          total price :{total}
          <sub className='font-italic'>
            <small>RM</small>
          </sub>
        </strong>
      </div>
    </div>
  );
};

export default CartItem;
