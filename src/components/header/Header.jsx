import React, {useState} from 'react';
import "./header.css";

const Header = () => {
    const[Toggle, setToggle] = useState(false);
    const showMenu = (state)=>{
        setToggle(state)
    }
    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav_logo"><span>Shiv</span></a>

                <div className={Toggle ? "nav_menu show_menu" : "nav_menu"}>
                    <ul className="nav_list">
                        <li className="nav_item">
                            <a href="" className="nav_link active-link">
                                <i className="uil uil-estate nav_icon"></i>
                                <span>Home</span>
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#about" className="nav_link">
                                <i className="uil uil-user nav_icon"></i>
                                <span>About</span>
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#skills" className="nav_link">
                                <i className="uil uil-file nav_icon"></i>
                                <span>Skills</span>
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#services" className="nav_link">
                                <i className="uil uil-briefcase-alt nav_icon"></i>
                                <span>Services</span>
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#qualifications" className="nav_link">
                                <i className="uil uil-graduation-cap nav_icon"></i>
                                <span>Qual</span>
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#portfolio" className="nav_link">
                                <i className="uil uil-scenery nav_icon"></i>
                                <span>Portfolio</span>
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#contact" className="nav_link">
                                <i className="uil uil-message nav_icon"></i>
                                <span>Contact</span>
                            </a>
                        </li>
                    </ul>
                    <div className="nav_close" onClick={() => showMenu(false)}>
                        <i className="uil uil-times nav_close"></i>
                    </div>
                </div>
                <div className="nav_toggle" onClick={() => showMenu(true)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    );
};

export default Header;
