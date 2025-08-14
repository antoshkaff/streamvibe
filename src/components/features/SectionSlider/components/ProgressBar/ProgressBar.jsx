import React from 'react';
import styles from './ProgressBar.module.css';

const ProgressBar = ({ activeIndex, totalPages }) => {
    return (
        <div className={styles.progressBarContainer}>
            <div
                className={styles.progressBar}
                style={{
                    width: `${((activeIndex + 1) / totalPages) * 100}%`,
                }}
            ></div>
        </div>
    );
};

export default ProgressBar;
