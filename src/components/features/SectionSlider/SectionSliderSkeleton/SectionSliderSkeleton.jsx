import React from 'react';
import styles from './SectionSliderSkeleton.module.css';
import { useBreakpoint } from '@/hooks/useBreakpoint.js';

const SectionSliderSkeleton = () => {
    const isMobile = useBreakpoint(768);
    const items = Array(isMobile ? 1 : 5).fill(null);

    return (
        <section className={styles.skeleton}>
            <div className={styles.skeletonHeader}></div>
            <div className={styles.skeletonSlider}>
                {items.map((_, idx) => (
                    <div key={idx} className={styles.skeletonCard} />
                ))}
            </div>
        </section>
    );
};

export default SectionSliderSkeleton;
