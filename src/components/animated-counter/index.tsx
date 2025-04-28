import styles from './style.module.scss'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { AnimatedCounterPropsType } from './types';

export function AnimatedCounter({ dates }: AnimatedCounterPropsType) {
    const numberRefs = [useRef(null), useRef(null)];

    useEffect(() => {
        gsap.to(numberRefs[0].current, {
            innerText: dates[0],
            duration: 1,
            snap: { innerText: 1 },
            modifiers: {
                innerText: function(innerText) {
                    return Math.floor(innerText);
                }
            }
        });

        gsap.to(numberRefs[1].current, {
            innerText: dates[1],
            duration: 1,
            snap: { innerText: 1 },
            modifiers: {
                innerText: function(innerText) {
                    return Math.floor(innerText);
                }
            }
        });
    }, [dates]);

    return (
        <div className={styles.counterContainer}>
            <div ref={numberRefs[0]} className={styles.startDate}>{dates[0]}</div>
            <div ref={numberRefs[1]} className={styles.endDate}>{dates[1]}</div>
        </div>
    );
};