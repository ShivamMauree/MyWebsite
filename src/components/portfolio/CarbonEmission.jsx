import React, {useState} from "react";
import CarbonImg from "../../assets/carbon.png"


const CarbonEmission =()=>{

    const [toggleState,setToggleState] = useState('hidden')
    const toggleTab =(state)=>{
        setToggleState(state)
    }
    return (


        <div className="project_box">
            <img src={CarbonImg} className="project_img"/>
            <h3 className="project_title">Carbon Emission Dashboard</h3>
            <p className="project_description">I developed an insightful Carbon Emission Dashboard featuring
                comprehensive analysis and visualization of CO2 emissions data over time by zip code and energy
                sector.</p>
            <span className="project_button" onClick={() => toggleTab('show')}>View More <i
                className="uil uil-arrow-right project_button_icon"></i></span>
            <div className="project_button_holder">
                <a href="https://github.com/ShivamMauree/carbon-emission-dashboard" className="project_icon"
                   target="_blank">
                    <i className="uil uil-github"></i>
                    <span>GitHub</span>
                </a>
            </div>

            <div className={toggleState === "show" ? "project_modal active_modal" : "project_modal"}>
                <div className="project_modal_content">
                    <h3 className="project_title">Carbon Emission Dashboard</h3>
                    <p className="project_description">This dashboard provides a detailed analysis of carbon emissions,
                        displaying data through interactive graphs created using Jupyter Notebook and Tableau. It
                        includes visualizations of CO2 emissions trends over time by zip code and energy sector.</p>
                    <span className="project_button" onClick={() => toggleTab('show')}>View More <i
                        className="uil uil-arrow-right project_button_icon"></i></span>
                    <div className="project_button_holder">
                        <a href="https://github.com/ShivamMauree/carbon-emission-dashboard" className="project_icon"
                           target="_blank">
                            <i className="uil uil-github"></i>
                            <span>GitHub</span>
                        </a>
                    </div>

                    <div className={toggleState === "show" ? "project_modal active_modal" : "project_modal"}>
                        <div className="project_modal_content">
                            <h3 className="project_title">Carbon Emission Dashboard Details</h3>
                            <p className="project_description">The dashboard features an intuitive interface with
                                in-depth insights into carbon emission patterns. It offers functionalities such as
                                detailed time-series analysis, sector-wise comparison, and geographic distribution of
                                emissions.</p>

                            <ul className="project_modal-points grid">
                                <li className="project_modal-point">
                                    <i className="uil uil-check-circle project_modal-icon"></i>
                                    <p className="project_modal-info"> Conducted extensive data analysis in Jupyter
                                        Notebook to clean, process, and visualize carbon emission data.</p>
                                </li>

                                <li className="project_modal-point">
                                    <i className="uil uil-check-circle project_modal-icon"></i>
                                    <p className="project_modal-info"> Developed time-series graphs showing CO2 emission
                                        trends over time by zip code, allowing for detailed temporal analysis.</p>
                                </li>

                                <li className="project_modal-point">
                                    <i className="uil uil-check-circle project_modal-icon"></i>
                                    <p className="project_modal-info"> Created sector-wise comparison charts to
                                        illustrate emission contributions from different energy sectors.</p>
                                </li>

                                <li className="project_modal-point">
                                    <i className="uil uil-check-circle project_modal-icon"></i>
                                    <p className="project_modal-info"> Integrated geographic visualizations to display
                                        the distribution of carbon emissions across various zip codes.</p>
                                </li>

                                <li className="project_modal-point">
                                    <i className="uil uil-check-circle project_modal-icon"></i>
                                    <p className="project_modal-info"> Utilized Tableau for creating advanced
                                        interactive visualizations, enhancing the user's ability to explore the
                                        data.</p>
                                </li>

                                <li className="project_modal-point">
                                    <i className="uil uil-check-circle project_modal-icon"></i>
                                    <p className="project_modal-info"> Ensured the dashboard provides actionable
                                        insights for policy makers and researchers focused on reducing carbon
                                        emissions.</p>
                                </li>

                                <i className="uil uil-times services_modal-close" onClick={() => toggleTab('false')}></i>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default CarbonEmission