import React, {useState} from "react";
import RestaurantImg from "../../assets/restaurant.png"


const Restaurant =()=>{

    const HandleRedirect=()=>{
        window.open('https://shivammauree.github.io/restaurant/', 'blank')
    };

    const [toggleState,setToggleState] = useState('hidden')
    const toggleTab =(state)=>{
        setToggleState(state)
    }
    return (

        <div className="project_box">
            <img src={RestaurantImg} className="project_img"/>
            <h3 className="project_title">Dynamic Dining Experience</h3>
            <p className="project_description">This project highlights a dynamic, data-driven approach to managing a restaurant's online presence, featuring easy content updates through a central data file.</p>
            <span className="project_button_left" onClick={HandleRedirect}>Visit Restaurant <i
                className="uil uil-arrow-right project_button_left_icon"></i></span>
            <span className="project_button" onClick={() => toggleTab('show')}>View More <i
                className="uil uil-arrow-right project_button_icon"></i></span>
            <div className="project_button_holder">
                <a href="https://github.com/ShivamMauree/restaurant" className="project_icon" target="_blank">
                    <i className="uil uil-github"></i>
                    <span>GitHub</span>
                </a>
            </div>

            <div className={toggleState === "show" ? "project_modal active_modal" : "project_modal"}>
                <div className="project_modal_content">
                    <h3 className="project_title">Dynamic Dining Experience</h3>
                    <p className="project_description">Explore how our restaurant seamlessly updates menus, events, and
                        specials with a simple change in the data file, maintaining a fresh and engaging user
                        experience.</p>

                    <ul className="project_modal-points grid">
                        <li className="project_modal-point">
                            <i className="uil uil-check-circle project_modal-icon"></i>
                            <p className="project_modal-info"> Dynamic content updates from a single JSON file.</p>
                        </li>

                        <li className="project_modal-point">
                            <i className="uil uil-check-circle project_modal-icon"></i>
                            <p className="project_modal-info"> Features an integrated booking and registration page for
                                direct email communication with the restaurant.</p>
                        </li>

                        <li className="project_modal-point">
                            <i className="uil uil-check-circle project_modal-icon"></i>
                            <p className="project_modal-info"> Easy management of menu items, prices, and
                                descriptions.</p>
                        </li>

                        <li className="project_modal-point">
                            <i className="uil uil-check-circle project_modal-icon"></i>
                            <p className="project_modal-info"> Automates updates to special offers and event
                                announcements.</p>
                        </li>

                        <li className="project_modal-point">
                            <i className="uil uil-check-circle project_modal-icon"></i>
                            <p className="project_modal-info"> Enhances user engagement with up-to-date information.</p>
                        </li>

                        <i className="uil uil-times services_modal-close" onClick={() => toggleTab('false')}></i>
                    </ul>
                </div>
            </div>
        </div>


    )
}

export default Restaurant