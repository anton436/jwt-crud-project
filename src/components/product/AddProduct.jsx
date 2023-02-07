import React from 'react';

const AddProduct = () => {
  return (
    <div className='d-flex flex-column w-50 m-auto'>
      <h1>Add product</h1>

      <select name='' id=''>
        <option value=''>choose category</option>
      </select>
      <input type='text' placeholder='title' />
      <input type='text' placeholder='description' />
      <input type='text' placeholder='price' />
      <input type='file' />
      <button>Add product</button>
    </div>
  );
};

export default AddProduct;
