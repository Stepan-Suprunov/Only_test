import { InfoBlockPropsType } from './types';
import { Circle, Swiper } from '../index';
import React from 'react';
import { InfoBlockLayout } from '../../layouts/index';
import { sliceEvents } from '../../utils';

export function InfoBlock({ events }: InfoBlockPropsType) {

    return (
        <InfoBlockLayout>
            <Circle items={sliceEvents(events, 6)}/>
        </InfoBlockLayout>
    );
};