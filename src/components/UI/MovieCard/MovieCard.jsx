import React from 'react';
import styles from './MovieCard.module.css';
import { TMDB_IMG } from '@/constants/constants.js';
import Button from '@/components/UI/Button/Button.jsx';
import { useNavigate } from 'react-router';
import NothingHere from '@/components/UI/NothingHere/NothingHere.jsx';

const MovieCard = ({ data }) => {
    const navigate = useNavigate();
    const handleClick = () => navigate(`/movies/${data.id}`);

    return (
        <article className={styles.card}>
            {data.poster_path ? (
                <img
                    className={styles.card__image}
                    src={`${TMDB_IMG}/w500/${data.poster_path}`}
                    alt=""
                />
            ) : (
                <NothingHere className={styles.card__image} size={'md'} />
            )}

            <div className={styles.content}>
                <span>{data.overview}</span>
                <Button
                    variant={'accent'}
                    className={styles.accentButton}
                    size={'md'}
                    onClick={handleClick}
                >
                    <svg
                        viewBox="0 0 19 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.75 2.59479C0.75 0.930972 2.53383 -0.123757 3.9917 0.678068L17.4557 8.08328C18.9668 8.91436 18.9668 11.0856 17.4557 11.9167L3.9917 19.3219C2.53383 20.1238 0.75 19.069 0.75 17.4052V2.59479Z"
                            fill="currentColor"
                        />
                    </svg>
                    Play now
                </Button>
            </div>
        </article>
    );
};

export default MovieCard;
