import React, { useState } from 'react';
import styles from './Accordion.module.css';
import AccordionItem from '@/components/features/Accordion/components/AccordionItem/AccordionItem.jsx';

const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState([]);

    const toggleOpen = (itemIndex) => {
        if (openIndex.includes(itemIndex)) {
            setOpenIndex(openIndex.filter((index) => index !== itemIndex));
            return;
        }

        setOpenIndex((prev) => [...prev, itemIndex]);
    };

    return (
        <div>
            <ul className={styles.accordion__list}>
                {items.map(({ title, content }, index) => (
                    <li key={index} className={styles.accordion__item}>
                        <AccordionItem
                            title={title}
                            content={content}
                            index={index}
                            isOpen={openIndex.includes(index)}
                            toggleOpen={toggleOpen}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Accordion;
