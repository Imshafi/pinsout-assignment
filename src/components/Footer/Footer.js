import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='container-footer'>
        <div>
            <h4>Sign Up Today And Get <br></br>Rs.200 Off On Your First Order.</h4>
            <input type='email' value='Enter Your Email'></input>
        </div>

        <div className='four'>
            <div>
            <ul>
                <li><b>Collection</b></li>
                <li>Clothing</li>
                <li>Tops</li>
                <li>Sweaters</li>
                <li>Dresses</li>
                <li>Shoes</li>
            </ul>
            </div>
            <div>
            <ul>
                <li><b>Company</b></li>
                <li>Career at Toppers</li>
                <li>About Toppers</li>
                <li>Contact Us</li>
                <li>Gift Cards</li>
                <li>Blog</li>
            </ul>
            </div>
            <div>
            <ul>
                <li><b>Need Help</b></li>
                <li>Order Status</li>
                <li>Shipping & Delivery</li>
                <li>FAQ & Helps</li>
                <li>Terms & conditions</li>
                <li>Legal & Privacy</li>
            </ul>
            </div>
            <div>
            <ul>
                <li><b>Exclusive Services</b></li>
                <li>Call Us +1 666 22322</li>
                <li>Sned us an Email</li>
                <li>See Our Stories</li>
            </ul>
            </div>
        </div>

    </div>
  )
}

export default Footer