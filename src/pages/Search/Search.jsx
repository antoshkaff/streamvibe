import React, { useEffect, useRef, useState } from 'react';
import Container from '@/components/UI/Container/Container.jsx';
import styles from '@/pages/Genres/Genres.module.css';
import Input from '@/components/UI/Input/Input.jsx';
import { useLocation, useNavigate } from 'react-router';
import { useFetching } from '@/hooks/useFetching.js';
import FilmService from '@/services/FilmService.js';
import MoviesCardsList from '@/components/features/MoviesCardsList/MoviesCardsList.jsx';
import { useObserver } from '@/hooks/useObserver.js';
import NothingHere from '@/components/UI/NothingHere/NothingHere.jsx';

const Search = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [query, setQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState(query);
    const [page, setPage] = useState(1);
    const [items, setItems] = useState([]);

    const loaderRef = useRef(null);
    const [hasMore, setHasMore] = useState(true);

    const [fetchSearch, isLoading] = useFetching(async () => {
        const res = await FilmService.search(debouncedQuery, page);
        setItems((prev) => [...prev, ...res.data.results]);

        if (page >= res.data.total_pages) {
            setHasMore(false);
        }
    });

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const newQuery = searchParams.get('query') ?? '';

        setItems([]);
        setPage(1);
        setHasMore(true);
        setQuery(newQuery);
    }, [location.search]);

    useEffect(() => {
        const handler = setTimeout(() => {
            const currentParams = new URLSearchParams(location.search);
            const currentQuery = currentParams.get('query') ?? '';

            if (currentQuery !== query) {
                navigate(`/search?query=${encodeURIComponent(query)}`, {
                    replace: true,
                });
            }

            setDebouncedQuery(query);
        }, 500);

        return () => clearTimeout(handler);
    }, [query]);

    useEffect(() => {
        fetchSearch();
    }, [page, debouncedQuery]);

    useObserver(loaderRef, hasMore && !isLoading, () => setPage(page + 1));

    return (
        <Container className={styles.pageContent}>
            <Input
                placeholder={'Search'}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
            />

            {items.length || isLoading ? (
                <MoviesCardsList items={items} isLoading={isLoading} />
            ) : (
                <NothingHere size={'lg'} />
            )}

            <div ref={loaderRef}></div>
        </Container>
    );
};

export default Search;
