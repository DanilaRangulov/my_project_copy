import React, {useCallback, useEffect, useRef, useState} from 'react';
import * as classes from './clinicreviewgallery.module.scss'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import useIsMobile from "shared/functions/isMobile";
import ChoiseClinicDataMenu from "shared/ui/ChoiseClinicDataMenu/ChoiseClinicDataMenu";
import ContainerDescription from "shared/ui/ContainerDescription/ContainerDescription";
const ClinicReviewGallery = () => {
    const [currentImages, setImages] = useState<Array<string>>() // currentData
    const [activeButton, setActiveButton] = useState<string>()
    const [data, setData] = useState<any>();
    // const API_URL = process.env.API_URL
    const getData = () => {
        console.log(activeButton)
        setImages(data.find((item: any) => item.name === activeButton).imageURL)
    }
    const clinics = [
        'Новороссийская', 'Богатырский'
    ]
    const [currentElement, setCurrentElement] = useState<string>(clinics[0])
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
    const slider = useRef(null);


    async function fetchGallery2() {
        try {
            const response = await fetch(`https://nikaclinicsite.onrender.com/gallery_db`);
            const data = await response.json(); // Парсинг JSON-ответа
            return data; // Возвращаем массив изображений
        } catch (error) {
            console.error('Failed to fetch gallery:', error);
            return [];
        }
    }

    useEffect(() => {
        fetchGallery2().then(
            (received_data: any) => {
                setData(received_data);
                setActiveButton(received_data[0].name)
                setImages(received_data.find((item: any) => item.name === received_data[0].name).imageURL)
            })
    }, [])
    useEffect(() => {
        if (data){
            getData();
        }
    }, [activeButton])
    return (
        <div className={`container ${classes.clinic_review_gallery}`}>
            <ContainerDescription
                head={'Фотогалерея'}
                description={'Современные кабинеты ' +
                    'и оборудование для комфортного и эффективного лечения'}
                position={'center'}
            />
            <ChoiseClinicDataMenu
                elements={['Богатырский', 'Новороссийская']}
                activeButton={activeButton}
                setCurrentButton={setActiveButton}
            />
            <div className={classes.gallery_swiper}>
                <Swiper
                    ref={slider}
                    slidesPerView={'auto'}
                    spaceBetween={'16px'}
                    grabCursor={true}
                    freeMode={{
                        enabled: false
                    }}
                    className={classes.swiper}
                    modules={[FreeMode, Pagination]}
                    breakpoints={{
                        1140: {
                            slidesPerView: 2,
                            freeMode: false,
                            grabCursor: false,
                            spaceBetween: '16px'
                        }
                    }
                    }
                >
                    {
                        currentImages
                            ? currentImages.map((item: any) => {return <SwiperSlide><img src={item}/></SwiperSlide>
                            })
                            : 'Loading'
                    }
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
            </div>
        </div>
    );
};

export default ClinicReviewGallery;