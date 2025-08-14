import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { useFetching } from '@/hooks/useFetching.js';
import FilmService from '@/services/FilmService.js';
import Container from '@/components/UI/Container/Container.jsx';
import styles from './Genres.module.css';
import { useObserver } from '@/hooks/useObserver.js';
import MoviesCardsList from '@/components/features/MoviesCardsList/MoviesCardsList.jsx';
import Filters from '@/components/features/Filters/Filters.jsx';
import NothingHere from '@/components/UI/NothingHere/NothingHere.jsx';

const Genres = () => {
    const params = useParams();

    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [items, setItems] = useState([]);
    const [filters, setFilters] = useState({});

    const loaderRef = useRef(null);

    const [fetchItems, isItemsLoading] = useFetching(async () => {
        const res = await FilmService.getByGenre(
            'movie',
            params.id,
            page,
            filters,
        );
        setItems((prev) => [...prev, ...res.data.results]);

        setHasMore(page < res.data.total_pages);
    });

    useObserver(loaderRef, hasMore && !isItemsLoading, () =>
        setPage((p) => p + 1),
    );

    useEffect(() => {
        fetchItems();
    }, [page, filters, params.id]);

    const handleFilters = (next) => {
        setFilters(next || {});
        setItems([]);
        setHasMore(true);
        setPage(1);
    };

    useEffect(() => {
        setItems([]);
        setHasMore(true);
        setPage(1);
        setFilters({});
    }, [params.id]);

    return (
        <Container className={styles.pageContent}>
            <Filters onSubmit={handleFilters} />
            {items.length || isItemsLoading ? (
                <MoviesCardsList items={items} isLoading={isItemsLoading} />
            ) : (
                <NothingHere size={'lg'} />
            )}
            {hasMore && !isItemsLoading && <div ref={loaderRef} />}
        </Container>
    );
};

export default Genres;
