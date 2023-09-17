import React from 'react'
import './Resume.css'
import ResumeImage from '/src/assets/ResumeImage.jpg'
import ResumePDF from '/src/assets/ResumePDF.pdf'

export default function Resume() {
    return (
        <div className='container1'>
            <a href={ResumePDF} download='ResumePDF' target='_blank' className='PDF-link'>
                <button className='PDF-button'>DOWNLOAD PDF</button>
            </a>
            <img className='resume-img' src={ResumeImage} alt="Resume" />
        </div>
    )
}
