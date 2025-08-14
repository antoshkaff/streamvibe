import React from 'react';
import styles from './Container.module.css';
import { clsx } from 'clsx';

const Container = ({ children, className }) => {
    return <div className={clsx(styles.container, className)}>{children}</div>;
};

export default Container;
