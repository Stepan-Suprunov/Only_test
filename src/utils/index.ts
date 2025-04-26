export function formatDateToYear(dateString: string): number {
    return new Date(dateString).getFullYear();
};