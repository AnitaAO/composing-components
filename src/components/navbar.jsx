import React, { Component } from 'react';


//Stateless Functional Component
const Navbar = ({totalCounters}) => {
    return (
        <nav className='navbar'>
            <a className='navbar-brand' href="https://www.react.org">
                NAVBAR{" "}
                <span className='badge-pill'>
                    {totalCounters}
                </span> 
            </a>
        </nav>
    );
};
 
export default Navbar;