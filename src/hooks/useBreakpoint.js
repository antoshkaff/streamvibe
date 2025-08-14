import { useEffect, useState } from 'react';

export const useBreakpoint = (value) => {
    const [isBreakpoint, setIsBreakpoint] = useState(false);

    useEffect(() => {
        const checkIsBreakpoint = () => {
            if (window.innerWidth < value) {
                setIsBreakpoint(true);
            } else {
                setIsBreakpoint(false);
            }
        };

        checkIsBreakpoint();

        window.addEventListener('resize', checkIsBreakpoint);
        return () => window.removeEventListener('resize', checkIsBreakpoint);
    }, []);

    return isBreakpoint;
};
