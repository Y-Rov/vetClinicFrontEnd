export interface Exception {
    id: number;
    name: string | null;
    dateTime: Date | null;
    stackTrace: string | null;
    path: string | null;
}