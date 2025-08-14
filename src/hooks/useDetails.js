import { useEffect, useState } from 'react';
import { useFetching } from '@/hooks/useFetching.js';
import FilmService from '@/services/FilmService.js';

export const useDetails = (type, id) => {
    const [data, setData] = useState([]);
    const [fetchData, isDataLoading] = useFetching(async () => {
        const res = await FilmService.get(type, id);
        setData(res.data);
    });

    const [credits, setCredits] = useState([]);
    const [fetchCredits, isCreditsLoading] = useFetching(async () => {
        const res = await FilmService.getCast(type, id);
        setCredits(res.data);
    });

    const [reviews, setReviews] = useState([]);
    const [fetchReviews, isReviewsLoading] = useFetching(async () => {
        const res = await FilmService.getReviews(type, id);
        setReviews(res.data.results);
    });

    const [translations, setTranslations] = useState([]);
    const [fetchTranslations, isTranslationsLoading] = useFetching(async () => {
        const res = await FilmService.getTranslations(type, id);
        setTranslations(res.data.translations);
    });

    const [videos, setVideos] = useState([]);
    const [fetchVideos, isVideosLoading] = useFetching(async () => {
        const res = await FilmService.getVideos(type, id);
        setVideos(res.data.results);
    });

    const loadings = [
        isDataLoading,
        isCreditsLoading,
        isReviewsLoading,
        isTranslationsLoading,
        isVideosLoading,
    ];

    useEffect(() => {
        fetchData();
        fetchCredits();
        fetchReviews();
        fetchTranslations();
        fetchVideos();
    }, []);

    return { data, credits, loadings, reviews, translations, videos };
};
