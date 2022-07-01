import {ResourceModel} from "./ResourceModel";

export class Article extends ResourceModel<Article>{
  title?: string;
  body?: string;
  createdAt?: Date;
  authorId?: number;
  authorName?: string;
  published?: boolean;
  edited?: boolean;

  constructor(model?: Partial<Article>) {
    super(model);
  }
}
