import React from 'react';
import styles from './Plan.module.css';
import Button from '@/components/UI/Button/Button.jsx';

const Plan = ({ title, description, price, variant }) => {
    const variants = {
        monthly: 'month',
        yearly: 'year',
    };
    return (
        <article className={styles.plan}>
            <header className={styles.plan__header}>
                <h3 className={styles.plan__title}>{title}</h3>
                <p className={styles.plan__description}>{description}</p>
            </header>
            <div className={styles.body}>
                <span className={styles.price}>
                    ${price}
                    <span className={styles.priceType}>
                        /{variants[variant]}
                    </span>
                </span>
            </div>
            <footer className={styles.footer}>
                <Button
                    className={styles.buttonSecondary}
                    variant={'secondary'}
                >
                    Start Free Tial
                </Button>
                <Button className={styles.buttonSecondary} variant={'accent'}>
                    Choose Plan
                </Button>
            </footer>
        </article>
    );
};

export default Plan;
