import React, { useContext, useRef } from 'react';
import styles from './Aside.module.css';
import { AsideContext } from '@/context/AsideContext.jsx';
import { clsx } from 'clsx';
import { useOutsideClick } from '@/hooks/useOutsideClick.js';

const Aside = ({ children }) => {
    const { isAsideOpen, closeAside, asideTriggerRef } =
        useContext(AsideContext);
    const asideRef = useRef(null);

    useOutsideClick([asideRef, asideTriggerRef], [isAsideOpen], () => {
        closeAside();
    });

    return (
        <aside
            ref={asideRef}
            className={clsx(styles.aside, { [styles.open]: isAsideOpen })}
        >
            {children}
        </aside>
    );
};

export default Aside;
