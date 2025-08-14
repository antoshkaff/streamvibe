import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { ScrollContext } from '@/context/ScrollContext.jsx';
import CustomLink from '@/components/UI/CustomLink/CustomLink.jsx';
import styles from './SmartLink.module.css';

const SmartLink = ({ path, children, variant, ...props }) => {
    const navigate = useNavigate();
    const { setScrollToId } = useContext(ScrollContext);

    if (!path.includes('#')) {
        console.warn(`Missing '#' for link ${path}`);
        return;
    }

    const [route, scrollTo] = path.split('#');

    const handleClick = (event) => {
        event.preventDefault();
        setScrollToId(scrollTo);
        navigate(route);
    };

    return (
        <CustomLink
            href={path}
            onClick={handleClick}
            className={styles[variant]}
            {...props}
        >
            {children}
        </CustomLink>
    );
};

export default SmartLink;
