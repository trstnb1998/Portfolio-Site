import React from 'react';
import '../NavBar/NavBar.css';
import { AiOutlineHome, AiOutlineUser, AiOutlineCopy, AiOutlineFile, AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";


export default function NavBar() {
    return (
        <div className="NavBar">
            <div className="NavLogo">
                <a href="#home">Trstnb.</a>
            </div>

            <div className="NavLinks">
                <div className='icon'><AiOutlineHome /></div>
                <a href="#home">HOME</a>
                <div className="icon2"><AiOutlineUser /></div>
                <a href="#about">ABOUT</a>
                <div className="icon"><AiOutlineCopy /></div>
                <a href="#projects">PROJECTS</a>
                <div className="icon"><AiOutlineFile /></div>
                <a href="#resume">RESUME</a>
                <div className="icon"><AiOutlineMail /></div>
                <a href="#contact">CONTACT</a>
            </div>
            <div className="SocialLinks">
                <a href="https://github.com/trstnb1998" target='_blank'><AiFillGithub /></a>
            </div>
            <div className="SocialLinks">
                <a href="https://www.linkedin.com/in/tristan-bartolome/" target='_blank'><AiFillLinkedin /></a>
            </div>
        </div>
    );
}
