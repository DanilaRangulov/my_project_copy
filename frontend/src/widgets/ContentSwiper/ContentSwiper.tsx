import React, {FC, ReactElement, useRef} from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import * as classes from './contentswiper.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import isMobile from "shared/functions/isMobile";
import {useMediaQuery} from "react-responsive";
import useIsMobile from "shared/functions/isMobile";
const ContentSwiper : FC<{elements: Array<ReactElement>; type: string}> = ({elements, type}) => {
    const slider = useRef(null);
    const handleNext = () => {
        if (slider.current) {
            slider.current.swiper.slideNext();
        }
    }
    const handlePrev = () => {
        if (slider.current) {
            slider.current.swiper.slidePrev();
        }
    }
    const countOfSlides = (type: string) => {
        if (type == 'ClinicView') {
            return 2
        } else
            return 3
    }
    return (
        <div className={`container ${classes.clinic_review_gallery}`}>
            <Swiper
                ref={slider}
                slidesPerView={'auto'}
                spaceBetween={'15px'}
                grabCursor={true}
                freeMode={{
                    enabled: false
                }}
                className={classes.swiper}
                modules={[FreeMode, Pagination]}
                breakpoints={{
                    1140: {
                        slidesPerView: 3,
                        freeMode: false,
                        grabCursor: false,
                        spaceBetween: '16px'
                    }
                }
                }
            >
                {elements.map((item) => {
                    return <SwiperSlide>{item}</SwiperSlide>
                })}
            </Swiper>
            <div
                className={classes.circle_left}
                style={{display: useIsMobile() ? 'none' : 'flex'}}
                onClick={handlePrev}
            >
                <svg viewBox="0 0 61 61" fill="" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30.5896" cy="30.5" r="30">

                    </circle>
                    <polygon points="22.47 18.71 34.76 31 22.47 43.29 24.85 45.68 39.53 31 24.85 16.32 22.47 18.71"/>
                </svg>
            </div>
            <div
                className={classes.circle_right}
                style={{display: useIsMobile() ? 'none' : 'flex'}}
                onClick={handleNext}
            >
                <svg viewBox="0 0 61 61" fill="" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30.5896" cy="30.5" r="30">

                    </circle>
                    <polygon points="22.47 18.71 34.76 31 22.47 43.29 24.85 45.68 39.53 31 24.85 16.32 22.47 18.71"/>
                </svg>
            </div>
            {/*<ContainerDescription*/}
            {/*    head={'Фотогалерея'}*/}
            {/*    description={'Современные кабинеты и оборудование для комфортного и эффективного лечения'}*/}
            {/*    position={'center'}*/}
            {/*/>*/}
            {/*<ChoiseClinicDropDownMenu items={['Новороссийской', 'Богатырской']}/>*/}
            {/*<ContentSwiper elements={elements} type={'ClinicView'}/>*/}
        </div>
    );
};

export default ContentSwiper;