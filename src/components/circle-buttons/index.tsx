import { CircleButtonsPropsType } from './types';
import styles from './style.module.scss'

export function CircleButtons({ onNext, onPrev, currentIndex, totalCount }: CircleButtonsPropsType) {
    return (
        <div className={styles.buttonsContainer}>
            <div className={styles.counter}>
                {currentIndex + 1} / {totalCount}
            </div>
            <div className={styles.buttonsWrapper}>
                <button
                    onClick={onPrev}
                    className={`${styles.button} ${currentIndex === 0 ? styles.nonActive : ''}`}
                    aria-label='Previous point'
                >
                    <svg width="25" height="25" viewBox="0 0 20 20" fill="none">
                        <path d="M12 5L7 10L12 15" stroke="#42567A" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </button>
                <button
                    onClick={onNext}
                    className={`${styles.button} ${currentIndex === totalCount - 1 ? styles.nonActive : ''}`}
                    aria-label='Previous point'
                >
                    <svg width="25" height="25" viewBox="0 0 20 20" fill="none">
                        <path d="M8 5L13 10L8 15" stroke="#42567A" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};