import React from 'react'

const Info = () =>{
    return (
        <div className="about_info grid">
            <div className="about_box">
                <i className='bx bxs-award about-icon'></i>
                <h3 className="about_title">Experience</h3>
                <span className="about_subtitle">2 years Working Part-Time</span>
            </div>

            <div className="about_box">
                <i className='bx bxs-briefcase about-icon'></i>
                <h3 className="about_title">Completed</h3>
                <span className="about_subtitle">20+ Projects</span>
            </div>

            <div className="about_box">
                <i className='bx bx-support about-icon'></i>
                <h3 className="about_title">Support</h3>
                <span className="about_subtitle">24/7</span>
            </div>
        </div>
    )
}

export default Info