import React from 'react';
import './Head.css';

function Head() {
    return (
        <div className='container'>
            <div className='Header'>
                <div className='Logo'>
                    <h1>Logo</h1>
                </div>
                <div className='Navbar'>
                    <ul>
                        <li>Home</li>
                        <li>School Uniforms</li>
                        <li>Corporate</li>
                        <li>Sports</li>
                        <li>Blogs</li>
                    </ul>
                </div>
            </div>
            <div className='Header-foot'>
                    <h4>Free Delivery on orders above 1000rs. Don't Miss</h4>
                </div>
        </div>
    )
}

export default Head