import {Article} from "../../Article";

export interface ArticleParameters{
  totalCount: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious:boolean;
  entities: Article[];
}
