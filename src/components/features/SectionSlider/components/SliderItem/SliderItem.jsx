import React from 'react';
import styles from './SliderItem.module.css';
import { clsx } from 'clsx';
import ItemFooter from '../ItemFooter/ItemFooter.jsx';
import { useNavigate } from 'react-router';

const SliderItem = ({ item, size, variant, type }) => {
    const types = {
        movie: 'movies',
        tv: 'tv',
        genres: 'genres',
    };

    const navigate = useNavigate();
    const handleClick = () => navigate(`/${types[type]}/${item.id}`);

    return (
        <article
            className={clsx(styles.card, styles[size])}
            onClick={handleClick}
        >
            <div className={styles.card__imageWrapper}>
                <img
                    src={item.src}
                    alt="poster"
                    className={styles.card__image}
                />
            </div>
            <ItemFooter variant={variant} item={item} />
        </article>
    );
};

export default SliderItem;
