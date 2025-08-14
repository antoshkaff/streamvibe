import React from 'react';
import SmartLink from '@/components/features/SmartLink/SmartLink.jsx';

const FooterNavigationList = ({
    title,
    titleStyles,
    listStyles,
    containerStyles,
    items,
}) => {
    return (
        <div className={containerStyles}>
            <h3 className={titleStyles}>{title}</h3>
            <ul className={listStyles}>
                {items.map((item, index) => (
                    <li key={index}>
                        <SmartLink path={item.link}>{item.name}</SmartLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterNavigationList;
