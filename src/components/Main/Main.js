import React from 'react'
import './Main.css';
import Img2 from '../images/2.jpg';
function Main() {
  return (
    <div className='container-main'>
        <div className='Images'>
            <img src={Img2} alt='cannot get image' />
        </div>
        <div className='product-details'>
            <p1>clothing</p1>
            <h3>Leather boots with tall leg</h3>
            <p>The garments labelled as Committed are products that have been<br></br> produced using sustainable fibres or processes, reducing their<br></br> environmental impact.</p>
            <h5>Hurry Up</h5>
            <p>sale ends in 2days 10hr 15min</p>
            <input type='submit' value='Add to Cart'></input>
            <h5>Get it today</h5>
            <p>Fast Shipping</p>
            <p>100-Day return</p>
        </div>
    </div>
  )
}

export default Main