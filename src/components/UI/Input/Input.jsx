import React, { useId } from 'react';
import styles from './Input.module.css';
import { clsx } from 'clsx';

const Input = ({ label, value, onChange, className, ...props }) => {
    const id = useId();

    return (
        <div className={clsx(styles.inputContainer, className)}>
            {label && (
                <label className={styles.label} htmlFor={id}>
                    {label}
                </label>
            )}
            <input
                className={styles.input}
                id={id}
                value={value}
                onChange={onChange}
                {...props}
            />
        </div>
    );
};

export default Input;
