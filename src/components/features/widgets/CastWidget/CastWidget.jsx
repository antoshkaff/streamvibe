import React, { useRef } from 'react';
import { clsx } from 'clsx';
import sharedStyles from '@/components/features/widgets/widgetShared.module.css';
import styles from './CastWidget.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Pagination from '@/components/features/SectionSlider/components/Pagination/Pagination.jsx';
import { TMDB_IMG } from '@/constants/constants.js';

const CastWidget = ({ className, items = [] }) => {
    const sliderRef = useRef(null);

    return (
        <section
            className={clsx(sharedStyles.widget, styles.widget, className)}
        >
            <header className={sharedStyles.header}>
                <h2 className={sharedStyles.widget__title}>Cast</h2>
                <Pagination
                    ref={sliderRef}
                    className={sharedStyles.pagination}
                    isWithList={false}
                    isMobileHide={false}
                    variant={'transparent'}
                />
            </header>

            <div className={sharedStyles.sliderContainer}>
                <Swiper
                    ref={sliderRef}
                    slidesPerView={'auto'}
                    spaceBetween={20}
                >
                    {items.map((item, index) => (
                        <SwiperSlide key={index} className={styles.slide}>
                            <div className={styles.castImageWrapper}>
                                {item.profile_path ? (
                                    <img
                                        className={styles.castImage}
                                        src={`${TMDB_IMG}/w185/${item?.profile_path}`}
                                        alt={item?.name || ''}
                                    />
                                ) : (
                                    <span>{item?.name}</span>
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default CastWidget;
