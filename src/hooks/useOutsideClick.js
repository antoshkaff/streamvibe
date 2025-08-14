import { useEffect } from 'react';

export const useOutsideClick = (refs, deps, handler) => {
    useEffect(() => {
        const handleClick = (event) => {
            const isInside = refs.some((ref) =>
                ref.current?.contains(event.target),
            );

            if (!isInside) {
                handler();
            }
        };

        document.addEventListener('mousedown', handleClick);

        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, deps);
};
