import React, { useRef, useEffect } from 'react';
import "./portfolio.css";
import EngineProject from "./2dEngine";
import EcommerceFront from "./CommerceFront";
import CarbonEmission from "./CarbonEmission";
import CommerceAdmin from "./CommerceAdmin";
import GPTPlatform from "./ModernUxGPT";
import Restaurant from "./Restaurant";
import LoopPortfolio from "./LoopPortfolio";

const Portfolio = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        let startX;
        let scrollLeft;
        let isDown = false;

        const mouseDownHandler = (e) => {
            isDown = true;
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
            container.style.cursor = 'grabbing';
            container.style.userSelect = 'none';
        };

        const mouseLeaveHandler = () => {
            isDown = false;
            container.style.cursor = 'grab';
            container.style.removeProperty('user-select');
        };

        const mouseUpHandler = () => {
            isDown = false;
            container.style.cursor = 'grab';
            container.style.removeProperty('user-select');
        };

        const mouseMoveHandler = (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 1.5; // Slow down scroll speed
            container.scrollLeft = scrollLeft - walk;
        };

        container.addEventListener('mousedown', mouseDownHandler);
        container.addEventListener('mouseleave', mouseLeaveHandler);
        container.addEventListener('mouseup', mouseUpHandler);
        container.addEventListener('mousemove', mouseMoveHandler);

        container.addEventListener('mousedown', () => {
            container.classList.add('active');
        });

        container.addEventListener('mouseup', () => {
            container.classList.remove('active');
        });

        container.addEventListener('mouseleave', () => {
            container.classList.remove('active');
        });

        return () => {
            container.removeEventListener('mousedown', mouseDownHandler);
            container.removeEventListener('mouseleave', mouseLeaveHandler);
            container.removeEventListener('mouseup', mouseUpHandler);
            container.removeEventListener('mousemove', mouseMoveHandler);
            container.removeEventListener('mousedown', () => {
                container.classList.add('active');
            });
            container.removeEventListener('mouseup', () => {
                container.classList.remove('active');
            });
            container.removeEventListener('mouseleave', () => {
                container.classList.remove('active');
            });
        };
    }, []);

    return (
        <section className="portfolio_section section" id="portfolio">
            <h2 className="portfolio_title section_title">Portfolio</h2>
            <span className="portfolio_subtitle section_subtitle">A sneak peek</span>

            <div className="project_container container grid" ref={containerRef}>
                <Restaurant/>
                <GPTPlatform/>
                <LoopPortfolio/>
                <EngineProject />
                <CarbonEmission />
                <EcommerceFront />
                <CommerceAdmin/>
            </div>
        </section>
    );
};

export default Portfolio;





//
// import React from 'react';
// import "./portfolio.css"
// import EngineProject from "./2dEngine";
// import EcommerceFront from "./Commerce_Front";
// import CarbonEmission from "./CarbonEmission";
// import {Swiper, SwiperSlide} from"swiper/react";
// import "swiper/css";
// import"swiper/css/pagination";
// import { Pagination } from 'swiper/modules';
// const Portfolio =()=>{
//     return(
//         <section className="portfolio_section section">
//             <h2 className="portfolio_title section_title">Portfolio</h2>
//             <span className="portfolio_subtitle section_subtitle">A sneak peek</span>
//
//             <Swiper className="project_container container grid"
//                     loop={true}
//                     spaceBetween={24}
//                     pagination={{ clickable:true,}}
//                     breakpoints={{
//                         576:{slidesPerView:2,},
//                         768:{slidesPerView:3,spaceBetween:48,},
//                     }}
//                     modules={[Pagination]}>
//                 <SwiperSlide><EngineProject/></SwiperSlide>
//                 <SwiperSlide><EcommerceFront/></SwiperSlide>
//                 <SwiperSlide><CarbonEmission/></SwiperSlide>
//             </Swiper>
//
//         </section>
//     )
// }
//
// export default Portfolio





// import React, { useRef, useEffect } from 'react';
// import "./portfolio.css";
// import EngineProject from "./2dEngine";
// import EcommerceFront from "./Commerce_Front";
// import CarbonEmission from "./CarbonEmission";
//
// const Portfolio = () => {
//     const containerRef = useRef(null);
//
//     useEffect(() => {
//         const container = containerRef.current;
//
//         let startX;
//         let scrollLeft;
//         let isDown = false;
//
//         const mouseDownHandler = (e) => {
//             isDown = true;
//             startX = e.pageX - container.offsetLeft;
//             scrollLeft = container.scrollLeft;
//         };
//
//         const mouseLeaveHandler = () => {
//             isDown = false;
//         };
//
//         const mouseUpHandler = () => {
//             isDown = false;
//         };
//
//         const mouseMoveHandler = (e) => {
//             if (!isDown) return;
//             e.preventDefault();
//             const x = e.pageX - container.offsetLeft;
//             const walk = (x - startX) * 3; //scroll-fast
//             container.scrollLeft = scrollLeft - walk;
//         };
//
//         container.addEventListener('mousedown', mouseDownHandler);
//         container.addEventListener('mouseleave', mouseLeaveHandler);
//         container.addEventListener('mouseup', mouseUpHandler);
//         container.addEventListener('mousemove', mouseMoveHandler);
//
//         return () => {
//             container.removeEventListener('mousedown', mouseDownHandler);
//             container.removeEventListener('mouseleave', mouseLeaveHandler);
//             container.removeEventListener('mouseup', mouseUpHandler);
//             container.removeEventListener('mousemove', mouseMoveHandler);
//         };
//     }, []);
//
//     return (
//         <section className="portfolio_section section">
//             <h2 className="portfolio_title section_title">Portfolio</h2>
//             <span className="portfolio_subtitle section_subtitle">A sneak peek</span>
//
//             <div className="project_container container grid" ref={containerRef}>
//                 <EngineProject />
//                 <EcommerceFront />
//                 <CarbonEmission />
//                 {/* Add more project components here */}
//             </div>
//         </section>
//     );
// };
//
// export default Portfolio;