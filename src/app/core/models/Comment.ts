import {ResourceModel} from "./ResourceModel";

export class Comment extends ResourceModel<Comment>{
  authorId?: number;
  authorName?: string;
  createdAt?: Date;
  content?: string;
  edited?: boolean;
  articleId?: number;

  constructor(model?: Partial<Comment>) {
    super(model);
  }
}
