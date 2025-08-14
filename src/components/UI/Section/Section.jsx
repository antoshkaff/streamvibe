import React from 'react';

const Section = ({ children, title, subTitle, action, ...props }) => {
    return (
        <section className="section" {...props}>
            <header className="section__header">
                <div className="section__description">
                    <h2>{title}</h2>
                    <span className="sub-title">{subTitle}</span>
                </div>
                <div className="section__action">{action}</div>
            </header>
            <div className="section__body">{children}</div>
        </section>
    );
};

export default Section;
