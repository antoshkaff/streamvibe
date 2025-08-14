import { useLocation } from 'react-router';
import { useContext, useLayoutEffect } from 'react';
import { ScrollContext } from '@/context/ScrollContext.jsx';

export const useRouteScroll = () => {
    const location = useLocation();
    const { scrollToId, setScrollToId } = useContext(ScrollContext);

    useLayoutEffect(() => {
        if (!scrollToId) {
            window.scrollTo({
                top: 0,
            });
        }

        const frame = requestAnimationFrame(() => {
            const el = document.getElementById(scrollToId);

            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                setScrollToId(null);
            }
        });

        return () => cancelAnimationFrame(frame);
    }, [location]);
};
