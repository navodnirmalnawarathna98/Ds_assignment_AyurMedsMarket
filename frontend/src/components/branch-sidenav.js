import React from 'react';
import {Link} from 'react-router-dom';
import  '../App.css';

import {BiHomeAlt,BiClipboard,BiCar,BiCart,BiMessageSquareAdd} from 'react-icons/bi';

export default function Navbar() {
    return (
        <div class="nav">
                <Link to='/'> <img src={ require('../image/logo.jpeg') } /></Link>

            <div class="nav-link">
                <Link to="/" class="link"><BiHomeAlt style={{marginRight: 10}} size="1.5em"/> <div>Dashboard</div></Link>
                <Link to="/branch-dash" class="link"><BiCar style={{marginRight: 10}} size="1.5em"/> <div>Manage Branch</div></Link>
                <Link to="/report" class="link"><BiClipboard style={{marginRight: 10}} size="1.5em"/> <div>Report</div></Link>
                <Link to="/branch-employees" class="link"><BiClipboard style={{marginRight: 10}} size="1.5em"/> <div>Manage Employees</div></Link>

            </div>

            <div class="nav-contact">

                <img  src={ require('../image/contact.png') } />
                <p>Contact us anytime</p>
                <button >Contact</button>
            </div>
        </div>
    )
}




