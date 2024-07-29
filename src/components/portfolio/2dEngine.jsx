import React, {useState} from "react";
import EngineImg from "../../assets/2dEngine.png"


const EngineProject =()=>{

    const [toggleState,setToggleState] = useState('hidden')
    const toggleTab =(state)=>{
        setToggleState(state)
    }
    return (


        <div className="project_box">
            <img src={EngineImg} className="project_img"/>
            <h3 className="project_title">2d Game Engine</h3>
            <p className="project_description">I developed a comprehensive 2D Game Maker that includes a custom 2D
                Physics Engine, Platformer Engine, and an advanced UI/Level Editor.</p>
            <span className="project_button" onClick={() => toggleTab('show')}>View More <i className="uil uil-arrow-right
                     project_button_icon"></i></span>
            <div className="project_button_holder">
                <a href="https://github.com/ShivamMauree/customer-front" className="project_icon" target="_blank">
                    <i className="uil uil-github"></i>
                    <span>GitHub</span>
                </a>
            </div>


            <div className={toggleState === "show" ? "project_modal active_modal" : "project_modal"}>
                <div className="project_modal_content">
                    <h3 className="project_title">2d Game Engine</h3>
                    <p className="project_description">Utilizing libraries such as LWJGL, GLFW, and OpenGL, the project
                        features efficient rendering, a finite state automata-based animation system, and a robust
                        physics engine. The UI/Level Editor, built with IMGUI, offers intuitive tools for game development,including
                        drag-and-drop functionality, zooming, and component management.</p>


                    <ul className="project_modal-points grid">
                        <li className="project_modal-point">
                            <i className="uil uil-check-circle project_modal-icon"></i>
                            <p className="project_modal-info"> Developed a 2D Physics Engine, 2D Platformer Engine, and
                                in-depth UI/Level Editor.</p>
                        </li>

                        <li className="project_modal-point">
                            <i className="uil uil-check-circle project_modal-icon"></i>
                            <p className="project_modal-info"> Basic implementation with box collision and collision
                                resolution.</p>
                        </li>

                        <li className="project_modal-point">
                            <i className="uil uil-check-circle project_modal-icon"></i>
                            <p className="project_modal-info"> Tracks player movements and interactions (camera
                                movement, level changes, player vs PVE components).</p>
                        </li>
                        <li className="project_modal-point">
                            <i className="uil uil-check-circle project_modal-icon"></i>
                            <p className="project_modal-info"> Drag and drop.
                                Highlight feature for moving, editing, and deleting multiple blocks.
                                Mouse scroll detection for zooming out.
                                Ability to move around in the editor once zoomed out.</p>
                        </li>

                        <li className="project_modal-point">
                            <i className="uil uil-check-circle project_modal-icon"></i>
                            <p className="project_modal-info">Included animation states and transitions based on
                                key-dependent and variable-dependent triggers.</p>
                        </li>

                        <li className="project_modal-point">
                            <i className="uil uil-check-circle project_modal-icon"></i>
                            <p className="project_modal-info"> Implemented using a finite state automata.
                            </p>
                        </li>

                        <i className="uil uil-times services_modal-close" onClick={() => toggleTab('false')}></i>
                    </ul>
                </div>
            </div>


        </div>


    )
}

export default EngineProject