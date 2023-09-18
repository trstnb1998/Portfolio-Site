import React from 'react'
import '../about/About.css'
import chopper from '/src/assets/chopper.gif'

export default function About() {
    return (
        <div>
            <div className="about-page">
                <div className="greeting">
                    <h1 className='so'>So.. </h1>
                </div>
                <img className='chopper' src={chopper} alt="loading..." />
                <h1 className='who-am-i'>What <span className='Purple'>about me</span>?</h1>
                <h2>Hey!
                    <br />
                    My name is <span className='Purple'>Tristan Bartolome</span> from <span className='Purple'>Sydney, Australia.</span>
                    <br />
                    I'm a huge fan of anime and gaming, and you'll often find me exploring the latest trends in fashion. I consider myself to be quite social and I'm always up for a good time and meeting new people.
                </h2>
            </div>
        </div>
    )
}
