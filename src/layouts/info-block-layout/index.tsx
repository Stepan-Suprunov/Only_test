import { InfoBlockLayoutPropsType } from './types';
import styles from './style.module.scss'
import React from 'react';

export function InfoBlockLayout({ children }: InfoBlockLayoutPropsType) {
    return (
        <>
            <div className={styles.linesContainer}>
                <div className={styles.horizontalLine}></div>
                <div className={styles.verticalLine}></div>
            </div>
            <div className={styles.infoBlockLayout}>
                {children}
            </div>
        </>
    );
};