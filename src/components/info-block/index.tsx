import { InfoBlockPropsType } from './types';
import { Circle, Swiper } from '../index';
import React from 'react';
import { InfoBlockLayout } from '../../layouts/index';

export function InfoBlock({ events }: InfoBlockPropsType) {
    return (
        <InfoBlockLayout>
            <Circle items={[123,34235,34254,2354253,45,435532]}/>
            <Swiper items={events}/>
        </InfoBlockLayout>
    );
};