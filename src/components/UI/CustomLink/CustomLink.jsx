import React from 'react';
import styles from './CustomLink.module.css';
import { clsx } from 'clsx';

const CustomLink = ({ children, href, variant, className, ...props }) => {
    return (
        <a
            className={clsx(styles.link, styles[variant], className)}
            href={href}
            {...props}
        >
            {children}
        </a>
    );
};

export default CustomLink;
