import React, { useRef, useState } from 'react';
import styles from './SectionSlider.module.css';
import SliderItem from '@/components/features/SectionSlider/components/SliderItem/SliderItem.jsx';
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import Pagination from '@/components/features/SectionSlider/components/Pagination/Pagination.jsx';
import ProgressBar from '@/components/features/SectionSlider/components/ProgressBar/ProgressBar.jsx';
import SectionSliderSkeleton from '@/components/features/SectionSlider/SectionSliderSkeleton/SectionSliderSkeleton.jsx';

const SectionSlider = ({
    title,
    subTitle,
    items,
    variant,
    size,
    type,
    ...props
}) => {
    const config = {
        sm: {
            0: {
                spaceBetween: 20,
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
            480: {
                spaceBetween: 20,
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            768: {
                spaceBetween: 20,
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            1024: {
                spaceBetween: 20,
                slidesPerView: 4,
                slidesPerGroup: 4,
            },
            1440: {
                spaceBetween: 30,
                slidesPerView: 5,
                slidesPerGroup: 5,
            },
        },
        md: {
            0: {
                spaceBetween: 20,
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
            480: {
                spaceBetween: 20,
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            768: {
                spaceBetween: 20,
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
            1024: {
                spaceBetween: 30,
                slidesPerView: 4,
                slidesPerGroup: 4,
            },
            1720: {
                spaceBetween: 30,
                slidesPerView: 5,
                slidesPerGroup: 5,
            },
        },
        lg: {
            0: {
                spaceBetween: 20,
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
            480: {
                spaceBetween: 20,
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            768: {
                spaceBetween: 20,
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
            1024: {
                spaceBetween: 30,
                slidesPerView: 4,
                slidesPerGroup: 4,
            },
        },
    };
    const [slidesPerView, setSlidesPerView] = useState(1);
    const [activeIndex, setActiveIndex] = useState(0);
    const sliderRef = useRef(null);
    const totalPages = Math.ceil(items?.length / slidesPerView);

    return items ? (
        <section className="section" {...props}>
            <header className="section__header">
                <div className="section__description">
                    <h2>{title}</h2>
                    <span className="sub-title">{subTitle}</span>
                </div>
                <div className="section__action">
                    <Pagination
                        ref={sliderRef}
                        totalPages={totalPages}
                        activeIndex={activeIndex}
                    />
                </div>
            </header>
            <div className={styles.sliderContainer}>
                <Swiper
                    ref={sliderRef}
                    centerInsufficientSlides={true}
                    breakpoints={{
                        ...config[size],
                    }}
                    className={styles.slider__body}
                    onSlideChange={(swiper) => {
                        setActiveIndex(
                            Math.ceil(swiper.activeIndex / slidesPerView),
                        );
                    }}
                    onBreakpoint={(swiper, breakpoint) => {
                        swiper.slideTo(0);
                        setActiveIndex(0);
                        setSlidesPerView(breakpoint.slidesPerView);
                    }}
                >
                    {items.map((item, index) => (
                        <SwiperSlide
                            key={index}
                            className={styles.slider__item}
                        >
                            <SliderItem
                                item={item}
                                variant={variant}
                                size={size}
                                type={type}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <ProgressBar
                    activeIndex={activeIndex}
                    totalPages={totalPages}
                />
            </div>
        </section>
    ) : (
        <SectionSliderSkeleton />
    );
};

export default SectionSlider;
