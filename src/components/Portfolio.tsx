import * as React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/swiper.scss';


const Portfolio = () => (
    <div id={'portfolio'} className={'section portfolio'}>
        <Swiper
            slidesPerView={1}
            loop={true}
            autoplay={true}
        >
            <SwiperSlide>
                <div className="portfolio-slide">
                    <div className="portfolio-slide-info">
                        <h1>Getbett</h1>
                        <p>
                            GetBett is the first fitness studio of a new format in Ufa
                            We take customer focus to the next level and take pride in the special atmosphere of the
                            club. In our effective and energetic workouts, we inspire people to new victories: in
                            sports, in life, right now and in the long term. </p>

                        <a href="https://www.getbett.ru" className='btn'>Go to website</a>
                    </div>
                    <div className="portfolio-slide-img">
                        <img src="../assets/big-logo.svg" alt=""/>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="portfolio-slide">
                    <div className="portfolio-slide-info">
                        <h1>Migran Studio</h1>
                        <p>
                            Custom and made to order cosplay and costume masks! </p>

                        <a href="#" className='btn'>Go to website</a>
                    </div>
                    <div className="portfolio-slide-img">
                        <img src="../assets/logo.png" alt=""/>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
);

export default Portfolio;