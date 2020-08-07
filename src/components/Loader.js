import React from 'react';
import loader from '../assets/loader.gif';

function Loader() {
  return (
    <div className='h-100 container-fluid background-primary d-flex justify-content-center align-items-center'>
      <img src={loader} alt='Loading...'></img>
    </div>
  );
}

export default Loader;
