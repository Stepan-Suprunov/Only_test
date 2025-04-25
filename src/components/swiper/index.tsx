import styles from './style.module.scss'
import {Swiper, SwiperSlide} from 'swiper/react';
import {SwiperEventType} from './types'

export function CustomSwiper() {

    const events: SwiperEventType[] = [
        { id: 1, title: 'Событие 1', description: 'Описание события 1' },
        { id: 2, title: 'Событие 2', description: 'Описание события 2' },
        { id: 3, title: 'Событие 3', description: 'Описание события 3' },
    ];

    return (
        <div className={styles.swiperContainer}>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                className={styles.customSwiper}
                >
                {events.map((event) => (
                    <SwiperSlide key={event.id} className={styles.slide}>
                        <h3 className={styles.title}>{event.title}</h3>
                        <p className={styles.description}>{event.description}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};