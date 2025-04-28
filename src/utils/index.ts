import { IEvent } from "../data/types";

export function formatDateToYear(dateString: string): number {
    return new Date(dateString).getFullYear();
};

export function sliceEvents(data: IEvent[], slicesCount: 2|3|4|5|6) {
    const sortedData = [...data].sort((a, b) => {
        const yearA = formatDateToYear(a.eventDate);
        const yearB = formatDateToYear(b.eventDate);
        return yearA - yearB;
    });

    const chunkSize = Math.ceil(sortedData.length / slicesCount);
    const result: Array<Array<any>> = [];

    for (let i = 0; i < slicesCount; i++) {
        const start = i * chunkSize;
        const end = start + chunkSize;
        const chunk = sortedData.slice(start, end);
        if (chunk.length > 0) {
            result.push(chunk);
        }
    }

    return result;
};