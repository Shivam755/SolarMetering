import React from 'react';
import '../App.css';

const Nologinpage = () => {
    return (
        <div className='Container'>
            <h1 className='H1'>Unverified Page Access!!</h1>
            <p>This page is only accessible by a verified login of solar-metering!.Please login to access the contents of the page.</p>
        </div>
    )
}

export default Nologinpage;
