import React, { useEffect, useId, useRef } from 'react';
import { clsx } from 'clsx';
import styles from './InputRange.module.css';

const InputRange = ({
    label,
    value,
    onChange,
    className,
    min,
    max,
    ...props
}) => {
    const id = useId();
    const rangeRef = useRef(null);
    const labelRef = useRef(null);

    useEffect(() => {
        const range = rangeRef.current;
        const thumbSize = 16;
        const trackWidth = range.clientWidth - thumbSize;

        const percent = (value - min) / (max - min);
        const offset = percent * trackWidth + thumbSize / 2;

        labelRef.current.style.transform = `translateX(${offset}px) translateX(-50%)`;
    }, [value]);

    return (
        <div className={clsx(styles.container, className)}>
            {label && (
                <label className={styles.label} htmlFor={id}>
                    {label}
                </label>
            )}
            <div className={styles.inputContainer}>
                <span ref={labelRef} className={styles.rangeLabel}>
                    {value}
                </span>
                <input
                    ref={rangeRef}
                    className={styles.input}
                    id={id}
                    value={value}
                    onInput={onChange}
                    min={min}
                    max={max}
                    type="range"
                    {...props}
                />
            </div>
        </div>
    );
};

export default InputRange;
