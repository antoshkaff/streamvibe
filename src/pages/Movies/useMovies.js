import { useEffect, useState } from 'react';
import { useFetching } from '@/hooks/useFetching.js';
import FilmService from '@/services/FilmService.js';
import {
    formatGenresToSlider,
    formatResToSlider,
} from '@/utils/formatResToSlider.js';

export const useMovies = () => {
    const [genres, setGenres] = useState([]);
    const [fetchGenres] = useFetching(async () => {
        const res = await FilmService.getGenres();
        setGenres(formatGenresToSlider(res.data.genres));
    });

    const [moviesTrending, setMoviesTrending] = useState([]);
    const [fetchMoviesTrending] = useFetching(async () => {
        const res = await FilmService.getPopular();
        setMoviesTrending(formatResToSlider(res.data.results));
    });

    const [moviesReleases, setMoviesReleases] = useState([]);
    const [fetchMoviesReleases] = useFetching(async () => {
        const res = await FilmService.getRealizes();
        setMoviesReleases(formatResToSlider(res.data.results));
    });

    const [moviesTopRated, setMoviesTopRated] = useState([]);
    const [fetchMoviesTopRated] = useFetching(async () => {
        const res = await FilmService.getTopRated();
        setMoviesTopRated(formatResToSlider(res.data.results));
    });

    const [tvTrending, setTvTrending] = useState([]);
    const [fetchTvTrending] = useFetching(async () => {
        const res = await FilmService.getPopular('tv');
        setTvTrending(formatResToSlider(res.data.results));
    });

    const [tvReleases, setTvReleases] = useState([]);
    const [fetchTvReleases] = useFetching(async () => {
        const res = await FilmService.getRealizes('tv');
        setTvReleases(formatResToSlider(res.data.results));
    });

    const [tvTopRated, setTvTopRated] = useState([]);
    const [fetchTvTopRated] = useFetching(async () => {
        const res = await FilmService.getTopRated('tv');
        setTvTopRated(formatResToSlider(res.data.results));
    });

    const genresPopular = genres.map((genre) => ({
        ...genre,
        label: 'Top 10 in',
    }));
    useEffect(() => {
        fetchGenres();
        fetchMoviesTrending();
        fetchMoviesReleases();
        fetchMoviesTopRated();
        fetchTvTrending();
        fetchTvReleases();
        fetchTvTopRated();
    }, []);

    return {
        genres,
        genresPopular,
        moviesTrending,
        moviesReleases,
        moviesTopRated,
        tvTrending,
        tvReleases,
        tvTopRated,
    };
};
