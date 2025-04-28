export type CirclePointPropstype = {
    key: number;
    index: number;
    activeIndex: number;
    pointsCount: number;
    onClick: (index: number) => void;
}