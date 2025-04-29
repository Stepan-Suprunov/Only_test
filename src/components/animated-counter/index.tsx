import styles from './style.module.scss'
import React, {useEffect, useRef, useState} from 'react';
import { gsap } from 'gsap';
import { AnimatedCounterPropsType } from './types';

export function AnimatedCounter({ dates }: AnimatedCounterPropsType) {

    const prevDates: [number,number] = [0, 0];

    useEffect(() => {
        gsap.to(`.${styles.startDate}`, {
            innerText: dates[0],
            duration: .5,
            snap: { innerText: 1 },
            modifiers: {
                innerText: function(innerText) {
                    return Math.floor(innerText);
                }
            }
        });

        gsap.to(`.${styles.endDate}`, {
            innerText: dates[1],
            duration: .5,
            snap: { innerText: 1 },
            modifiers: {
                innerText: function(innerText) {
                    return Math.floor(innerText);
                }
            }
        });

        return (() => {
            prevDates[dates[0], dates[1]]
        });
    }, [dates]);

    return (
        <div className={styles.counterContainer}>
            <div className={styles.startDate}>{prevDates[0]}</div>
            <div className={styles.endDate}>{prevDates[1]}</div>
        </div>
    );
};