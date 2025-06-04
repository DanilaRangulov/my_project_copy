import React, {useEffect, useRef, useState} from 'react';
import StocksItem from "pages/MainPage/ui/StocksSection/StocksItem/StocksItem";
import * as classes from './stockssection.module.scss'
import ContentSwiper from "widgets/ContentSwiper/ContentSwiper";
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import useIsMobile from "shared/functions/isMobile";
import ContainerDescription from "shared/ui/ContainerDescription/ContainerDescription";
import image1 from 'shared/assets/images/stocks/stock1.png'
import image2 from 'shared/assets/images/stocks/stock2.jpg'
import image3 from 'shared/assets/images/stocks/stock3.png'
const StocksSection = () => {
    const elements = [
        <StocksItem
            imageURL={image1}
            title={'Лечение зубов у взрослых и детей'}
            date_start={'1 июля'}
            date_end={'2 июля'}
            sale={'Скидка 20%'}
        />,
        <StocksItem
            imageURL={image2}
            title={'Открытие новой клиники на Богатырском п.'}
            date_start={'1 июля'}
            date_end={'2 июля'}
            sale={''}
        />,
        <StocksItem
            imageURL={image3}
            title={'Гигиеническая чистка зубов'}
            date_start={'1 июля'}
            date_end={'2 июля'}
            sale={'Скидка 30%'}
        />,
        <StocksItem
            imageURL={image1}
            title={'Лечение зубов у взрослых и детей'}
            date_start={'1 июля'}
            date_end={'2 июля'}
            sale={'Скидка 20%'}
        />,
        <StocksItem
            imageURL={image2}
            title={'Открытие новой клиники на Богатырском п.'}
            date_start={'1 июля'}
            date_end={'2 июля'}
            sale={''}
        />,
        <StocksItem
            imageURL={image3}
            title={'Гигиеническая чистка зубов'}
            date_start={'1 июля'}
            date_end={'2 июля'}
            sale={'Скидка 30%'}
        />,
    ]
    const slider = useRef<SwiperType>(null);
    const handleNext = () => {
        if (slider.current) {
            slider.current.slideNext();
        }
    }
    const handlePrev = () => {
        if (slider.current) {
            slider.current.slidePrev();
        }
    }
    const [isBeginning, setIsBeginning] = useState<boolean>(true)
    const [isEnd, setIsEnd] = useState<boolean>(false)
    return (
        <div className={'container'}>
            <ContainerDescription head={'Акции и новости'} description={''} position={'center'}/>
            <div className={classes.stocks_section}>
                <Swiper
                    onBeforeInit={(swiper) => {
                        slider.current = swiper;
                    }}
                    onSlideChange={(swiper) => {
                        setIsBeginning(swiper.isBeginning)
                        setIsEnd(swiper.isEnd)
                    }}
                    slidesPerView={'auto'}
                    spaceBetween={'16px'}
                    grabCursor={true}
                    freeMode={{
                        enabled: false
                    }}
                    className={classes.swiper}
                    modules={[FreeMode, Pagination, Navigation]}
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
                    style={{display: (useIsMobile() || isBeginning) ? 'none' : 'flex'}}
                    onClick={handlePrev}
                >
                    <svg viewBox="0 0 61 61" fill="" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="30.5896" cy="30.5" r="30">

                        </circle>
                        <polygon
                            points="22.47 18.71 34.76 31 22.47 43.29 24.85 45.68 39.53 31 24.85 16.32 22.47 18.71"/>
                    </svg>
                </div>


                <div
                    className={classes.circle_right}
                    style={{display: (useIsMobile() || isEnd) ? 'none' : 'flex'}}
                    onClick={handleNext}
                >

                    <svg viewBox="0 0 61 61" fill="" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="30.5896" cy="30.5" r="30">

                        </circle>
                        <polygon
                            points="22.47 18.71 34.76 31 22.47 43.29 24.85 45.68 39.53 31 24.85 16.32 22.47 18.71"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default StocksSection;