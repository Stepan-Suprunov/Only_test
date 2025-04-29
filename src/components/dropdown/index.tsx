import React, { useEffect, useRef, useState } from 'react';
import { DropdownPropsType } from './types';
import styles from './style.module.scss'
import { IEvent } from '../../data/types';

export function Dropdown({ items, onSelect }: DropdownPropsType) {

    const [selectedCategory, setSelectedCategory] = useState('literature');
    const [visible, setVisible] = useState(false);
    const prevItemsRef = useRef<any[]>([null]);

    function arraysEqual(a: IEvent[], b: IEvent[]) {
        if (a === b) return true;
        if (a.length !== b.length) return false;
        return a.every((val, i) => val === b[i]);
    }

    const categories = [
        { value: 'literature', label: 'Литература' },
        { value: 'science', label: 'Наука' },
        { value: 'cinema', label: 'Кино' },
        { value: 'theatre', label: 'Театр' },
        { value: 'politics', label: 'Политика' },
        { value: 'fashion', label: 'Мода' },
    ];

    useEffect(() => {
        if (prevItemsRef.current && !arraysEqual(prevItemsRef.current, items)) {
            setVisible(false);
            const timer = setTimeout(() => setVisible(true), 200);
            return () => clearTimeout(timer);
        }
        prevItemsRef.current = items;
    }, [items]);

    useEffect(() => {
        if (selectedCategory && visible) {
            const filteredItems = items.filter(item => item.uri.includes(selectedCategory));
            onSelect(filteredItems);
        }
    }, [selectedCategory, items, visible]);

    const handleCategoryChange = (value: string) => {
        setSelectedCategory(value);
    };

    return (
        <div className={styles.dropdownWrapper}>
            <div className={`${styles.dropdown} ${!visible ? styles.hidden : ''}`}>
                <div className={styles.select}>
                    {categories.find(c => c.value === selectedCategory)?.label}
                </div>

                <div className={styles.options}>
                    {categories.map((category, index) => (
                        <div
                            key={category.value}
                            className={styles.option}
                            onClick={() => handleCategoryChange(category.value)}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            {category.label}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};