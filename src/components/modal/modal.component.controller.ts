import { BaseComponent } from "../base/base.component";
import { ModalView } from "./modal.component.view";

export interface ModalOptions {
  show?: boolean;
  title?: string;
  text?: string;
  textOkButton?: string;
  textCancelButton?: string;
  handleClose?: () => void;
  handleSave?: () => void;
  okIsLink?: boolean;
  to?: string;
}

export class ModalController<P extends ModalOptions, S> extends BaseComponent<
  P,
  S
> {
  readonly view = ModalView;

  constructor(props: P, context: S) {
    super(props, context);
  }

  activate() {
    super.activate();
  }

  update(
    nextProps: Readonly<P>,
    nextState: Readonly<S>,
    nextContext: any
  ): boolean {
    if (nextProps.show !== this.props.show) {
      return true;
    }
    return false;
  }

  modalClickHandler = (event: Event) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains("modal")) {
      this.props.handleClose ? this.props.handleClose() : undefined;
    }
    return undefined;
  };
}
