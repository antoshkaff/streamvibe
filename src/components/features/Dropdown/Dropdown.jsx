import React, { useRef, useState } from 'react';
import styles from './Dropdown.module.css';
import { useOutsideClick } from '@/hooks/useOutsideClick.js';
import { AnimatePresence, motion } from 'framer-motion';
import { clsx } from 'clsx';

const Dropdown = ({ variant = 'center', children, trigger }) => {
    const [isOpen, setIsOpen] = useState(false);

    const contentRef = useRef(null);
    const triggerRef = useRef(null);

    const button = React.cloneElement(trigger, {
        ref: triggerRef,
        onClick: () => {
            trigger.props.onClick?.();
            setIsOpen((prev) => !prev);
        },
    });

    useOutsideClick([contentRef, triggerRef], [isOpen], () => {
        setIsOpen(false);
    });

    return (
        <div className={styles.dropdown}>
            <div>{button}</div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        ref={contentRef}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className={clsx(
                            styles.dropdownContent,
                            styles[variant],
                        )}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Dropdown;
