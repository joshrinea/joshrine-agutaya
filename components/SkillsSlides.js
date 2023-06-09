import React from 'react'

import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../swiper.css';

import { skills } from './data';

import { Autoplay, Pagination } from 'swiper';

function SkillsSlides() {
    return (
        <>
            <Swiper>
                {
                    skills.map((item, index) => {
                        // const 
                    })
                }
            </Swiper>
        </>
    )
}

export default SkillsSlides