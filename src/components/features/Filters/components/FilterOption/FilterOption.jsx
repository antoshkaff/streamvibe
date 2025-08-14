import React from 'react';
import Button from '@/components/UI/Button/Button.jsx';
import Dropdown from '@/components/features/Dropdown/Dropdown.jsx';
import { clsx } from 'clsx';
import styles from './FilterOption.module.css';

const FilterOption = ({ title, children, className }) => {
    return (
        <Dropdown
            trigger={
                <Button
                    variant={'secondary'}
                    size={'sm'}
                    className={clsx(styles.button, className)}
                >
                    <span>{title}</span>
                </Button>
            }
            variant={'start'}
        >
            <div className={styles.container}>{children}</div>
        </Dropdown>
    );
};

export default FilterOption;
