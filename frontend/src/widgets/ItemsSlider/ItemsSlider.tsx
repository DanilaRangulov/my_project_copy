import React, {useEffect, useRef, useState} from 'react';
import * as classes from './ItemsSlider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import {Swiper as SwiperType} from "swiper";
import ItemSlide from "widgets/ItemsSlider/ui/ItemSlide/ItemSlide";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import {ItemSliderModel} from "widgets/ItemsSlider/model/types";
import ButtonsList from "widgets/ItemsSlider/ui/ButtonsList/ButtonsList";

const ItemsSlider = (props: ItemSliderModel) => {
    const {itemSlides} = props;
    const slider = useRef<SwiperType>(null);
    const slideToHandle = (index: number) => {
        slider.current.slideTo(index, 300);
    };
    return (
        <div className={`container ${classes.itemsSlider}`}>
            <h1 className={'h1_heading'}>Мы предлагаем</h1>
            <ButtonsList elements={itemSlides} slideById={slideToHandle} />
            <div className={classes.swiper_wrapper}>
                <Swiper
                    onBeforeInit={(swiper) => {
                        slider.current = swiper;
                    }}
                    slidesPerView={"auto"}
                    spaceBetween={'16px'}
                    centeredSlidesBounds={true}
                    grabCursor={true}
                    freeMode={{
                        enabled: false
                    }}
                    centeredSlides={true}
                    className={classes.swiper}
                    modules={[FreeMode, Pagination]}
                    breakpoints={{
                        1140: {
                            slidesPerView: 1,
                            freeMode: false,
                            grabCursor: false,
                            // spaceBetween: '16px'
                        }
                    }
                    }
                >
                    {
                        itemSlides.map((item, index) =>
                            <SwiperSlide key={index}>
                                <ItemSlide id={item.id} title={item.title} textContent={item.textContent} imageUrl={item.imageUrl} buttonTitle={item.buttonTitle}/>
                            </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default ItemsSlider;