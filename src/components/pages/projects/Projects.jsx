import React from 'react'
import './Projects.css'
import spp from '/src/assets/projects/spp.png'
import spotify from '/src/assets/projects/spotify.png'
import gamecade from '/src/assets/projects/gamecade.png'

export default function Projects() {
    return (
        <div className='container'>
        <div className='content'>
            <h2>Project <span className='purple'>Work</span></h2>
            <p>Here is some of my recent work!</p>
            <div className="card">
                <img className='project-img' src={spp} alt="spp" />
            </div> 
            <div className="card">
                <img className='project-img' src={spotify} alt="spp" />
            </div> 
            <div className="card">
                <img className='project-img' src={gamecade} alt="spp" />
            </div>
        </div>
    </div>
    )
}
