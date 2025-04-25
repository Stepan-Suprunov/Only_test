import React, {useEffect, useRef} from "react";
import {gsap} from 'gsap';
import styles from './style.module.scss'

export function Circle() {

    const circleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (circleRef.current) {
            gsap.to(circleRef.current, {
                rotation: 360,
                duration: 5,
                repeat: -1
            });
        }
    }, []);

    return (
            <div ref={circleRef} className={styles.circle}

            >
                {[1, 2, 3, 4].map((item, index) => (
                    <div
                        key={index}
                        className={styles.circlePoint}
                        style={{
                            transform: `rotate(${90 * index}deg) translate(150px) rotate(-${90 * index}deg)`
                        }}
                    />
                ))}
            </div>
    );
};