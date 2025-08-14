import React from 'react';
import styles from './PlanCard.module.css';
import { clsx } from 'clsx';

const PlanCard = ({ variant }) => {
    const features = {
        basic: [
            {
                name: 'Price',
                content: '$9.99/Month',
            },
            {
                name: 'Free Trail',
                content: '7 Days',
            },
            {
                name: 'Content',
                content:
                    'Access to a wide selection of movies and shows, including some new releases.',
                isWide: true,
            },
            {
                name: 'Devices',
                content: 'Watch on one device simultaneously',
                isWide: true,
            },
            {
                name: 'Cancel Anytime',
                content: 'Yes',
            },
            {
                name: 'HDR',
                content: 'No',
            },
            {
                name: 'Dolby Atmos',
                content: 'No',
            },
            {
                name: 'Ad - Free',
                content: 'No',
            },
            {
                name: 'Offline Viewing',
                content: 'No',
            },
            {
                name: 'Family Sharing',
                content: 'No',
            },
        ],
        standard: [
            {
                name: 'Price',
                content: '$12.99/Month',
            },
            {
                name: 'Free Trail',
                content: '7 Days',
            },
            {
                name: 'Content',
                content:
                    'Access to a wider selection of movies and shows, including most new releases and exclusive content',
                isWide: true,
            },
            {
                name: 'Devices',
                content: 'Watch on Two device simultaneously',
                isWide: true,
            },
            {
                name: 'Cancel Anytime',
                content: 'Yes',
            },
            {
                name: 'HDR',
                content: 'Yes',
            },
            {
                name: 'Dolby Atmos',
                content: 'Yes',
            },
            {
                name: 'Ad - Free',
                content: 'Yes',
            },
            {
                name: 'Offline Viewing',
                content: 'Yes, for select titles.',
            },
            {
                name: 'Family Sharing',
                content: '5 family members.',
            },
        ],
        premium: [
            {
                name: 'Price',
                content: '$14.99/Month',
            },
            {
                name: 'Free Trail',
                content: '7 Days',
            },
            {
                name: 'Content',
                content:
                    'Access to a widest selection of movies and shows, including all new releases and Offline Viewing',
                isWide: true,
            },
            {
                name: 'Devices',
                content: 'Watch on Four device simultaneously',
                isWide: true,
            },
            {
                name: 'Cancel Anytime',
                content: 'Yes',
            },
            {
                name: 'HDR',
                content: 'Yes',
            },
            {
                name: 'Dolby Atmos',
                content: 'Yes',
            },
            {
                name: 'Ad - Free',
                content: 'Yes',
            },
            {
                name: 'Offline Viewing',
                content: 'Yes, for all titles.',
            },
            {
                name: 'Family Sharing',
                content: '6 family members.',
            },
        ],
    };
    return (
        <article className={styles.planCard}>
            {features[variant].map((feature, index) => (
                <div
                    className={clsx(
                        styles.feature,
                        feature.isWide && styles.featureWide,
                    )}
                    key={index}
                >
                    <span className={styles.feature__name}>{feature.name}</span>
                    <p className={styles.feature__content}>{feature.content}</p>
                </div>
            ))}
        </article>
    );
};

export default PlanCard;
