import React from 'react';
import sharedStyles from '../widgetShared.module.css';
import styles from './DescriptionWidget.module.css';
import { clsx } from 'clsx';

const DescriptionWidget = ({ className, content }) => {
    return (
        <section className={clsx(sharedStyles.widget, className)}>
            <header className={sharedStyles.header}>
                <h2 className={sharedStyles.widget__title}>Description</h2>
            </header>

            <p className={styles.content}>{content}</p>
        </section>
    );
};

export default DescriptionWidget;
