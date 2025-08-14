import React from 'react';
import styles from './InformationSection.module.css';

const InformationSection = ({ title, icon, children }) => {
    return (
        <section className={styles.container}>
            <header className={styles.header}>
                {icon && (
                    <img className={styles.icon} src={icon} alt="Calendar" />
                )}
                <h2 className={styles.title}>{title}</h2>
            </header>
            <div className={styles.body}>{children}</div>
        </section>
    );
};

export default InformationSection;
