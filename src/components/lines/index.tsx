import styles from './style.module.scss';
import React from 'react';

export function Lines() {
    return (
        <div className={styles.linesContainer}>
            <div className={styles.horizontalLine}></div>
            <div className={styles.verticalLine}></div>
        </div>
    );
};