import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import styles from './style.module.scss'
import { CirclePropsType } from './types';
import { CircleButtons, CirclePoint, Swiper } from '../index';

export function Circle({items}: CirclePropsType) {

    const circleRef = useRef<HTMLDivElement | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const pointsCount = items.length;

    function rotateCircle(index: number) {
        const angle = (360 / pointsCount) * index;

        gsap.to(circleRef.current, {
            rotation: -angle,
            duration: 2,
            ease: 'power3.out'
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
            <CircleButtons
                onNext={handleNext}
                onPrev={handlePrev}
                currentIndex={activeIndex}
                totalCount={pointsCount}
            />
            <div className={styles.circle} ref={circleRef}>
                {Array.from({length: pointsCount}).map((_, index) => (
                    <CirclePoint
                        index={index}
                        activeIndex={activeIndex}
                        pointsCount={pointsCount}
                        onClick={handlePointClick}
                    />
                ))}
            </div>
        </div>
            <Swiper items={items[activeIndex]}/>
        </>
    );
};