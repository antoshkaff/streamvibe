import actionSrc from '@/assets/genres/action.png';
import adventureSrc from '@/assets/genres/adventure.png';
import comedySrc from '@/assets/genres/comedy.png';
import dramaSrc from '@/assets/genres/drama.png';
import horrorSrc from '@/assets/genres/horror.png';
import { TMDB_IMG } from '@/constants/constants.js';

const images = [actionSrc, adventureSrc, comedySrc, dramaSrc, horrorSrc];

export const formatResToSlider = (data) => {
    return data.map((d) => {
        return {
            id: d?.id,
            first_air_date: d?.first_air_date,
            release_date: d?.release_date,
            vote_average: d?.vote_average,
            vote_count: d?.vote_count,
            src: `${TMDB_IMG}/w342${d?.poster_path}`,
        };
    });
};

export const formatGenresToSlider = (data) => {
    return data.map((d) => {
        return {
            id: d.id,
            title: d.name,
            src: images[Math.floor(Math.random() * images.length)],
        };
    });
};
