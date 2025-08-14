import React from 'react';
import logoHero from '@/assets/logoHero.svg';
import heroSrc from '@/assets/homeHero.png';
import styles from './Hero.module.css';
import Button from '@/components/UI/Button/Button.jsx';
import Container from '@/components/UI/Container/Container.jsx';
import { useBreakpoint } from '@/hooks/useBreakpoint.js';

const Hero = () => {
    const isMobile = useBreakpoint(768);

    return (
        <section className={styles.heroWrapper}>
            <div className={styles.hero}>
                <img src={logoHero} alt="hero" className={styles.hero__logo} />
                <img src={heroSrc} alt="hero" className={styles.hero__image} />
            </div>
            <Container className={styles.content}>
                <div className={styles.about}>
                    <h2 className="h2Big">The Best Streaming Experience</h2>
                    {isMobile ? (
                        <span className="sub-title--hero">
                            StreamVibe is the best streaming experience for
                            watching your favorite movies and shows on demand,
                            anytime, anywhere.
                        </span>
                    ) : (
                        <span className="sub-title--hero">
                            StreamVibe is the best streaming experience for
                            watching your favorite movies and shows on demand,
                            anytime, anywhere. With StreamVibe, you can enjoy a
                            wide variety of content, including the latest
                            blockbusters, classic movies, popular TV shows, and
                            more. You can also create your own watchlists, so
                            you can easily find the content you want to watch.
                        </span>
                    )}
                </div>
                <Button variant={'accent'} size={'md'}>
                    <svg
                        viewBox="0 0 19 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.75 2.59479C0.75 0.930972 2.53383 -0.123757 3.9917 0.678068L17.4557 8.08328C18.9668 8.91436 18.9668 11.0856 17.4557 11.9167L3.9917 19.3219C2.53383 20.1238 0.75 19.069 0.75 17.4052V2.59479Z"
                            fill="currentColor"
                        />
                    </svg>
                    <span>Start Watching Now</span>
                </Button>
            </Container>
        </section>
    );
};

export default Hero;
