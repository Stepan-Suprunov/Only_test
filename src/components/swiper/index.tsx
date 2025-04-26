import styles from './style.module.scss'
import { Swiper as SwiperCore, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';
import { SwiperPropsType } from './types'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { formatDateToYear } from '../../utils';
import { useState } from 'react';
import { SwiperButtons } from './swiper-buttons';

export function Swiper({items}: SwiperPropsType) {

    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    return (
            <div className={styles.swiperContainer}>
                <SwiperCore
                    modules={[Navigation]}
                    spaceBetween={60}
                    slidesPerView={3.5}
                    onSwiper={(swiper) => {
                        setSwiperInstance(swiper);
                        setIsBeginning(swiper.isBeginning);
                        setIsEnd(swiper.isEnd);
                    }}
                    onSlideChange={(swiper) => {
                        setIsBeginning(swiper.isBeginning);
                        setIsEnd(swiper.isEnd);
                    }}
                >
                    {items.map((item) => (
                        <SwiperSlide key={item.id} className={styles.slide}>
                            <h3 className={styles.year}>{formatDateToYear(item.eventDate)}</h3>
                            <p className={styles.description}>{item.summary}</p>
                        </SwiperSlide>
                    ))}
                </SwiperCore>
                <SwiperButtons
                    onPrev={() => swiperInstance?.slidePrev()}
                    onNext={() => swiperInstance?.slideNext()}
                    isBeginning={isBeginning}
                    isEnd={isEnd}
                    className={styles.buttonsWrapper}
                />
            </div>
    );
};