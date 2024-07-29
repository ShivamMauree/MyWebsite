import React, {useState} from "react";
import PortfolioImg from "../../assets/Portfolio.png"


const LoopPortfolio =()=>{

    const HandleRedirect=()=>{
        window.open('https://smauree.com/', 'blank')
    };

    const [toggleState,setToggleState] = useState('hidden')
    const toggleTab =(state)=>{
        setToggleState(state)
    }
    return (

        <div className="project_box">
            <img src={PortfolioImg} className="project_img"/>
            <h3 className="project_title">This Portfolio Website</h3>
            <p className="project_description">Showcasing projects and skills in web development, data science, and more, with responsive design and interactive elements.</p>
            <span className="project_button_left" onClick={HandleRedirect}>Visit Portfolio <i
                className="bx bx-infinite  project_button_left_icon"></i></span>
            <span className="project_button" onClick={() => toggleTab('show')}>View More <i
                className="uil uil-arrow-right project_button_icon"></i></span>
            <div className="project_button_holder">
                <a href="https://github.com/ShivamMauree/MyWebsite" className="project_icon" target="_blank">
                    <i className="uil uil-github"></i>
                    <span>GitHub</span>
                </a>
            </div>

            <div className={toggleState === "show" ? "project_modal active_modal" : "project_modal"}>
                <div className="project_modal_content">
                    <h3 className="project_title">Shivam Mauree Portfolio</h3>
                    <p className="project_description">Explore my professional journey, projects, and technical skills,
                        with a focus on interactive design and user experience.</p>

                    <ul className="project_modal-points grid">
                        <li className="project_modal-point">
                            <i className="uil uil-check-circle project_modal-icon"></i>
                            <p className="project_modal-info"> Responsive design ensuring optimal viewing on all
                                devices.</p>
                        </li>

                        <li className="project_modal-point">
                            <i className="uil uil-check-circle project_modal-icon"></i>
                            <p className="project_modal-info"> Integration of dynamic and interactive elements using
                                React.</p>
                        </li>

                        <li className="project_modal-point">
                            <i className="uil uil-check-circle project_modal-icon"></i>
                            <p className="project_modal-info"> Showcases projects with detailed descriptions and
                                visuals.</p>
                        </li>

                        <li className="project_modal-point">
                            <i className="uil uil-check-circle project_modal-icon"></i>
                            <p className="project_modal-info"> Easy navigation and clear call-to-action buttons.</p>
                        </li>

                        <li className="project_modal-point">
                            <i className="uil uil-check-circle project_modal-icon"></i>
                            <p className="project_modal-info"> Links to GitHub repositories for code review.</p>
                        </li>

                        <i className="uil uil-times services_modal-close" onClick={() => toggleTab('false')}></i>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default LoopPortfolio