export interface Exception {
    id: number;
    name: string | null;
    dateTime: Date | null;
    stacktrace: string | null;
    path: string | null;
}