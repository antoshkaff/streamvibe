import React from 'react';
import SimpleBar from 'simplebar-react';
import styles from './Scrollbar.module.css';
import { clsx } from 'clsx';

const Scrollbar = ({
    className,
    children,
    autoHide = true,
    scrollY = true,
    scrollX = false,
    ...props
}) => {
    return (
        <SimpleBar
            className={clsx(
                styles.scrollbar,
                scrollX && styles.scrollX,
                scrollY && styles.scrollY,
                className,
            )}
            autoHide={autoHide}
            {...props}
        >
            {children}
        </SimpleBar>
    );
};

export default Scrollbar;
