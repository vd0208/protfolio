// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import profilePhoto from './IMG-20241008-WA0023.png'; // Import your profile photo

const Header = () => {
    return (
        <header>
            <img src={profilePhoto} alt="Vian Dsouza" style={{ borderRadius: '50%', width: '100px', height: '100px' }} />
            <h1>Vian Dsouza</h1>
            <h2> Student</h2>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
