import React, { useRef, useState } from 'react';
import styles from './SearchInput.module.css';
import Button from '@/components/UI/Button/Button.jsx';
import { clsx } from 'clsx';
import { CSSTransition } from 'react-transition-group';
import { useOutsideClick } from '@/hooks/useOutsideClick.js';
import { useNavigate } from 'react-router';

const SearchInput = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [query, setQuery] = useState('');

    const inputRef = useRef(null);
    const buttonRef = useRef(null);
    const navigate = useNavigate();

    const handleClick = (event) => {
        if (!isExpanded) {
            event.preventDefault();
            setIsExpanded(true);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsExpanded(false);
        navigate(`search?query=${encodeURIComponent(query)}`);
    };

    useOutsideClick([inputRef, buttonRef], [isExpanded], () => {
        setIsExpanded(false);
    });

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <CSSTransition
                in={isExpanded}
                nodeRef={inputRef}
                timeout={200}
                unmountOnExit
                classNames={{
                    enter: styles.inputEnter,
                    enterActive: styles.inputEnterActive,
                    exit: styles.inputExit,
                    exitActive: styles.inputExitActive,
                }}
                onEntered={() => {
                    inputRef.current.focus();
                }}
            >
                <input
                    ref={inputRef}
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    type="text"
                    className={styles.input}
                    placeholder={'Search'}
                />
            </CSSTransition>

            <Button
                ref={buttonRef}
                variant={'transparent'}
                size={'lg'}
                onClick={handleClick}
                type={isExpanded ? 'submit' : 'button'}
            >
                <svg
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M26.75 26.75L19.388 19.388M19.388 19.388C21.3108 17.4653 22.5 14.809 22.5 11.875C22.5 6.00697 17.743 1.25 11.875 1.25C6.00697 1.25 1.25 6.00697 1.25 11.875C1.25 17.743 6.00697 22.5 11.875 22.5C14.809 22.5 17.4653 21.3108 19.388 19.388Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </Button>
        </form>
    );
};

export default SearchInput;
