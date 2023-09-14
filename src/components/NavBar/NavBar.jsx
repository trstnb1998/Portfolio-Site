import React from 'react';
import '../NavBar/NavBar.css';

export default function NavBar() {
    return (
        <div className="NavBar">
            <div className="NavLogo">
                <a href="#home">Trstnb.</a>
            </div>
            <div className="NavLinks">
                <a href="#home">HOME</a>
                <a href="#about">ABOUT</a>
                <a href="#projects">PROJECTS</a>
                <a href="#resume">RESUME</a>
                <a href="#contact">CONTACT</a>
            </div>
        </div>
    );
}
