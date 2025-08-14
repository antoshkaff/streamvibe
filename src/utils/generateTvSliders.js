export const generateTvSliders = (
    genres,
    genresPopular,
    tvTrending,
    tvReleases,
    tvTopRated,
) => {
    return [
        {
            id: 'categoriesTv',
            title: `Explore our wide variety of categories`,
            items: genres,
            variant: 'genres',
            size: 'sm',
            type: 'genres',
        },
        {
            id: 'popularTv',
            title: `Popular Top 10 In Genres`,
            items: genresPopular,
            variant: 'genres',
            size: 'sm',
            type: 'genres',
        },
        {
            id: 'trendingTv',
            title: `Trending Now`,
            items: tvTrending,
            variant: 'movie',
            size: 'md',
            type: 'tv',
        },
        {
            id: 'releasesTv',
            title: `New Releases`,
            items: tvReleases,
            variant: 'release',
            size: 'md',
            type: 'tv',
        },
        {
            title: `Must - Watch Shows`,
            items: tvTopRated,
            variant: 'movie',
            size: 'lg',
            type: 'tv',
        },
    ];
};
