import { TodoView } from "./todo.component.view";
import { BaseComponent } from "../base/base.component";

export interface TodoOptions {
  checked?: boolean;
  text?: string;
  onChecked?: () => boolean;
}

export class TodoController<P extends TodoOptions, S> extends BaseComponent<
  P,
  S
> {
  readonly view = TodoView;

  constructor(props: P, context: S) {
    super(props, context);
  }
}
