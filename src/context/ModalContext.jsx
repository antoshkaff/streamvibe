import { createContext, useCallback, useState } from 'react';
import Modal from '@/components/features/Modal/Modal.jsx';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState({});

    const openModal = useCallback(({ title, body }) => {
        setIsOpen(true);
        setContent(() => ({ title, body }));
    }, []);

    const closeModal = () => {
        setIsOpen(false);
        setContent({});
    };

    return (
        <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
            {children}
            <Modal title={content.title} body={content.body} />
        </ModalContext.Provider>
    );
};
