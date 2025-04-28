import styles from './style.module.scss'
import { SwiperButtonsPropsType } from './types';

export function SwiperButtons({
                                  onPrev,
                                  onNext,
                                  isBeginning,
                                  isEnd,
                                  className = ''
                              }: SwiperButtonsPropsType) {
    return (
        <div className={`${styles.buttonsContainer} ${className}`}>
            <button
                className={`${styles.navButton} ${styles.prevButton} ${isBeginning ? styles.hidden : ''}`}
                onClick={onPrev}
                aria-label='PreviousSlide'
                disabled={isBeginning}
            >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M12 5L7 10L12 15" stroke="#3877EE" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </button>

            <button
                className={`${styles.navButton} ${isEnd ? styles.hidden : ''}`}
                onClick={onNext}
                aria-label="Next slide"
                disabled={isEnd}
            >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M8 5L13 10L8 15" stroke="#3877EE" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </button>
        </div>
    );
};