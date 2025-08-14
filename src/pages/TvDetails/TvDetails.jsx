import React, { useContext } from 'react';
import Container from '@/components/UI/Container/Container.jsx';
import { useParams } from 'react-router';
import styles from './TvDetails.module.css';
import MovieHeroItem from '@/pages/Movies/components/MoviesSlider/MovieHeroItem/MovieHeroItem.jsx';
import DescriptionWidget from '@/components/features/widgets/DescriptionWidget/DescriptionWidget.jsx';
import CastWidget from '@/components/features/widgets/CastWidget/CastWidget.jsx';
import { useDetails } from '@/hooks/useDetails.js';
import ReviewsWidget from '@/components/features/widgets/ReviewsWidget/ReviewsWidget.jsx';
import InformationWidget from '@/components/features/widgets/InformationWidget/InformationWidget.jsx';
import { TMDB_IMG } from '@/constants/constants.js';
import MovieDetailsSkeleton from '@/pages/MovieDetails/MovieDetailsSkeleton/MovieDetailsSkeleton.jsx';
import SeasonsWidget from '@/components/features/widgets/SeasonsWidget/SeasonsWidget.jsx';
import { ModalContext } from '@/context/ModalContext.jsx';

const TvDetails = () => {
    const params = useParams();

    const { data, credits, reviews, translations, loadings, videos } =
        useDetails('tv', params.id);
    const isLoading = loadings.includes(true);
    const { openModal } = useContext(ModalContext);

    const trailer = videos.find(
        (video) =>
            video.name.toLowerCase().includes('trailer') &&
            video.site.toLowerCase() === 'youtube',
    );

    const handlePlayNow = () => {
        openModal({
            title: `${data?.original_name} trailer`,
            body: (
                <div className={styles.trailer}>
                    <iframe
                        src={`https://www.youtube.com/embed/${trailer?.key}`}
                        title="Movie Trailer"
                        frameBorder="0"
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            ),
        });
    };

    return isLoading ? (
        <Container className={styles.pageContent}>
            <MovieDetailsSkeleton />
        </Container>
    ) : (
        <main>
            <Container className={styles.pageContent}>
                <section className={styles.hero}>
                    <MovieHeroItem
                        title={data.original_name}
                        overview={data.overview}
                        backdrop_path={`${TMDB_IMG}/original/${data.backdrop_path}`}
                        onClick={handlePlayNow}
                    />
                </section>
                <section className={styles.content}>
                    <SeasonsWidget
                        className={styles.seasons}
                        items={data.seasons}
                        tvId={data.id}
                    />
                    <DescriptionWidget
                        className={styles.description}
                        content={data.overview}
                    />
                    <CastWidget className={styles.cast} items={credits.cast} />
                    <ReviewsWidget className={styles.reviews} items={reviews} />
                    <InformationWidget
                        className={styles.information}
                        data={{
                            ...data,
                            translations: [...translations],
                            crew: credits.crew,
                        }}
                    />
                </section>
            </Container>
        </main>
    );
};

export default TvDetails;
