import React from 'react'
import Frontend from "./Frontend";
import Backend from "./Backend";
import Datascience from "./Datascience";
import "./skills.css"
const Skills = () =>{
    return (
        <section className="skills section" id="skills">
        <h2 className="section_title">Skills</h2>
            <span className="section_subtitle">My Technical Experience</span>

            <div className="skills_container container grid">
                <div className="skills_box">
                    <h3 className="skills_denominator">Frontend Development</h3>
                    <Frontend/>
                </div>
                <div className="skills_box">
                    <h3 className="skills_denominator">Backend Development</h3>
                    <Backend/>
                </div>
                <div className="skills_box">
                    <h3 className="skills_denominator">Data Science</h3>
                    <Datascience/>
                </div>

            </div>

        </section>
    )
}

export default Skills