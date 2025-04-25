import styles from './style.module.scss'
import {Swiper as SwiperCore, SwiperSlide} from 'swiper/react';
import {SwiperPropsType} from './types'
import {Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export function Swiper({ items }: SwiperPropsType) {
    return (
        <div className={styles.swiperContainer}>
            <SwiperCore
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={60}
                slidesPerView={3.5}
                watchOverflow={true}
            >
                {items.map((item) => (
                    <SwiperSlide key={item.id} className={styles.slide}>
                        <h3 className={styles.title}>{item.title}</h3>
                        <p className={styles.description}>{item.description}</p>
                    </SwiperSlide>
                ))}
            </SwiperCore>
        </div>
    );
};