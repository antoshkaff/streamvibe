import React from 'react';
import styles from './Review.module.css';
import Rating from '@/components/UI/Rating/Rating.jsx';
import { formatDate } from '@/utils/formatDate.js';
import Scrollbar from '@/components/UI/Scrollbar/Scrollbar.jsx';

const Review = ({ data }) => {
    return (
        <article className={styles.review}>
            <header className={styles.reviewHeader}>
                <div className={styles.author}>
                    <span className={styles.name}>{data.author}</span>
                    <span className={styles.date}>
                        {formatDate(data.created_at)}
                    </span>
                </div>
                <Rating data={data.author_details.rating} variant={'small'} />
            </header>
            <Scrollbar
                className={styles.reviewBody}
                autoHide={false}
                style={{ maxHeight: 350 }}
            >
                <p>{data.content}</p>
            </Scrollbar>
        </article>
    );
};

export default Review;
