import { IEvent } from '../../data/types'

export type InfoBlockPropsType = {
    events: IEvent[];
    segmentsCount: 2|3|4|5|6;
};