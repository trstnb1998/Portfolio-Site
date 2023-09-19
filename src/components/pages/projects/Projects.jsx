import React from 'react'
import './Projects.css'
import spp from '/src/assets/projects/spp.png'
import spotify from '/src/assets/projects/spotify.png'
import gamecade from '/src/assets/projects/gamecade.png'
import { AiFillGithub, AiOutlinePicLeft } from "react-icons/ai";


export default function Projects() {
    return (
        <div className='card-container'>
            <div className='content'>
                <h1>PROJECT <span className='purple'>WORK</span></h1>
                <p className='recent-work-p'>Here is some of my recent work!</p>
                <div className="card">
                    <img className='project-img' src={spp} alt="spp" />
                    <h2>Skateboard Part Picker</h2>
                    <div className="card-p">
                        <p>Skateboard Part Picker, built with Ruby on Rails, simplifies the process of creating a custom skateboard. Easily browse and select from a range of skateboard parts like decks, trucks, wheels and bearings from our database. The app allows you to evaluate the final price, ensuring complete transparency. Create, save, and revisit your custom configurations at any time. Get ready to ride your perfect board!</p>
                    </div>

                    <button onClick={() => window.open("https://github.com/trstnb1998/Skateboard-Part-Picker-CRUD-System", "_blank")}>
                        <div className="github-logo">
                            <AiFillGithub />
                        </div>
                        <div className="view-repo">
                            GitHub
                        </div>
                    </button>

                    <button onClick={() => window.open("https://project-1.fly.dev/login", "_blank")}>
                        <div className="github-logo">
                            <AiOutlinePicLeft />
                        </div>
                        <div className="view-repo">
                            Demo
                        </div>
                    </button>
                </div>

                <div className="card">
                    <img className='project-img' src={spotify} alt="spp" />
                    <h2>BeatBox Music Player</h2>
                    <div className="card-p">
                        <p>BeatBox is a music player app created with React, utilizing Spotify's API and OAuth for a seamless listening experience. Login with your spotify account and authenticate to enjoy your favorite tracks, playlists, and artists or discover trending songs and playlsits with ease . With BeatBox, you can view your playlists, explore curated collections, and even search for specific songs and artists. Elevate your music experience today!</p>
                    </div>

                    <button onClick={() => window.open("https://github.com/vworo/Beat-Box", "_blank")}>
                        <div className="github-logo">
                            <AiFillGithub />
                        </div>
                        <div className="view-repo">
                            GitHub
                        </div>
                    </button>

                    <button onClick={() => window.open("https://boxbeats.netlify.app/", "_blank")}>
                        <div className="github-logo">
                            <AiOutlinePicLeft />
                        </div>
                        <div className="view-repo">
                            Demo
                        </div>
                    </button>
                </div>

                <div className="card">
                    <img className='project-img' src={gamecade} alt="spp" />
                    <h2>GameCade</h2>
                    <div className="card-p">
                        <p>GameCade built with React and Firebase. It allows multiple users to create and join lobbies, where they can then select a game mode, and start drawing or interacting with other users depending on the game mode. Once all players have completed their drawings, the app displays the resulting canvas images for everyone else in the lobby to see! Users can also talk to each other through a global chat system.</p>
                    </div>

                    <button onClick={() => window.open("https://github.com/vworo/GameCade-Client-React", "_blank")}>
                        <div className="github-logo">
                            <AiFillGithub />
                        </div>
                        <div className="view-repo">
                            GitHub
                        </div>
                    </button>

                    <button onClick={() => window.open("https://gamecade-react.web.app/", "_blank")}>
                        <div className="github-logo">
                            <AiOutlinePicLeft />
                        </div>
                        <div className="view-repo">
                            Demo
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
