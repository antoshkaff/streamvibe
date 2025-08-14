import React from 'react';
import { TMDB_IMG } from '@/constants/constants.js';
import styles from './Episode.module.css';
import clock from '@/assets/misc/clock.svg';
import { clsx } from 'clsx';

const Episode = ({ data }) => {
    const formatCountNumber = (number) => {
        return number < 10 ? `0${number}` : number;
    };

    return (
        <article className={styles.episodeContainer}>
            <span className={styles.episodeNumber}>
                {formatCountNumber(data?.episode_number)}
            </span>
            <div className={styles.episode}>
                <div className={styles.episodeImageWrapper}>
                    <img
                        className={styles.episodeImage}
                        src={`${TMDB_IMG}/w185/${data.still_path}`}
                        alt=""
                    />
                </div>
                <div className={styles.episode__content}>
                    <div className={styles.episode__header}>
                        <h3 className={styles.episode__title}>{data.name}</h3>
                        {!!data?.runtime && (
                            <div className={styles.episode__runtime}>
                                <img src={clock} alt="Clock" />
                                <span>{data?.runtime} min</span>
                            </div>
                        )}
                    </div>
                    <div
                        className={clsx(
                            styles.episode__overview,
                            styles.mobileHidden,
                        )}
                    >
                        <p>{data?.overview}</p>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Episode;
