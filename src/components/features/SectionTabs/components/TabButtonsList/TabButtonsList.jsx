import React from 'react';
import styles from './TabButtonsList.module.css';
import TabButton from '@/components/features/SectionTabs/components/TabButton/TabButton.jsx';
import { clsx } from 'clsx';

const TabButtonsList = ({ labels, toggleTab, activeTab, isWide }) => {
    return (
        <ul className={clsx(styles.list, isWide && styles.wide)}>
            {labels.map((label, index) => (
                <li key={index}>
                    <TabButton
                        onClick={() => toggleTab(index)}
                        isActive={index === activeTab}
                    >
                        {label}
                    </TabButton>
                </li>
            ))}
        </ul>
    );
};

export default TabButtonsList;
