import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import styles from './style.module.scss'
import { CirclePropsType } from './types';

export function Circle({items}: CirclePropsType) {

    const circleRef = useRef<HTMLDivElement | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const pointsCount = items.length;

    function handlePointClick(index: number) {
        const angle = (360 / pointsCount) * index;

        gsap.to(circleRef.current, {
            rotation: -angle,
            duration: 2,
            ease: 'power3.out'
        });

        setActiveIndex(index);
    };

    return (
        <div className={styles.circleContainer}>
            <div className={styles.circle} ref={circleRef}>
                {Array.from({length: pointsCount}).map((_, index) => {
                    const angle = (360 / pointsCount) * index - 60; // расчитываем угол расположения активной точки
                    const x = 50 + 50 * Math.cos((angle * Math.PI) / 180);
                    const y = 50 + 50 * Math.sin((angle * Math.PI) / 180);

                    return (
                        <button
                            key={index}
                            className={`${styles.point} ${index === activeIndex ? styles.active : ''}`}
                            style={{
                                left: `${x}%`,
                                top: `${y}%`,
                                transform: 'translate(-50%, -50%)',
                                '--rotation-compensation': `${angle}deg`,
                            } as React.CSSProperties}
                            onClick={() => handlePointClick(index)}
                            aria-label={`Элемент ${index + 1}`}
                        >
                            <span className={styles.pointNumber}>{index + 1}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};