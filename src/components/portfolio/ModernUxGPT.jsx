import React, {useState} from "react";
import EngineImg from "../../assets/GPTPlatform.png"


const GPTPlatform =()=>{

    const HandleRedirect=()=>{
        window.open('https://shivammauree.github.io/modern_ux_gpt/', 'blank')
    };

    const [toggleState,setToggleState] = useState('hidden')
    const toggleTab =(state)=>{
        setToggleState(state)
    }
    return (

        <div className="project_box">
            <img src={EngineImg} className="project_img"/>
            <h3 className="project_title">ChatGPT Platform</h3>
            <p className="project_description">This project showcases a modern user experience design, focusing on
                responsive layouts, interactive elements, and an intuitive interface.</p>
            <span className="project_button_left" onClick={HandleRedirect}>View Website <i
                className="uil uil-arrow-right project_button_left_icon"></i></span>
            <span className="project_button" onClick={() => toggleTab('show')}>View More <i
                className="uil uil-arrow-right project_button_icon"></i></span>
            <div className="project_button_holder">
                <a href="https://github.com/ShivamMauree/modern_ux_gpt" className="project_icon" target="_blank">
                    <i className="uil uil-github"></i>
                    <span>GitHub</span>
                </a>
            </div>

            <div className={toggleState === "show" ? "project_modal active_modal" : "project_modal"}>
                <div className="project_modal_content">
                    <h3 className="project_title">ChatGPT Platform</h3>
                    <p className="project_description">This project emphasizes the principles of modern web design,
                        incorporating responsive design, interactive elements, and user-centric features. Key
                        technologies used include React and CSS.</p>

                    <ul className="project_modal-points grid">
                        <li className="project_modal-point">
                            <i className="uil uil-check-circle project_modal-icon"></i>
                            <p className="project_modal-info"> Developed with a focus on modern UX principles.</p>
                        </li>

                        <li className="project_modal-point">
                            <i className="uil uil-check-circle project_modal-icon"></i>
                            <p className="project_modal-info"> Implements responsive design and interactive
                                elements.</p>
                        </li>

                        <li className="project_modal-point">
                            <i className="uil uil-check-circle project_modal-icon"></i>
                            <p className="project_modal-info"> Utilizes React and CSS for dynamic UI development.</p>
                        </li>

                        <li className="project_modal-point">
                            <i className="uil uil-check-circle project_modal-icon"></i>
                            <p className="project_modal-info"> Direct sign-up for instant access to ChatGPT's
                                features.</p>
                        </li>

                        <li className="project_modal-point">
                            <i className="uil uil-check-circle project_modal-icon"></i>
                            <p className="project_modal-info"> Provides an intuitive and user-friendly interface.</p>
                        </li>

                        <i className="uil uil-times services_modal-close" onClick={() => toggleTab('false')}></i>
                    </ul>
                </div>
            </div>


        </div>

    )
}

export default GPTPlatform