import React, { useState } from 'react';
import { gsap } from 'gsap';
import styles from './style.module.scss'
import { CirclePropsType } from './types';
import { AnimatedCounter, CircleButtons, Swiper } from '../index';
import { getMinMaxYears } from '../../utils';

export function Circle({ items }: CirclePropsType) {

    const [activeIndex, setActiveIndex] = useState(0);
    const pointsCount = items.length;

    function rotateCircle(index: number) {
        const angle = (360 / pointsCount) * index;

        gsap.to(`.${styles.circle}`, {
            rotation: -angle,
            duration: .4,
            ease: 'none'
        });

        gsap.to(`.${styles.pointNumber}`, {
            rotation: angle,
            duration: .6,
            ease: 'none'
        });
    };

    function handleNext() {
        setActiveIndex(prev => {
            const newIndex = prev === pointsCount - 1 ? prev : prev + 1;
            rotateCircle(newIndex);
            return newIndex;
        });
    };

    function handlePrev() {
        setActiveIndex(prev => {
            const newIndex = prev === 0 ? prev : prev - 1;
            rotateCircle(newIndex);
            return newIndex;
        });
    };

    function handlePointClick(index: number) {
        rotateCircle(index);
        setActiveIndex(index);
    };

    return (
        <>
            <div className={styles.circleContainer}>
                <AnimatedCounter dates={getMinMaxYears(items[activeIndex])}/>
                <CircleButtons
                    onNext={handleNext}
                    onPrev={handlePrev}
                    currentIndex={activeIndex}
                    totalCount={pointsCount}
                />
                <div className={styles.circle}>
                    {Array.from({length: pointsCount}).map((_, index) => {
                            const angle = (360 / pointsCount) * index - 60;
                            const x = 50 + 50 * Math.cos((angle * Math.PI) / 180);
                            const y = 50 + 50 * Math.sin((angle * Math.PI) / 180);

                            return (
                                <button
                                    key={index}
                                    className={`${styles.point} ${index === activeIndex ? styles.active : ''}`}
                                    style={{
                                        left: `${x}%`,
                                        top: `${y}%`,
                                    } as React.CSSProperties}
                                    onClick={() => handlePointClick(index)}
                                    aria-label={`Элемент ${index + 1}`}
                                >
                                    <span className={styles.pointNumber}>
                                        {index + 1}
                                    </span>
                                </button>
                            )
                        }
                    )}
                </div>
            </div>
            <Swiper items={items[activeIndex]}/>
        </>
    );
};