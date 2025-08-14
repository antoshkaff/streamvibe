import React from 'react';
import styles from './TabButton.module.css';
import { clsx } from 'clsx';

const TabButton = ({ children, onClick, isActive }) => {
    return (
        <button
            className={clsx(styles.button, isActive && styles.active)}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default TabButton;
