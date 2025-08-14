import { createContext, useRef, useState } from 'react';

export const AsideContext = createContext();

export const AsideProvider = ({ children }) => {
    const [isAsideOpen, setIsAsideOpen] = useState(false);
    const asideTriggerRef = useRef(null);
    const openAside = () => setIsAsideOpen(true);
    const closeAside = () => setIsAsideOpen(false);
    const toggleAside = () => setIsAsideOpen((prev) => !prev);

    return (
        <AsideContext.Provider
            value={{
                isAsideOpen,
                openAside,
                closeAside,
                toggleAside,
                asideTriggerRef,
            }}
        >
            {children}
        </AsideContext.Provider>
    );
};
