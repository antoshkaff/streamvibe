import React from 'react';
import styles from './Rating.module.css';
import fullStar from '@/assets/rating/fullStar.svg';
import halfStar from '@/assets/rating/halfStar.svg';
import emptyStar from '@/assets/rating/emptyStar.svg';
import { clsx } from 'clsx';

const Rating = ({ data = 0, label, variant }) => {
    const maxStars = 5;
    const roundedRating = Math.round((data / 2) * 2) / 2;
    const fullStars = Math.floor(roundedRating);
    const hasHalfStar = roundedRating % 1 !== 0;
    const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className={clsx(styles.rating, styles[variant])}>
            {label && <span className={styles.label}>{label}</span>}
            <div className={styles.starsListWrapper}>
                <ul className={styles.starsList}>
                    {[...Array(fullStars)].map((star, index) => (
                        <li key={index}>
                            <div className={styles.starWrapper}>
                                <img
                                    src={fullStar}
                                    alt="Full star"
                                    className={styles.star}
                                />
                            </div>
                        </li>
                    ))}
                    {hasHalfStar && (
                        <li>
                            <div className={styles.starWrapper}>
                                <img
                                    src={halfStar}
                                    alt="Half star"
                                    className={styles.star}
                                />
                            </div>
                        </li>
                    )}
                    {[...Array(emptyStars)].map((star, index) => (
                        <li key={index}>
                            <div className={styles.starWrapper}>
                                <img
                                    src={emptyStar}
                                    alt="Empty star"
                                    key={index}
                                    className={styles.star}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
                <span className={styles.ratingLabel}>{roundedRating}</span>
            </div>
        </div>
    );
};

export default Rating;
