import React, { useContext, useRef } from 'react';
import styles from './Modal.module.css';
import { ModalContext } from '@/context/ModalContext.jsx';
import Button from '@/components/UI/Button/Button.jsx';
import { useOutsideClick } from '@/hooks/useOutsideClick.js';
import { AnimatePresence, motion } from 'framer-motion';

const Modal = ({ title, body }) => {
    const { isOpen, closeModal } = useContext(ModalContext);

    const modalRef = useRef();
    useOutsideClick([modalRef], [isOpen], closeModal);

    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 },
    };

    const modalVariants = {
        hidden: { opacity: 0, y: -50, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: -50, scale: 0.95 },
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className={styles.modalContainer}
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <motion.div
                        className={styles.modal}
                        ref={modalRef}
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                    >
                        <div className={styles.modal__header}>
                            <h2>{title}</h2>
                            <Button
                                className={styles.closeButton}
                                variant={'transparent'}
                                size={'lg'}
                                onClick={closeModal}
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M19 5L4.99998 19M5.00001 5L19 19"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </Button>
                        </div>
                        <div>{body}</div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
