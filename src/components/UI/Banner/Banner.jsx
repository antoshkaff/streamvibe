import React from 'react';
import styles from './Banner.module.css';
import Button from '@/components/UI/Button/Button.jsx';

const Banner = ({ imgSrc, title, subTitle, actionText }) => {
    return (
        <section className={styles.banner}>
            <img className={styles.banner__image} src={imgSrc} alt="Banner" />
            <div className={styles.banner__content}>
                <h2 className={styles.banner__title}>{title}</h2>
                <span className="sub-title">{subTitle}</span>
            </div>
            <Button className={styles.banner__action} variant={'accent'}>
                {actionText}
            </Button>
        </section>
    );
};

export default Banner;
