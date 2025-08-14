import { createContext, useContext, useState } from 'react';

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
    const [scrollToId, setScrollToId] = useState(null);

    return (
        <ScrollContext.Provider value={{ scrollToId, setScrollToId }}>
            {children}
        </ScrollContext.Provider>
    );
};
