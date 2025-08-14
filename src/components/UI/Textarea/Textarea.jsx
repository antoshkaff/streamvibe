import React, { useId } from 'react';
import { clsx } from 'clsx';
import styles from './Textarea.module.css';

const Textarea = ({ label, value, onChange, className, ...props }) => {
    const id = useId();

    return (
        <div className={clsx(styles.textareaContainer, className)}>
            {label && (
                <label className={styles.label} htmlFor={id}>
                    {label}
                </label>
            )}
            <textarea
                className={styles.textarea}
                id={id}
                value={value}
                onChange={onChange}
                {...props}
            />
        </div>
    );
};

export default Textarea;
