import React from 'react';
import { clsx } from 'clsx';
import sharedStyles from '@/components/features/widgets/widgetShared.module.css';
import styles from './SeasonsWidget.module.css';
import Season from '@/components/features/widgets/SeasonsWidget/components/Season/Season.jsx';

const SeasonsWidget = ({ className, items, tvId }) => {
    return (
        <section className={clsx(sharedStyles.widget, className)}>
            <header className={sharedStyles.header}>
                <h2 className={styles.widget__title}>Seasons and Episodes</h2>
            </header>

            {items?.map((season) => (
                <Season key={season.id} data={season} tvId={tvId} />
            ))}
        </section>
    );
};

export default SeasonsWidget;
