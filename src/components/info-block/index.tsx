import { InfoBlockPropsType } from './types';
import { Circle, Swiper } from '../index';
import React from 'react';
import { InfoBlockLayout } from '../../layouts/index';

export function InfoBlock({ events }: InfoBlockPropsType) {
    return (
        <InfoBlockLayout>
            <Circle pointsCount={6}/>
            <Swiper items={events}/>
        </InfoBlockLayout>
    );
};