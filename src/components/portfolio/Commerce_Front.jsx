import React, {useState} from "react";
import EngineImg from "../../assets/ecommerce.png"


const Ecommerce_Front =()=>{

    const [toggleState,setToggleState] = useState('hidden')
    const toggleTab =(state)=>{
        setToggleState(state)
    }
    return (


        <div className="project_box">
            <img src={EngineImg} className="project_img"/>
            <h3 className="project_title">Store-Front eCommerce</h3>
            <p className="project_description">I developed a fully operational eCommerce storefront that fetches data
                from a backend server. This includes components such as a storefront,
                cart, categories, and a login page.</p>
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
                    <h3 className="project_title">Store-Front eCommerce</h3>
                    <p className="project_description">I developed a fully operational eCommerce storefront website that fetches data
                        from a backend server and utilizes Amazon S3 buckets for storage. The website includes various components such as a storefront,
                        cart, categories, and a login page, all styled using the Styled Components library.</p>
                    <span className="project_button" onClick={() => toggleTab('show')}>View More <i className="uil uil-arrow-right project_button_icon"></i></span>
                    <div className="project_button_holder">
                        <a href="https://github.com/ShivamMauree/customer-front" className="project_icon" target="_blank">
                            <i className="uil uil-github"></i>
                            <span>GitHub</span>
                        </a>
                    </div>

                    <div className={toggleState === "show" ? "project_modal active_modal" : "project_modal"}>
                        <div className="project_modal_content">
                            <h3 className="project_title">Store-Front eCommerce Details</h3>
                            <p className="project_description">The eCommerce website features a user-friendly interface with a robust backend
                                integration. It provides a seamless shopping experience with functionalities like product browsing, cart management,
                                category filters, and secure user authentication.</p>

                            <ul className="project_modal-points grid">
                                <li className="project_modal-point">
                                    <i className="uil uil-check-circle project_modal-icon"></i>
                                    <p className="project_modal-info"> Developed a fully functional storefront displaying products dynamically fetched from the backend.</p>
                                </li>

                                <li className="project_modal-point">
                                    <i className="uil uil-check-circle project_modal-icon"></i>
                                    <p className="project_modal-info"> Integrated cart functionality allowing users to add, remove, and manage items in their cart.</p>
                                </li>

                                <li className="project_modal-point">
                                    <i className="uil uil-check-circle project_modal-icon"></i>
                                    <p className="project_modal-info"> Implemented category filters to enhance product search and navigation.</p>
                                </li>

                                <li className="project_modal-point">
                                    <i className="uil uil-check-circle project_modal-icon"></i>
                                    <p className="project_modal-info"> Designed a secure login page for user authentication and account management.</p>
                                </li>

                                <li className="project_modal-point">
                                    <i className="uil uil-check-circle project_modal-icon"></i>
                                    <p className="project_modal-info"> Utilized Styled Components library for efficient and scalable styling of the website.</p>
                                </li>

                                <li className="project_modal-point">
                                    <i className="uil uil-check-circle project_modal-icon"></i>
                                    <p className="project_modal-info"> Data and assets hosted on Amazon S3 for scalable and reliable storage solutions.</p>
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

export default Ecommerce_Front