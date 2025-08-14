import React from 'react';
import styles from './NothingHere.module.css';
import sadSrc from '@/assets/misc/sad.svg';
import { clsx } from 'clsx';

const NothingHere = ({ className, text = 'Nothing here...', size }) => {
    return (
        <div className={clsx(styles.container, styles[size], className)}>
            <img className={styles.image} src={sadSrc} alt="Sad smile" />
            <span>{text}</span>
        </div>
    );
};

export default NothingHere;
