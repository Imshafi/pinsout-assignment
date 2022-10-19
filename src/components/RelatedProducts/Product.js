import React from 'react';
import './Product.css'
import Img8 from '../images/8.jpg';
import Img1 from '../images/1.jpg';
import Img4 from '../images/4.jpg';

function Product() {
  return (
    <div className='container-products'>
      <div className='Heading-parent'>
      <div className='Heading'> 
      <h1>Related Products</h1>
      </div>
      </div>
      <div className='Image-container'>
      <div>
        <img src={Img1} alt='cannot get image' />
      </div>
      <div>
        <img src={Img4} alt='cannot get image'/>
      </div>
      <div>
        <img src={Img8} alt='cannot get image'/>
      </div>
      <div>
        <img src={Img1} alt='cannot get image'/>
      </div>
      <div>
        <img src={Img4} alt='cannot get image'/>
      </div>
      </div>
    </div>
  )
}

export default Product;