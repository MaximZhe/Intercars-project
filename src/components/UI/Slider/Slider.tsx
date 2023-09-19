import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from "swiper";
import SliderNavButtons from './SliderNavButtons/SliderNavButtons';
import SliderTabsButtons from './SliderTabsButtons/SliderTabsButtons';
import { sliderRoutesInternational, sliderRoutesRussia } from '@/constant/constant';
import './Slider.scss';
import 'swiper/css';
import 'swiper/css/navigation';

import ButtonRoutes from '../Button/ButtonRoutes/ButtonRoutes';
import RouteItem from '@/components/RouteItem/RouteItem';


const Slider = ({ title, className }: { title: string, className: string }) => {
    const [activeTab, setActiveTab] = useState('russia');
    const [swiper, setSwiper] = useState<SwiperType | null>(null);
    const [isFirstSlide, setIsFirstSlide] = useState(true);
    const [isLastSlide, setIsLastSlide] = useState(false);
    
    const handleReachEnd = () => {
        setIsFirstSlide(false);
        setIsLastSlide(true);
    };

    const handleReachBeginning = () => {
        setIsFirstSlide(true);
        setIsLastSlide(false);
    };

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
                    <SliderTabsButtons activeTab={activeTab}
                        handleClick={(name) => handleClick(name)}
                         />
                    <SliderNavButtons
                        handleSlidePrev={handleSlidePrev}
                        handleNavButtonNext={handleNavButtonNext}
                        firstSlide={isFirstSlide}
                        lastSlide={isLastSlide} />
                </div>
                <Swiper className={`slider ${className}`}
                    onReachEnd={handleReachEnd}
                    onReachBeginning={handleReachBeginning}
                    onSwiper={setSwiper}
                    modules={[Navigation]}
                    spaceBetween={32}
                    breakpoints={{
                        480: {
                            slidesPerView: 1,
                        },
                        576: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2,
                        },

                        991: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {activeTab === 'russia' ?
                        sliderRoutesRussia.map((slide) => (
                            <SwiperSlide
                                key={slide.id}
                                className='slide'
                            >
                                <RouteItem data={slide}/>
                            </SwiperSlide>
                        )) :
                        sliderRoutesInternational.map((slide) => (
                            <SwiperSlide
                                key={slide.id}
                            >
                                <RouteItem data={slide}/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div className='routes-more'>
                    <ButtonRoutes className='routes-more__link' />
                </div>
            </div>
        </div>
    );
};

export default Slider;