import React, {useEffect, useRef} from "react";
import {gsap} from 'gsap';
import styles from './style.module.scss'
import { CirclePropsType } from './types';

export function Circle({pointsCount}: CirclePropsType) {

    const circleRef = useRef<HTMLDivElement>(null);
    const validatedCount = Math.min(Math.max(pointsCount, 2), 6);

    useEffect(() => {
        if (circleRef.current) {
            gsap.to(circleRef.current, {
                rotation: 360,
                duration: 3,
                repeat: -1,
            });
        }
    }, []);

    return (
        <div className={styles.circle} ref={circleRef}>
            {Array.from({ length: validatedCount }).map((_, index) => {
                const angle = (360 / validatedCount) * index - 90; // -90° чтобы начать сверху
                const x = 50 + 50 * Math.cos((angle * Math.PI) / 180);
                const y = 50 + 50 * Math.sin((angle * Math.PI) / 180);

                return (
                    <div
                        key={index}
                        className={styles.point}
                        style={{
                            left: `${x}%`,
                            top: `${y}%`,
                            transform: 'translate(-50%, -50%)',
                        }}
                    />
                );
            })}
        </div>
    );
};