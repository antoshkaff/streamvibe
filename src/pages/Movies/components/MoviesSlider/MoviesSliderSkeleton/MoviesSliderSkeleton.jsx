import React from 'react';
import styles from './MoviesSliderSkeleton.module.css';
import { clsx } from 'clsx';

const MoviesSliderSkeleton = () => {
    return <div className={clsx('skeleton', styles.skeleton)}></div>;
};

export default MoviesSliderSkeleton;
