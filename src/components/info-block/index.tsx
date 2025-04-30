import { InfoBlockPropsType } from './types';
import {AnimatedCounter, CircleButtons, Dropdown, Lines, Swiper, Title} from '../index';
import React, { useState } from 'react';
import { getMinMaxYears, sliceEvents } from '../../utils';
import { IEvent } from '../../data/types';
import { gsap } from 'gsap';
import styles from './style.module.scss';

export function InfoBlock({events, segmentsCount}: InfoBlockPropsType) {

    const [items, setItems] = useState(sliceEvents(events, segmentsCount));
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [filteredEvents, setFilteredEvents] = useState<IEvent[]>([]);
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
        <div className={styles.infoBlockWrapper}>
            <Lines/>
            <div className={styles.infoBlockLayout}>
                <div className={styles.circleContainer}>
                    <Title title={'Исторические даты'}/>
                    <Dropdown items={items[activeIndex]} onSelect={setFilteredEvents}/>
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
                <Swiper items={filteredEvents}/>
            </div>
        </div>
    );
};