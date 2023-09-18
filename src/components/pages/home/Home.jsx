import React from 'react'
import './Home.css'
import techguy from '/src/assets/techguy.svg'
import kirby from '/src/assets/kirby.gif'
import officedesk from '/src/assets/officedesk.svg'


export default function Home() {
    return (
        <div>
            <div className="home-page">
                <div className="greeting">
                    <h1 className='hey-there'>Hey There!</h1>
                </div>
                <img className='kirby' src={kirby} alt="loading..." />
                <h1>My name is <span className='Purple'>Tristan</span></h1>
                <h2 className='Purple'>JUNIOR SOFTWARE ENGINEER</h2>
                <h2>Take a look around my website if you would like to get to know a bit more about me!</h2>
            </div>
            <img className='home-img' src={techguy} alt="loading..." />
            <img className='intro-img' src={officedesk} alt="loading..." />

            <div className="intro-page">
                <h1 className='Purple'>HOW ABOUT AN INTRODUCTION?</h1>
                <h2>Hey! I'm <span className='Purple'>Tristan</span>, or <span className='Purple'>Tris</span> for short.
                    <br />
                    I'm a software dev that has recently graduated from <span className='Purple'>General Assembly's Software Engineering Immersive</span> course. 
                    <br /> 
                    During My time at <span className='Purple'>GA</span>, my passion for coding has grown exponentially. Upon first learning how to code, it felt like stepping into a new world, one that has never been explored (by me at least). 
                    <br />
                    With every new line of code or function that I write, it feels like discovering a new landmark!
                    <br />
                    I mainly code in:<span className='Purple'> HTML, CSS, JavaScript and React </span>
                </h2>
            </div>
        </div>
    )
}