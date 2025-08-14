import React from 'react';
import styles from './ContactUs.module.css';
import SupportForm from '@/pages/Support/components/ContactUs/components/SupportForm/SupportForm.jsx';
import SupportBanner from '@/pages/Support/components/ContactUs/components/SupportBanner/SupportBanner.jsx';

const ContactUs = () => {
    return (
        <section className={styles.container} id="contact-us">
            <SupportBanner />
            <SupportForm />
        </section>
    );
};

export default ContactUs;
