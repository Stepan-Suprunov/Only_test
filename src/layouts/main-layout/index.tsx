import React from 'react';
import styles from './style.module.scss'
import { MainLayoutPropsType } from './types';

export function MainLayout({ children }: MainLayoutPropsType) {
    return (
        <div className={styles.mainLayout}>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};