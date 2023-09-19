import React from 'react'
import '../footer/footer.css'
import { AiFillGithub } from "react-icons/ai";


export default function Footer() {
    return (
        <div>
            <footer className='custom-footer'>
                <p className='design-by'>Designed and Developed by Tristan Bartolome</p>
                <div className="copyright">
                    <p>Copyright <span>&copy;</span> 2023 Tristan Bartolome</p>
                </div>
                <button className='repo' onClick={() => window.open("https://github.com/trstnb1998/Portfolio-Site", "_blank")}>
                    <div className="github-logo">
                        <AiFillGithub />
                    </div>
                    <div className="view-repo">
                        VIEW REPO
                    </div>
                </button>
            </footer>
        </div>
    )
}