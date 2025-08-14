import React from 'react';
import Plan from '@/components/features/PlanList/components/Plan/Plan.jsx';
import styles from './PlanList.module.css';

const PlanList = ({ variant }) => {
    const plans = {
        monthly: [
            {
                title: 'Basic Plan',
                description:
                    'Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.',
                price: '9.99',
            },
            {
                title: 'Standard Plan',
                description:
                    'Access to a wider selection of movies and shows, including most new releases and exclusive content',
                price: '12.99',
            },
            {
                title: 'Premium Plan',
                description:
                    'Access to a widest selection of movies and shows, including all new releases and Offline Viewing',
                price: '14.99',
            },
        ],
        yearly: [
            {
                title: 'Basic Plan',
                description:
                    'Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.',
                price: '199.99',
            },
            {
                title: 'Standard Plan',
                description:
                    'Access to a wider selection of movies and shows, including most new releases and exclusive content',
                price: '155.99',
            },
            {
                title: 'Premium Plan',
                description:
                    'Access to a widest selection of movies and shows, including all new releases and Offline Viewing',
                price: '179.99',
            },
        ],
    };
    return (
        <ul className={styles.list}>
            {plans[variant].map(({ title, description, price }, index) => (
                <li key={index} className={styles.item}>
                    <Plan
                        title={title}
                        description={description}
                        price={price}
                        variant={variant}
                    />
                </li>
            ))}
        </ul>
    );
};

export default PlanList;
