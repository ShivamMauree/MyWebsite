import React from 'react'
import "./footer.css"
const Footer =() =>{
    return(
        <footer className="footer">
            <div className="footer_container container">
                <h1 className="footer_title">Shiv Mauree</h1>

                <ul className="footer_list">

                    <li>
                        <a href="#home" className="footer_link">Home</a>
                    </li>

                    <li>
                        <a href="#about" className="footer_link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer_link">Portfolio</a>
                    </li>

                    <li>
                        <a href="#services" className="footer_link">Services</a>
                    </li>
                </ul>

                <div className="footer_social">
                    <a href="https://www.instagram.com/shiv_like_the_knife/" className="footer_social_icon"
                       target="_blank">
                        <i className='bx bxl-instagram-alt'></i>
                    </a>
                    <a href="https://www.linkedin.com/in/saravana-mauree/" className="footer_social_icon" target="_blank">
                        <i className='bx bxl-linkedin-square'></i>
                    </a>
                    <a href="https://github.com/ShivamMauree" className="footer_social_icon" target="_blank">
                        <i className='bx bxl-github'></i>

                    </a>
                </div>

                <span className="footer_copy">&#169;ShivamMauree. All Rights Reserved</span>
            </div>
        </footer>
    )
}

export default Footer