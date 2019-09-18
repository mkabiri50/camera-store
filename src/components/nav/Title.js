import React from 'react';

const Title = ({ pageTitle }) => {
  return (
    <div style={{ fontFamily: 'Baloo Bhai, cursive' }} className='container'>
      <div className='row'>
        <div className='col-10 mx-auto mt-4 mb-2 text-center'>
          <h2 className='text-capitalize'>
            <strong>{pageTitle}</strong>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Title;
