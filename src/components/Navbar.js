import React from 'react';
import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav >
        <div className="nav-inner">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/account">Account</Link>
                <Link to="/operations">Operations</Link>
                <Link to="/actions">Actions</Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar