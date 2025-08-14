import axios from 'axios';

export default class FilmService {
    static API_KEY = import.meta.env.VITE_TMDB_API;
    static baseUrl = import.meta.env.VITE_TMDB_URL;

    static async getNowPlaying(type = 'movie') {
        const res = await axios.get(`${this.baseUrl}/${type}/now_playing`, {
            headers: {
                Authorization: `Bearer ${this.API_KEY}`,
            },
            params: {
                language: 'en',
                page: 1,
            },
        });

        return res;
    }

    static async getPopular(type = 'movie') {
        const res = await axios.get(`${this.baseUrl}/${type}/popular`, {
            headers: {
                Authorization: `Bearer ${this.API_KEY}`,
            },
            params: {
                language: 'en',
                page: 1,
            },
        });

        return res;
    }

    static async getRealizes(type = 'movie') {
        const urls = {
            movie: `${this.baseUrl}/movie/upcoming`,
            tv: `${this.baseUrl}/tv/airing_today`,
        };

        const res = await axios.get(urls[type], {
            headers: {
                Authorization: `Bearer ${this.API_KEY}`,
            },
            params: {
                language: 'en',
                page: 1,
            },
        });

        return res;
    }

    static async getTopRated(type = 'movie') {
        const res = await axios.get(`${this.baseUrl}/${type}/top_rated`, {
            headers: {
                Authorization: `Bearer ${this.API_KEY}`,
            },
            params: {
                language: 'en',
                page: 1,
            },
        });

        return res;
    }

    static async get(type = 'movie', id) {
        const res = await axios.get(`${this.baseUrl}/${type}/${id}`, {
            headers: {
                Authorization: `Bearer ${this.API_KEY}`,
            },
            params: {
                language: 'en',
                page: 1,
            },
        });

        return res;
    }

    static async getGenres() {
        const res = await axios.get(`${this.baseUrl}/genre/movie/list`, {
            headers: {
                Authorization: `Bearer ${this.API_KEY}`,
            },
            params: {
                language: 'en',
                page: 1,
            },
        });

        return res;
    }

    static async getCast(type = 'movie', id) {
        const res = await axios.get(`${this.baseUrl}/${type}/${id}/credits`, {
            headers: {
                Authorization: `Bearer ${this.API_KEY}`,
            },
            params: {
                language: 'en',
                page: 1,
            },
        });

        return res;
    }

    static async getReviews(type = 'movie', id) {
        const res = await axios.get(`${this.baseUrl}/${type}/${id}/reviews`, {
            headers: {
                Authorization: `Bearer ${this.API_KEY}`,
            },
            params: {
                language: 'en',
                page: 1,
            },
        });

        return res;
    }

    static async getTranslations(type = 'movie', id) {
        const res = await axios.get(
            `${this.baseUrl}/${type}/${id}/translations`,
            {
                headers: {
                    Authorization: `Bearer ${this.API_KEY}`,
                },
                params: {
                    language: 'en',
                    page: 1,
                },
            },
        );

        return res;
    }

    static async getEpisodes(id, seasonNumber) {
        const res = await axios.get(
            `${this.baseUrl}/tv/${id}/season/${seasonNumber}`,
            {
                headers: {
                    Authorization: `Bearer ${this.API_KEY}`,
                },
                params: {
                    language: 'en',
                    page: 1,
                },
            },
        );

        return res;
    }

    static async getVideos(type, id) {
        const res = await axios.get(`${this.baseUrl}/${type}/${id}/videos`, {
            headers: {
                Authorization: `Bearer ${this.API_KEY}`,
            },
            params: {
                language: 'en',
            },
        });

        return res;
    }

    static async getByGenre(
        type,
        id,
        page = 1,
        { yearFrom, yearTo, ratingFrom, ratingTo } = {},
    ) {
        const res = await axios.get(`${this.baseUrl}/discover/${type}`, {
            headers: {
                Authorization: `Bearer ${this.API_KEY}`,
            },
            params: {
                language: 'en',
                with_genres: id,
                page: page,
                ...(yearFrom && {
                    'primary_release_date.gte': `${yearFrom}-01-01`,
                }),
                ...(yearTo && {
                    'primary_release_date.lte': `${yearTo}-12-31`,
                }),
                ...(ratingFrom && { 'vote_average.gte': ratingFrom }),
                ...(ratingTo && { 'vote_average.lte': ratingTo }),
            },
        });

        return res;
    }

    static async search(query, page = 1) {
        const res = await axios.get(`${this.baseUrl}/search/movie`, {
            headers: {
                Authorization: `Bearer ${this.API_KEY}`,
            },
            params: {
                language: 'en',
                query: query,
                page: page,
            },
        });

        return res;
    }
}
