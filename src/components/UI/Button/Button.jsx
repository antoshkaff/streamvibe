import React from 'react';
import styles from './Button.module.css';
import { clsx } from 'clsx';

const Button = React.forwardRef(
    ({ children, variant, size, className, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={clsx(
                    styles.button,
                    styles[variant],
                    styles[size],
                    className,
                )}
                {...props}
            >
                {children}
            </button>
        );
    },
);

export default Button;
