import React from 'react';
import Image from './shoppingBag.png';
import './Logo.css';

function Logo () {
return (
    <div className='logoHeader'>
        <img src={Image} className='logoImg' alt=''/>
        <h1 className="title">ShopFree</h1>
    </div>
    );
}

export default Logo;
