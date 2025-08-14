import React, { useEffect, useState } from 'react';
import Container from '@/components/UI/Container/Container.jsx';
import Hero from '@/pages/Home/components/Hero/Hero.jsx';
import styles from './Home.module.css';
import Section from '@/components/UI/Section/Section.jsx';
import SectionSlider from '@/components/features/SectionSlider/SectionSlider.jsx';
import DevicesList from '@/pages/Home/components/Devices/DevicesList.jsx';
import SectionTabs from '@/components/features/SectionTabs/SectionTabs.jsx';
import PlanList from '@/components/features/PlanList/PlanList.jsx';
import FAQ from '@/components/sections/FAQ/FAQ.jsx';
import { useFetching } from '@/hooks/useFetching.js';
import FilmService from '@/services/FilmService.js';
import { formatGenresToSlider } from '@/utils/formatResToSlider.js';
import SectionSliderSkeleton from '@/components/features/SectionSlider/SectionSliderSkeleton/SectionSliderSkeleton.jsx';

const Home = () => {
    const [genres, setGenres] = useState([]);

    const [fetchGenres, isLoading] = useFetching(async () => {
        const res = await FilmService.getGenres();
        setGenres(formatGenresToSlider(res.data.genres));
    });

    useEffect(() => {
        fetchGenres();
    }, []);

    return (
        <main>
            <Hero />
            <Container className={styles.pageContent}>
                {isLoading ? (
                    <SectionSliderSkeleton />
                ) : (
                    <SectionSlider
                        title={`Explore our wide variety of categories`}
                        subTitle={`Whether you're looking for a comedy to make you laugh, a
                        drama to make you think, or a documentary to learn
                        something new`}
                        items={genres}
                        variant={'genres'}
                        size={'sm'}
                        id={'categories'}
                        type={'genres'}
                    />
                )}

                <Section
                    title={`We Provide you streaming experience across various devices.`}
                    subTitle={`With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.`}
                    id="devices"
                >
                    <DevicesList />
                </Section>

                <FAQ />

                <SectionTabs
                    title={`Choose the plan that's right for you`}
                    subTitle={`Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!`}
                    tabs={[
                        {
                            label: 'Monthly',
                            component: <PlanList variant={'monthly'} />,
                        },
                        {
                            label: 'Yearly',
                            component: <PlanList variant={'yearly'} />,
                        },
                    ]}
                    id={'pricing'}
                />
            </Container>
        </main>
    );
};

export default Home;
