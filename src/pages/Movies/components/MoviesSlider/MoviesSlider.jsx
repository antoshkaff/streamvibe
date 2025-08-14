import React, { useEffect, useRef, useState } from 'react';
import FilmService from '@/services/FilmService.js';
import { useFetching } from '@/hooks/useFetching.js';
import styles from './MoviesSlider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import MovieHeroItem from '@/pages/Movies/components/MoviesSlider/MovieHeroItem/MovieHeroItem.jsx';
import Pagination from '@/components/features/SectionSlider/components/Pagination/Pagination.jsx';
import { Autoplay } from 'swiper/modules';
import MoviesSliderSkeleton from '@/pages/Movies/components/MoviesSlider/MoviesSliderSkeleton/MoviesSliderSkeleton.jsx';
import { TMDB_IMG } from '@/constants/constants.js';
import { useNavigate } from 'react-router';

const MoviesSlider = () => {
    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(1);
    const sliderRef = useRef(null);

    const [fetching, isLoading] = useFetching(async () => {
        const res = await FilmService.getNowPlaying();
        setMovies(res.data.results);
    });

    useEffect(() => {
        fetching();
    }, []);

    return isLoading ? (
        <MoviesSliderSkeleton />
    ) : (
        <section className={styles.section}>
            <Swiper
                ref={sliderRef}
                modules={[Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                speed={600}
                spaceBetween={20}
                centerInsufficientSlides={true}
                slidesPerView={slidesPerView}
                className={styles.slider__body}
                onSlideChange={(swiper) => {
                    setActiveIndex(
                        Math.ceil(swiper.activeIndex / slidesPerView),
                    );
                }}
            >
                {movies.map((item, index) => (
                    <SwiperSlide key={index}>
                        <MovieHeroItem
                            backdrop_path={`${TMDB_IMG}/original/${item?.backdrop_path}`}
                            title={item?.original_title}
                            overview={item?.overview}
                            onClick={() => navigate(`/movies/${item.id}`)}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <Pagination
                className={styles.pagination}
                activeIndex={activeIndex}
                totalPages={movies.length}
                ref={sliderRef}
                variant={'transparent'}
            />
        </section>
    );
};

export default MoviesSlider;
