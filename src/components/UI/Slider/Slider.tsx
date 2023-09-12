import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from "swiper";
import { ReactComponent as ArrowIcon } from '../../../assets/icons/Arrow Icon.svg';
import './Slider.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import { sliderRoutesInternational, sliderRoutesRussia } from '@/constant/constant';

const Slider = ({ title, className }: { title: string, className: string }) => {
    const [activeTab, setActiveTab] = useState('russia');
    const [swiper, setSwiper] = useState<SwiperType | null>(null);

    useEffect(() => {
        if (swiper) {
            swiper.update();
        }
    }, [swiper]);

    const handleSlidePrev = () => {
        if (swiper) {
            swiper.slidePrev();
        }
    };

    const handleNavButtonNext = () => {
        if (swiper) {
            swiper.slideNext()
        }
    };

    const handleClick = (name: string) => {
        setActiveTab(name);
    }

    return (
        <div className={`routes`}>
            <div className='container'>
                <div className='routes__wrapper'>
                    <h2 className='routes__title'>
                        {title}
                    </h2>
                    <div className='routes-tabs'>
                        <button className={`routes-tabs__btn 
                        ${activeTab === 'russia' ? 'active' : ''}`}
                            type='button'
                            name='russia'
                            onClick={() => handleClick('russia')}>
                            По России
                        </button>
                        <button className={`routes-tabs__btn 
                        ${activeTab === 'international' ? 'active' : ''}`}
                            type='button'
                            name='international'
                            onClick={() => handleClick('international')}
                        >
                            Международные
                        </button>
                    </div>
                    <div className='slider-nav'>
                        <button
                            type='button'
                            className='slider-nav__btn prev'
                            onClick={handleSlidePrev}>
                            <ArrowIcon />
                        </button>
                        <button
                            type='button'
                            className='slider-nav__btn next'
                            onClick={handleNavButtonNext}>
                            <ArrowIcon />
                        </button>
                    </div>
                </div>
                <Swiper className={`slider ${className}`}
                    onSwiper={setSwiper}
                    slidesPerView={3}
                    modules={[Navigation]}
                    spaceBetween={32}

                >
                    {activeTab === 'russia' ?
                        sliderRoutesRussia.map((slide) => (
                            <SwiperSlide
                                key={slide.id}
                                className='slider__item'>
                                <div className='slider__content'>
                                    <p className='slider__name'>{slide.value}</p>
                                    <p className='slider__price'>от <span>{slide.price}RUB</span></p>
                                </div>
                            </SwiperSlide>
                        )) :
                        sliderRoutesInternational.map((slide) => (
                            <SwiperSlide
                                key={slide.id}
                                className='slider__item'>
                                <div className='slider__content'>
                                    <p className='slider__name'>{slide.value}</p>
                                    <p className='slider__price'>от <span>{slide.price}RUB</span></p>
                                </div> 
                                
                            </SwiperSlide>
                        ))
                    }


                </Swiper>
            </div>

        </div>
    );
};

export default Slider;