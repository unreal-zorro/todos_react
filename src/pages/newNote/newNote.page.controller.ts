import { BaseComponent } from "../../components/base/base.component";
import { NewNotePageView } from "./newNote.page.view";

export interface NewNotePageOptions {
  param1?: string;
}

export class NewNotePageController<
  P extends NewNotePageOptions,
  S
> extends BaseComponent<P, S> {
  readonly view = NewNotePageView;

  constructor(props: P, context: S) {
    super(props, context);
  }
}
