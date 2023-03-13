import { BaseComponent } from "../../components/base/base.component";
import { EditNotePageView } from "./editNote.page.view";

export interface EditNotePageOptions {
  param1?: string;
}

export class EditNotePageController<
  P extends EditNotePageOptions,
  S
> extends BaseComponent<P, S> {
  readonly view = EditNotePageView;

  constructor(props: P, context: S) {
    super(props, context);
  }
}
