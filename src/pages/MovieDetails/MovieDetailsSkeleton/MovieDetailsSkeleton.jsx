import React from 'react';
import styles from './MovieDetailsSkeleton.module.css';
import { clsx } from 'clsx';

const MovieDetailsSkeleton = () => {
    return (
        <div className={styles.container}>
            <div className={clsx('skeleton', styles.hero)}></div>
            <div className={styles.contentContainer}>
                <div className={clsx('skeleton', styles.description)}></div>
                <div className={clsx('skeleton', styles.cast)}></div>
                <div className={clsx('skeleton', styles.reviews)}></div>
                <div className={clsx('skeleton', styles.information)}></div>
            </div>
        </div>
    );
};

export default MovieDetailsSkeleton;
