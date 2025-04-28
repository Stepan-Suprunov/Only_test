import React from 'react';
import styles from './style.module.scss'
import { CirclePointPropstype } from './types';

export function CirclePoint({ index, activeIndex, pointsCount, onClick }: CirclePointPropstype) {

    const angle = (360 / pointsCount) * index - 60;
    const x = 50 + 50 * Math.cos((angle * Math.PI) / 180);
    const y = 50 + 50 * Math.sin((angle * Math.PI) / 180);

    return (
        <button
            className={`${styles.point} ${index === activeIndex ? styles.active : ''}`}
            style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: 'translate(-50%, -50%)',
                '--rotation-compensation': `${angle}deg`,
            } as React.CSSProperties}
            onClick={() => onClick(index)}
            aria-label={`Элемент ${index + 1}`}
        >
            <span className={styles.pointNumber}>{index + 1}</span>
        </button>
    );
}