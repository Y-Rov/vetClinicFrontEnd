export interface ExceptionParametersWithList{
    totalCount: number;
    pageSize: number;
    currentPage: number;
    totalPages: number;
    hasNext: boolean;
    hasPrevious:boolean;
    exceptionList:[];
}