import React from 'react';
import styles from './Device.module.css';

const Device = ({ iconSrc, title, description }) => {
    return (
        <article className={styles.device}>
            <header className={styles.deviceHeader}>
                <div className={styles.iconWrapper}>
                    <img
                        src={iconSrc}
                        alt="Device"
                        className={styles.deviceIcon}
                    />
                </div>
                <h3 className={styles.deviceTitle}>{title}</h3>
            </header>
            <div>
                <p className={styles.deviceDescription}>{description}</p>
            </div>
        </article>
    );
};

export default Device;
