import React, {useState} from 'react'
import "./services.css"
const Services = () => {
    const [toggleState, setToggleState]= useState('false');
    const toggleTab=(service)=>{
        setToggleState(service);
    }
    return(
        <section className="services section" id="services">
            <h2 className="section_title">Services</h2>
            <span className="section_subtitle">What I offer</span>
            <div className="services_container container grid">

                <div className="services_content">
                    <div>
                        <i className="bx bxs-palette services_icon"></i>
                        <h3 className="services_title"> Frontend  Developer</h3>
                    </div>
                    <span className="services_button " onClick={()=>toggleTab('frontend')}>View More <i className="uil uil-arrow-right
                     services_button_icon"></i></span>

                    <div className={toggleState==='frontend' ? "services_modal active_modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i className="uil uil-times services_modal-close" onClick={()=>toggleTab('false')}></i>
                            <h3 className="services_modal-title">Frontend Developer</h3>
                            <p className="services_modal-description">Service with close to three years of experience, providing quality work to clients and companies.</p>
                            <ul className="services_modal-services grid">

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">I create responsive and interactive web pages</p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info"> I develop user interfaces with responsive design</p>
                                </li>


                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">I optimize website performance for user experience</p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">I ensure cross-browser compatibility</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="services_content">
                    <div>
                        <i className="bx bxs-cog services_icon"></i>
                        <h3 className="services_title">Backend Developer</h3>
                    </div>
                    <span className="services_button" onClick={() => toggleTab('backend')}>View More <i className="uil uil-arrow-right
                     services_button_icon"></i></span>
                    <div className={toggleState === 'backend' ? "services_modal active_modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i className="uil uil-times services_modal-close" onClick={() => toggleTab('false')}></i>
                            <h3 className="services_modal-title"> Backend Developer</h3>
                            <p className="services_modal-description">Service with close to three years of experience.
                                Providing quality work to clients and companies.</p>
                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info"> I integrate APIs and third-party services</p>
                                </li>
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info"> I manage database operations</p>
                                </li>
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info"> I ensure application security and data
                                        protection</p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info"> I optimize server performance and
                                        scalability</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="services_content">
                    <div>
                        <i className="bx bx-glasses services_icon"></i>
                        <h3 className="services_title">Data Science</h3>
                    </div>
                    <span className="services_button" onClick={() => toggleTab('datascientist'
                    )}>View More <i className="uil uil-arrow-right
                     services_button_icon"></i></span>
                    <div className={toggleState === 'datascientist' ? "services_modal active_modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i className="uil uil-times services_modal-close" onClick={() => toggleTab('false')}></i>
                            <h3 className="services_modal-title"> Data Scientist</h3>
                            <p className="services_modal-description">Service with close to one year of experience.
                                Providing quality work to clients and companies.</p>
                            <ul className="services_modal-services grid">

                                <li className="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p class="services_modal-info"> I build and evaluate predictive models</p>
                                </li>
                                <li class="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p class="services_modal-info"> I conduct statistical analysis and hypothesis
                                        testing</p>
                                </li>
                                <li class="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p class="services_modal-info"> I visualize data to communicate insights
                                        effectively</p>
                                </li>
                                <li class="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p class="services_modal-info"> I deploy machine learning models to production</p>
                                </li>
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info"> I perform data cleaning and preprocessing</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Services