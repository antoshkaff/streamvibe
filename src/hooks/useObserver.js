import { useEffect } from 'react';

export const useObserver = (loaderRef, canLoad, callback) => {
    useEffect(() => {
        if (!canLoad) return;

        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
                callback();
            }
        });

        const currentLoader = loaderRef.current;
        if (currentLoader) {
            observer.observe(currentLoader);
        }

        return () => {
            if (currentLoader) {
                observer.unobserve(currentLoader);
            }
        };
    }, [canLoad, loaderRef.current]);
};
