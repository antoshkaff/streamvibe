import React from 'react';
import styles from './SectionGroup.module.css';

const SectionGroup = ({ label, children, ...props }) => {
    return (
        <section className={styles.sectionGroup} {...props}>
            {label && <h2 className={styles.label}>{label}</h2>}
            {children}
        </section>
    );
};

export default SectionGroup;
