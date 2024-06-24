import React, {useState} from "react";
import EngineImg from "../../assets/ecommerceAdmin.png"


const Ecommerce_Admin =()=>{

    const [toggleState,setToggleState] = useState('hidden')
    const toggleTab =(state)=>{
        setToggleState(state)
    }
    return (


        <div className="project_box">
            <img src={EngineImg} className="project_img"/>
            <h3 className="project_title">Admin Panel</h3>
            <p className="project_description">I developed a admin panel that enables product and category management, order tracking, and seamless integration with Amazon S3 buckets for storage.</p>
            <span className="project_button" onClick={() => toggleTab('show')}>View More <i className="uil uil-arrow-right project_button_icon"></i></span>
            <div className="project_button_holder">
                <a href="https://github.com/ShivamMauree/admin-panel" className="project_icon" target="_blank">
                    <i className="uil uil-github"></i>
                    <span>GitHub</span>
                </a>
            </div>

            <div className={toggleState === "show" ? "project_modal active_modal" : "project_modal"}>
                <div className="project_modal_content">
                    <h3 className="project_title">Store-Front eCommerce Admin Panel</h3>
                    <p className="project_description">The admin panel for the eCommerce website provides a powerful
                        interface for managing products and categories, tracking orders, and ensuring smooth operation
                        of the storefront. It leverages Amazon S3 for reliable data storage and Styled Components for
                        efficient styling.</p>
                    <ul className="project_modal-points grid">
                        <li className="project_modal-point">
                            <i className="uil uil-check-circle project_modal-icon"></i>
                            <p className="project_modal-info"> Developed functionality to upload and manage products and
                                categories, seamlessly integrated with Amazon S3 for storage.</p>
                        </li>

                        <li className="project_modal-point">
                            <i className="uil uil-check-circle project_modal-icon"></i>
                            <p className="project_modal-info"> Implemented order tracking to monitor and manage customer
                                orders efficiently.</p>
                        </li>

                        <li className="project_modal-point">
                            <i className="uil uil-check-circle project_modal-icon"></i>
                            <p className="project_modal-info"> Provided an intuitive user interface for admins to manage
                                storefront content and operations.</p>
                        </li>

                        <li className="project_modal-point">
                            <i className="uil uil-check-circle project_modal-icon"></i>
                            <p className="project_modal-info"> Enabled secure authentication for admin access, ensuring
                                only authorized personnel can manage the store.</p>
                        </li>

                        <li className="project_modal-point">
                            <i className="uil uil-check-circle project_modal-icon"></i>
                            <p className="project_modal-info"> Utilized Styled Components library for efficient and
                                scalable styling of the admin panel.</p>
                        </li>

                        <li className="project_modal-point">
                            <i className="uil uil-check-circle project_modal-icon"></i>
                            <p className="project_modal-info"> Integrated with Amazon S3 for reliable and scalable data
                                storage solutions, ensuring data integrity and availability.</p>
                        </li>

                        <i className="uil uil-times services_modal-close" onClick={() => toggleTab('false')}></i>
                    </ul>
                </div>
            </div>
        </div>


    )
}

export default Ecommerce_Admin