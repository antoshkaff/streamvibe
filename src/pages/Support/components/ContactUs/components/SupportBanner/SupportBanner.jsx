import React from 'react';
import styles from './SupportBanner.module.css';
import bannerSrc from '@/assets/support/banner.png';

const SupportBanner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.banner__header}>
                <h2 className={styles.banner__title}>
                    Welcome to our support page!
                </h2>
                <span className="sub-title">
                    We're here to help you with any problems you may be having
                    with our product.
                </span>
            </div>
            <div className={styles.banner__body}>
                <img
                    className={styles.banner__image}
                    src={bannerSrc}
                    alt="banner"
                />
            </div>
        </div>
    );
};

export default SupportBanner;
