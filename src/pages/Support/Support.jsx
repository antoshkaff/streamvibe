import React from 'react';
import Container from '@/components/UI/Container/Container.jsx';
import styles from './Support.module.css';
import FAQ from '@/components/sections/FAQ/FAQ.jsx';
import ContactUs from '@/pages/Support/components/ContactUs/ContactUs.jsx';

const Support = () => {
    return (
        <main>
            <Container className={styles.pageContent}>
                <ContactUs />
                <FAQ />
            </Container>
        </main>
    );
};

export default Support;
