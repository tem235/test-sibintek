import * as React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';


const Portfolio = () => (
    <div id={'portfolio'} className={'section portfolio'}>
        <Swiper
            slidesPerView={1}
            loop={true}
        >
            <SwiperSlide>
                <div className="portfolio-slide">
                    <div className="portfolio-slide-info">
                        <h1>Getbett</h1>
                        <p>Two words Get Better </p>
                        <a href="#" className='btn'>Go to website</a>
                    </div>
                    <div className="portfolio-slide-img">
                        <img src="../assets/unicorn.svg" alt=""/>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
        </Swiper>
    </div>
);

export default Portfolio;