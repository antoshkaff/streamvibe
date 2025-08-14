import React from 'react';
import styles from './MovieCardsSkeleton.module.css';
import { clsx } from 'clsx';

const MovieCardsSkeleton = () => {
    return (
        <div className={styles.container}>
            {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className={clsx('skeleton', styles.item)}></div>
            ))}
        </div>
    );
};

export default MovieCardsSkeleton;
