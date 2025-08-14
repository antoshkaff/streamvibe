import React from 'react';
import styles from './AccordionItem.module.css';
import { clsx } from 'clsx';
import Button from '@/components/UI/Button/Button.jsx';
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion';

const AccordionItem = ({
    title,
    content,
    index,
    className,
    isOpen,
    toggleOpen,
}) => {
    return (
        <div
            className={clsx(styles.accordionItem, className)}
            onClick={() => toggleOpen(index)}
        >
            <div className={styles.accordionItem__index}>
                <span>{`${index + 1 < 10 ? `0${index + 1}` : index + 1}`}</span>
            </div>
            <div className={styles.accordionItem__body}>
                <h3 className={styles.accordionItem__title}>{title}</h3>
                <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.p
                            key="content"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2, ease: 'easeInOut' }}
                            className={styles.accordionItem__content}
                        >
                            {content}
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
            <div className={styles.accordionItem__action}>
                <Button variant={'transparent'} size={'lg'}>
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.svg
                            key={isOpen ? 'minus' : 'plus'}
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 90 }}
                            transition={{ duration: 0.1 }}
                            viewBox="0 0 30 31"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d={
                                    isOpen
                                        ? 'M23.75 13.75H6.25C5.91848 13.75 5.60054 13.8817 5.36612 14.1161C5.1317 14.3505 5 14.6685 5 15C5 15.3315 5.1317 15.6495 5.36612 15.8839C5.60054 16.1183 5.91848 16.25 6.25 16.25H23.75C24.0815 16.25 24.3995 16.1183 24.6339 15.8839C24.8683 15.6495 25 15.3315 25 15C25 14.6685 24.8683 14.3505 24.6339 14.1161C24.3995 13.8817 24.0815 13.75 23.75 13.75Z'
                                        : 'M23.75 14.25H16.25V6.75C16.25 6.41848 16.1183 6.10054 15.8839 5.86612C15.6495 5.6317 15.3315 5.5 15 5.5C14.6685 5.5 14.3505 5.6317 14.1161 5.86612C13.8817 6.10054 13.75 6.41848 13.75 6.75V14.25H6.25C5.91848 14.25 5.60054 14.3817 5.36612 14.6161C5.1317 14.8505 5 15.1685 5 15.5C5 15.8315 5.1317 16.1495 5.36612 16.3839C5.60054 16.6183 5.91848 16.75 6.25 16.75H13.75V24.25C13.75 24.5815 13.8817 24.8995 14.1161 25.1339C14.3505 25.3683 14.6685 25.5 15 25.5C15.3315 25.5 15.6495 25.3683 15.8839 25.1339C16.1183 24.8995 16.25 24.5815 16.25 24.25V16.75H23.75C24.0815 16.75 24.3995 16.6183 24.6339 16.3839C24.8683 16.1495 25 15.8315 25 15.5C25 15.1685 24.8683 14.8505 24.6339 14.6161C24.3995 14.3817 24.0815 14.25 23.75 14.25Z'
                                }
                                fill="currentColor"
                            />
                        </motion.svg>
                    </AnimatePresence>
                </Button>
            </div>
        </div>
    );
};

export default AccordionItem;
