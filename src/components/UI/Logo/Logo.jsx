import React from 'react';
import logoSrc from '@/assets/logo.svg';
import { NavLink } from 'react-router';
import styles from './Logo.module.css';
import { clsx } from 'clsx';

const Logo = ({ className }) => {
    const rootClassNames = [styles.logo, className].join(' ');

    return (
        <NavLink to={'/'} className={clsx(styles.logoWrapper, className)}>
            <img src={logoSrc} alt="Logo" className={clsx(styles.logo)} />
        </NavLink>
    );
};

export default Logo;
