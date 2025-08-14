import React from 'react';
import styles from './Pagination.module.css';
import Button from '@/components/UI/Button/Button.jsx';
import { clsx } from 'clsx';

const Pagination = React.forwardRef(
    (
        {
            totalPages,
            activeIndex,
            variant,
            className,
            isMobileHide = true,
            isWithList = true,
        },
        sliderRef,
    ) => {
        return (
            <div
                className={clsx(
                    styles.pagination,
                    styles[variant],
                    isMobileHide && styles.isMobileHide,
                    className,
                )}
            >
                <Button
                    className={styles.pagination__button}
                    variant={variant === 'transparent' ? 'secondary' : 'dark'}
                    size={'md'}
                    onClick={() => sliderRef.current.swiper.slidePrev()}
                >
                    <svg
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M18.75 9L1.25 9M1.25 9L9.125 16.875M1.25 9L9.125 1.125"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Button>
                {isWithList && (
                    <ul className={styles.pagination__list}>
                        {Array.from({ length: totalPages }).map(
                            (item, index) => (
                                <li
                                    key={index}
                                    className={clsx(
                                        styles.pagination__item,
                                        index === activeIndex &&
                                            styles.pagination__itemActive,
                                    )}
                                    onClick={() =>
                                        sliderRef.current.swiper.slideTo(index)
                                    }
                                ></li>
                            ),
                        )}
                    </ul>
                )}
                <Button
                    className={styles.pagination__button}
                    variant={variant === 'transparent' ? 'secondary' : 'dark'}
                    size={'md'}
                    onClick={() => sliderRef.current.swiper.slideNext()}
                >
                    <svg
                        viewBox="0 0 24 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M13.75 1.25L22.5 10M22.5 10L13.75 18.75M22.5 10H1.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Button>
            </div>
        );
    },
);

export default Pagination;
