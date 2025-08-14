import React, { useId } from 'react';
import styles from './Checkbox.module.css';

const Checkbox = ({ label, onChange, ...props }) => {
    const id = useId();

    return (
        <div className={styles.checkboxWrapper}>
            <input
                type="checkbox"
                id={id}
                onChange={onChange}
                className={styles.input}
                {...props}
            />
            <label htmlFor={id} className={styles.label}>
                <span className={styles.customBox} aria-hidden="true" />
                {label}
            </label>
        </div>
    );
};

export default Checkbox;
