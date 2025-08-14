import React, { useState } from 'react';
import Button from '@/components/UI/Button/Button.jsx';
import InputRange from '@/components/UI/InputRange/InputRange.jsx';
import FilterOption from '@/components/features/Filters/components/FilterOption/FilterOption.jsx';
import styles from './Filters.module.css';

const Filters = ({ onSubmit }) => {
    const initialState = {
        yearFrom: 1900,
        yearTo: 2025,
        ratingFrom: 0,
        ratingTo: 10,
    };

    const [filter, setFilter] = useState(initialState);

    const handleChange = (event) => {
        const input = event.target;
        setFilter((prev) => ({ ...prev, [input.name]: input.value }));
    };

    return (
        <div className={styles.filterContainer}>
            <div className={styles.filters}>
                <FilterOption title={'Year'}>
                    <InputRange
                        label="From"
                        name={'yearFrom'}
                        value={filter.yearFrom}
                        min={1900}
                        max={2025}
                        onChange={handleChange}
                    />
                    <InputRange
                        label="To"
                        name={'yearTo'}
                        value={filter.yearTo}
                        min={1900}
                        max={2025}
                        onChange={handleChange}
                    />
                </FilterOption>
                <FilterOption title={'Rating'}>
                    <InputRange
                        label="From"
                        name={'ratingFrom'}
                        value={filter.ratingFrom}
                        min={0}
                        max={10}
                        onChange={handleChange}
                    />
                    <InputRange
                        label="To"
                        name={'ratingTo'}
                        value={filter.ratingTo}
                        min={0}
                        max={10}
                        onChange={handleChange}
                    />
                </FilterOption>
            </div>
            <div className={styles.actions}>
                <Button
                    variant={'transparent'}
                    size={'md'}
                    onClick={() => {
                        setFilter(initialState);
                        onSubmit(initialState);
                    }}
                >
                    <svg
                        fill="currentColor"
                        viewBox="0 0 1920 1920"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M960 0v213.333c411.627 0 746.667 334.934 746.667 746.667S1371.627 1706.667 960 1706.667 213.333 1371.733 213.333 960c0-197.013 78.4-382.507 213.334-520.747v254.08H640V106.667H53.333V320h191.04C88.64 494.08 0 720.96 0 960c0 529.28 430.613 960 960 960s960-430.72 960-960S1489.387 0 960 0"
                            fillRule="evenodd"
                        />
                    </svg>
                </Button>
                <Button
                    variant={'accent'}
                    className={styles.accentButton}
                    onClick={() => onSubmit(filter)}
                >
                    Search
                </Button>
            </div>
        </div>
    );
};

export default Filters;
