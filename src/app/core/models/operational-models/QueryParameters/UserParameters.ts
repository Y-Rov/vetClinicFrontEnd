import { User } from "../../User";

export interface UserParameters {
    totalCount: number;
    pageSize: number;
    currentPage: number;
    totalPages: number;
    hasNext: boolean;
    hasPrevious:boolean;
    entities: User[];
}