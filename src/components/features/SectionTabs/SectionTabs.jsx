import React, { useState } from 'react';
import TabButtonsList from '@/components/features/SectionTabs/components/TabButtonsList/TabButtonsList.jsx';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './SectionTabs.module.css';
import { clsx } from 'clsx';

const SectionTabs = ({ title, subTitle, tabs, isWideButtons, ...props }) => {
    const [activeTab, setActiveTab] = useState(0);

    const toggleTab = (index) => {
        setActiveTab(index);
    };

    return (
        <section className="section" {...props}>
            <header className="section__header">
                <div className="section__description">
                    <h2>{title}</h2>
                    <span className="sub-title">{subTitle}</span>
                </div>
                <div
                    className={clsx(
                        'section__action',
                        isWideButtons && styles.wideButtonsContainer,
                    )}
                >
                    <TabButtonsList
                        labels={tabs.map((tab) => tab.label)}
                        toggleTab={toggleTab}
                        activeTab={activeTab}
                        isWide={isWideButtons}
                    />
                </div>
            </header>
            <div className="section__body">
                <AnimatePresence mode={'wait'} initial={false}>
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0.5, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0.5, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                    >
                        {tabs[activeTab].component}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default SectionTabs;
