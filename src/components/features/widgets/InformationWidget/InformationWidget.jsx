import React from 'react';
import { clsx } from 'clsx';
import sharedStyles from '@/components/features/widgets/widgetShared.module.css';
import styles from './InformationWidget.module.css';
import calendar from '@/assets/information/calendar.svg';
import languages from '@/assets/information/languages.svg';
import star from '@/assets/information/star.svg';
import genres from '@/assets/information/genres.svg';
import InformationSection from '@/components/features/widgets/InformationWidget/components/InformationSection/InformationSection.jsx';
import { formatDate } from '@/utils/formatDate.js';
import Rating from '@/components/UI/Rating/Rating.jsx';
import { TMDB_IMG } from '@/constants/constants.js';
import NothingHere from '@/components/UI/NothingHere/NothingHere.jsx';

const InformationWidget = ({ data, className }) => {
    const director = data.crew?.find((member) => member.job === 'Director');
    const music = data.crew?.find(
        (member) => member.job === 'Original Music Composer',
    );

    return (
        <section
            className={clsx(sharedStyles.widget, styles.widget, className)}
        >
            <InformationSection title={'Released Year'} icon={calendar}>
                <span className={styles.date}>
                    {formatDate(data?.release_date) ??
                        formatDate(data?.first_air_date)}
                </span>
            </InformationSection>
            <InformationSection title={'Available Languages'} icon={languages}>
                {data.translations?.map(
                    (translation, index) =>
                        translation.name && (
                            <span
                                key={`${translation.iso_3166_1}-${index}`}
                                className={styles.label}
                            >
                                {translation.name}
                            </span>
                        ),
                )}
            </InformationSection>
            <InformationSection title={'Ratings'} icon={star}>
                <Rating data={data?.vote_average} label={'TMDB'} />
                <Rating data={Math.random() * 10} label={'StreamVibe'} />
            </InformationSection>
            <InformationSection title={'Genres'} icon={genres}>
                {data.genres?.map((genre) => (
                    <span key={genre.id} className={styles.label}>
                        {genre.name}
                    </span>
                ))}
            </InformationSection>
            <InformationSection title={'Director'}>
                {director ? (
                    <div className={styles.member}>
                        {!!director?.profile_path && (
                            <div className={styles.memberImageWrapper}>
                                <img
                                    className={styles.memberImage}
                                    src={`${TMDB_IMG}/w185/${director?.profile_path}`}
                                    alt={director?.name}
                                />
                            </div>
                        )}
                        <div className={styles.memberContent}>
                            <span className={styles.memberName}>
                                {director?.name}
                            </span>
                            <span className={styles.memberDepartment}>
                                {director?.department}
                            </span>
                        </div>
                    </div>
                ) : (
                    <div className={styles.member}>
                        <NothingHere size={'sm'} />
                    </div>
                )}
            </InformationSection>
            <InformationSection title={'Music'}>
                {music ? (
                    <div className={styles.member}>
                        {!!music?.profile_path && (
                            <div className={styles.memberImageWrapper}>
                                <img
                                    className={styles.memberImage}
                                    src={`${TMDB_IMG}/w185/${music?.profile_path}`}
                                    alt={music?.name}
                                />
                            </div>
                        )}
                        <div className={styles.memberContent}>
                            <span className={styles.memberName}>
                                {music?.name}
                            </span>
                            <span className={styles.memberDepartment}>
                                {music?.department}
                            </span>
                        </div>
                    </div>
                ) : (
                    <div className={styles.member}>
                        <NothingHere size={'sm'} />
                    </div>
                )}
            </InformationSection>
        </section>
    );
};

export default InformationWidget;
