import React from 'react';
import styles from './EpisodeSkeleton.module.css';
import { clsx } from 'clsx';

const EpisodeSkeleton = ({ episodesAmount = 5 }) => {
    return (
        <div className={styles.container}>
            {Array.from({ length: episodesAmount }).map((_, index) => (
                <div
                    key={index}
                    className={clsx('skeleton', styles.episode)}
                ></div>
            ))}
        </div>
    );
};

export default EpisodeSkeleton;
