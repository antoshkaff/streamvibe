import React, { useRef, useState } from 'react';
import { clsx } from 'clsx';
import sharedStyles from '@/components/features/widgets/widgetShared.module.css';
import styles from './ReviewsWidget.module.css';
import Pagination from '@/components/features/SectionSlider/components/Pagination/Pagination.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import Review from '@/components/features/widgets/ReviewsWidget/components/Review/Review.jsx';
import ProgressBar from '@/components/features/SectionSlider/components/ProgressBar/ProgressBar.jsx';
import Button from '@/components/UI/Button/Button.jsx';
import NothingHere from '@/components/UI/NothingHere/NothingHere.jsx';

const ReviewsWidget = ({ className, items }) => {
    const sliderRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const [slidesPerView, setSlidesPerView] = useState(2);
    const [slidesPerGroup, setSlidesPerGroup] = useState(2);

    const totalPages = Math.ceil(items.length / slidesPerGroup);

    return (
        <section
            className={clsx(sharedStyles.widget, styles.widget, className)}
        >
            <header className={sharedStyles.header}>
                <h2 className={sharedStyles.widget__title}>Reviews</h2>
                <Button variant={'secondary'} className={styles.addButton}>
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 6V18M18 12L6 12"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <span>Add Your Review</span>
                </Button>
            </header>

            <div className={sharedStyles.sliderContainer}>
                <Swiper
                    ref={sliderRef}
                    spaceBetween={20}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                        },
                        769: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                        },
                    }}
                    onSlideChange={(swiper) => {
                        const groupSize = swiper.params.slidesPerGroup || 1;
                        const currentPage = Math.round(
                            swiper.activeIndex / groupSize,
                        );
                        setActiveIndex(currentPage);
                    }}
                    onSwiper={(swiper) => {
                        const groupSize = swiper.params.slidesPerGroup || 1;
                        setSlidesPerGroup(groupSize);
                    }}
                    onBreakpoint={(swiper, breakpoint) => {
                        swiper.slideTo(0);
                        setActiveIndex(0);
                        setSlidesPerView(breakpoint.slidesPerView);
                    }}
                >
                    {items.length ? (
                        items?.map((item, index) => (
                            <SwiperSlide key={index} className={styles.slide}>
                                <Review data={item} />
                            </SwiperSlide>
                        ))
                    ) : (
                        <NothingHere size={'md'} />
                    )}
                </Swiper>
            </div>
            {!!items.length && (
                <div className={styles.actionsContainer}>
                    <Pagination
                        ref={sliderRef}
                        className={clsx(
                            sharedStyles.pagination,
                            styles.pagination,
                        )}
                        variant={'transparent'}
                        totalPages={totalPages}
                        activeIndex={activeIndex}
                        isWithList={true}
                    />
                    <ProgressBar
                        activeIndex={activeIndex}
                        totalPages={totalPages}
                    />
                </div>
            )}
        </section>
    );
};

export default ReviewsWidget;
