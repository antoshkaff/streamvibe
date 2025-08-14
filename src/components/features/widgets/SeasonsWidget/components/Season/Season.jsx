import React, { useState } from 'react';
import styles from './Season.module.css';
import Button from '@/components/UI/Button/Button.jsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useFetching } from '@/hooks/useFetching.js';
import FilmService from '@/services/FilmService.js';
import Episode from '@/components/features/widgets/SeasonsWidget/components/Season/components/Episode/Episode.jsx';
import EpisodeSkeleton from '@/components/features/widgets/SeasonsWidget/components/Season/components/Episode/EpisodeSkeleton/EpisodeSkeleton.jsx';

const Season = ({ data, tvId }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [episodes, setEpisodes] = useState([]);

    const [fetchEpisodes, isLoading] = useFetching(async () => {
        const res = await FilmService.getEpisodes(tvId, data?.season_number);
        setEpisodes(res.data.episodes);
    });

    const toggleOpen = () => {
        setIsOpen((prevState) => !prevState);
        fetchEpisodes();
    };

    return (
        <section className={styles.season}>
            <header className={styles.header}>
                <div className={styles.seasonData}>
                    <h2 className={styles.seasonTitle}>{data?.name}</h2>
                    <span className={styles.seasonEpisodes}>
                        {data?.episode_count} Episodes
                    </span>
                </div>

                <Button
                    className={styles.actionButton}
                    variant={'transparent'}
                    onClick={toggleOpen}
                >
                    <motion.svg
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <path
                            d="M10 3.75V16.25M10 16.25L15.625 10.625M10 16.25L4.375 10.625"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </motion.svg>
                </Button>
            </header>
            <AnimatePresence initial={false}>
                {isOpen &&
                    (isLoading ? (
                        <EpisodeSkeleton episodesAmount={data?.episode_count} />
                    ) : (
                        <motion.div
                            key="content"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2, ease: 'easeInOut' }}
                        >
                            <ul className={styles.episodeList}>
                                {episodes?.map((episode) => (
                                    <li
                                        key={episode.id}
                                        className={styles.episodeItem}
                                    >
                                        <Episode data={episode} />
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
            </AnimatePresence>
        </section>
    );
};

export default Season;
