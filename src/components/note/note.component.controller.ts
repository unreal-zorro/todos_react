import { BaseComponent } from "../base/base.component";
import { NoteView } from "./note.component.view";
import { TodoDTO } from "../../models/DTOEntities/todoDTO/todo.DTO";

export interface NoteOptions {
  _id?: string;
  title?: string;
  todos?: TodoDTO[];
  completed?: boolean;
  onDelete?: () => void;
  isOpen?: boolean;
  to?: string;
}

export class NoteController<P extends NoteOptions, S> extends BaseComponent<
  P,
  S
> {
  innerTodos: TodoDTO[] | void = void 0;
  numberOfRestTodos = 0;

  readonly view = NoteView;

  constructor(props: P, context: S) {
    super(props, context);
  }

  activate() {
    super.activate();
    if (this.props?.todos && this.props?.todos?.length) {
      this.innerTodos = this.props?.todos;

      if (this.props?.isOpen && this.props?.todos?.length > 3) {
        this.numberOfRestTodos = this.props?.todos?.length - 3;
        this.innerTodos.splice(3, this.props?.todos?.length - 3);
      }
    }

    this.forceUpdate();
  }

  checkedHandler = (todo: TodoDTO) => () => !todo.checked;
}
