import { IEvent } from '../../data/types';

export type DropdownPropsType = {
    items: IEvent[];
    onSelect: (filteredItems: IEvent[]) => void;
};