import React, { useContext } from 'react';
import styles from './Header.module.css';
import Navbar from '@/components/UI/Navbar/Navbar.jsx';
import Logo from '@/components/UI/Logo/Logo.jsx';
import BurgerButton from '@/components/features/BurgerButton/BurgerButton.jsx';
import { AsideContext } from '@/context/AsideContext.jsx';
import HeaderActions from '@/components/UI/HeaderActions/HeaderActions.jsx';

const Header = () => {
    const { toggleAside, asideTriggerRef } = useContext(AsideContext);

    return (
        <header className={styles.header}>
            <Logo />
            <Navbar className={styles.header__nav} />
            <BurgerButton ref={asideTriggerRef} onClick={toggleAside} />
            <HeaderActions className={styles.header__actions} />
        </header>
    );
};

export default Header;
