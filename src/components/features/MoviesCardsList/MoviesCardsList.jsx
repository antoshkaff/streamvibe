import React from 'react';
import styles from './MoviesCardsList.module.css';
import MovieCard from '@/components/UI/MovieCard/MovieCard.jsx';
import MovieCardsSkeleton from '@/components/UI/MovieCard/MovieCardsSkeleton/MovieCardsSkeleton.jsx';

const MoviesCardsList = ({ items, isLoading }) => {
    return (
        <>
            <ul className={styles.itemsList}>
                {items?.map((item, index) => (
                    <li key={`${item.id}-${index}`}>
                        <MovieCard data={item} />
                    </li>
                ))}
            </ul>
            {isLoading && <MovieCardsSkeleton />}
        </>
    );
};

export default MoviesCardsList;
