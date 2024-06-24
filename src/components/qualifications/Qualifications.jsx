import React from 'react'
import "./qualifications.css"
const Qualifications =()=>{
    return(
        <section className="qualifications section" id="qualifications">
            <h2 className="qualifications_title section_title">Qualifications</h2>
            <span className="qualifications_subtitle section_subtitle">My journey</span>

            <div className="qualifications_container container">
                <div className="qualification_tabs">
                    <div className="qualification_button qualification_active button--flex">
                        <i className="uil uil-briefcase-alt qualification_icon"></i> Experience
                    </div>
                    <div className="qualification_button qualification_active button--flex">
                        <i className="uil uil-graduation-cap qualification_icon"></i> Education
                    </div>


                </div>

                <div className="qualification_sections">

                    <div className="qualification_content qualification_content_active">
                        <div className="qualification_data">
                        <div>
                                <h3 className="qualification_title"> Intructor of Record </h3>
                                <span className="qualification_subtitle">Youngstown State University</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i> 2023-Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data qualification_padding">
                            <div>
                                <h3 className="qualification_title"> Data Scientist </h3>
                                <span className="qualification_subtitle">Nuvve</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i> 2023-2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data qualification_padding">
                            <div></div>


                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>

                            <div>
                                <h3 className="qualification_title">Mathematics & Statistics <br/> Graduate</h3>
                                <span className="qualification_subtitle">Youngstown State University</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i> 2023-2024
                                </div>
                            </div>

                        </div>

                        <div className="qualification_data qualification_padding">
                            <div>
                                <h3 className="qualification_title"> Software Developer</h3>
                                <span className="qualification_subtitle">Part-time Freelance</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021-2024
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data qualification_padding">
                            <div></div>


                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>

                            <div>
                                <h3 className="qualification_title">Computer Science & Mathematics <br/> Undergraduate
                                </h3>
                                <span className="qualification_subtitle">Youngstown State University</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i> 2019-2022
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Qualifications