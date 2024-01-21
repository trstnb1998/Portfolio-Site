import React from 'react'
import './Resume.css'
import ResumeImage from '/src/assets/resume/ResumeImage.jpg'
import ResumePDF from '/src/assets/resume/ResumePDF.pdf'

export default function Resume() {
    return (
        <div className='container1'>
            <a href={ResumePDF} download='ResumePDF' target='_blank' className='PDF-link'>
                <button className='PDF-button'>DOWNLOAD PDF</button>
            </a>
            <iframe className='resume-img' src={ResumePDF} alt="Resume" />
        </div>
    )
}
