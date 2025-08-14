import React from 'react';
import styles from './Movies.module.css';
import Container from '@/components/UI/Container/Container.jsx';
import SectionGroup from '@/components/features/SectionGroup/SectionGroup.jsx';
import SectionSlider from '@/components/features/SectionSlider/SectionSlider.jsx';
import MoviesSlider from '@/pages/Movies/components/MoviesSlider/MoviesSlider.jsx';
import { useBreakpoint } from '@/hooks/useBreakpoint.js';
import SectionTabs from '@/components/features/SectionTabs/SectionTabs.jsx';
import { useMovies } from '@/pages/Movies/useMovies.js';
import { generateMovieSliders } from '@/utils/generateMovieSliders.js';
import { generateTvSliders } from '@/utils/generateTvSliders.js';

const Movies = () => {
    const {
        genres,
        genresPopular,
        moviesTrending,
        moviesReleases,
        moviesTopRated,
        tvTrending,
        tvReleases,
        tvTopRated,
    } = useMovies();

    const movieSliders = generateMovieSliders(
        moviesTrending,
        moviesReleases,
        moviesTopRated,
        genres,
        genresPopular,
    );

    const tvSliders = generateTvSliders(
        genres,
        genresPopular,
        tvTrending,
        tvReleases,
        tvTopRated,
    );

    const isMobile = useBreakpoint(768);

    return (
        <main>
            <Container className={styles.pageContent}>
                <MoviesSlider />
                {isMobile ? (
                    <SectionTabs
                        tabs={[
                            {
                                label: 'Movie',
                                component: (
                                    <SectionGroup label="Movies">
                                        {movieSliders.map((slider, index) => (
                                            <SectionSlider
                                                {...slider}
                                                key={index}
                                            />
                                        ))}
                                    </SectionGroup>
                                ),
                            },
                            {
                                label: 'Shows',
                                component: (
                                    <SectionGroup label="Shows">
                                        {tvSliders.map((slider, index) => (
                                            <SectionSlider
                                                {...slider}
                                                key={index}
                                            />
                                        ))}
                                    </SectionGroup>
                                ),
                            },
                        ]}
                    />
                ) : (
                    <>
                        <SectionGroup label="Movies">
                            {movieSliders.map((slider, index) => (
                                <SectionSlider {...slider} key={index} />
                            ))}
                        </SectionGroup>
                        <SectionGroup label="Shows">
                            {tvSliders.map((slider, index) => (
                                <SectionSlider {...slider} key={index} />
                            ))}
                        </SectionGroup>
                    </>
                )}
            </Container>
        </main>
    );
};

export default Movies;
