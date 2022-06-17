export abstract class ResourceModel<T> {
  public id?: number;

  protected constructor(model?: Partial<T>) {
    if (model) {
      Object.assign(this, model);
    }
  }
}
