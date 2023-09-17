import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineUser, AiOutlineCopy, AiOutlineFile, AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";


export default function NavBar() {
    return (
        <div>
        <nav className="NavBar">
            <div className="NavLogo">
                <Link to='/' >Trstnb.</Link>
            </div>

            <ul className="NavLinks">
                <div className='icon'><AiOutlineHome /></div>
                <li>
                    <Link to='/'>HOME</Link>
                </li>
                <div className="icon2"><AiOutlineUser /></div>
                <li>
                    <Link to='/about'>ABOUT</Link>
                </li>
                <div className='icon'><AiOutlineCopy /></div>
                <li>
                    <Link to='/projects'>PROJECTS</Link>
                </li>
                <div className="icon"><AiOutlineFile /></div>
                <li>
                    <Link to='/resume'>RESUME</Link>
                </li>
                <div className="icon"><AiOutlineMail /></div>
                <li>
                    <Link to='/contact'>CONTACT</Link>
                </li>
            </ul>
            <div className="SocialLinks">
                <a href="https://github.com/trstnb1998" target='_blank'><AiFillGithub /></a>
            </div>
            <div className="SocialLinks">
                <a href="https://www.linkedin.com/in/tristan-bartolome/" target='_blank'><AiFillLinkedin /></a>
            </div>
            </nav>
        </div>
    );
}
