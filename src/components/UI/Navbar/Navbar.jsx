import React from 'react';
import { NavLink } from 'react-router';
import styles from './Navbar.module.css';
import { clsx } from 'clsx';

const Navbar = ({ variant = 'header', className }) => {
    const rootClassNames = clsx(styles.nav, styles[variant], className);

    return (
        <nav className={rootClassNames}>
            <ul className={styles.nav__list}>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? `${styles.nav__link} ${styles.active}`
                                : styles.nav__link
                        }
                        end
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/movies"
                        className={({ isActive }) =>
                            isActive
                                ? `${styles.nav__link} ${styles.active}`
                                : styles.nav__link
                        }
                    >
                        Movies
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/subscriptions"
                        className={({ isActive }) =>
                            isActive
                                ? `${styles.nav__link} ${styles.active}`
                                : styles.nav__link
                        }
                    >
                        Subscriptions
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/support"
                        className={({ isActive }) =>
                            isActive
                                ? `${styles.nav__link} ${styles.active}`
                                : styles.nav__link
                        }
                    >
                        Support
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
