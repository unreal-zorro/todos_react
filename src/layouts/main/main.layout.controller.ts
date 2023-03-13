import { BaseComponent } from "../../components/base/base.component";
import { MainLayoutView } from "./main.layout.view";

export interface MainLayoutOptions {
  prop1?: string;
}

export class MainLayoutController<
  P extends MainLayoutOptions,
  S
> extends BaseComponent<P, S> {
  readonly view = MainLayoutView;

  constructor(props: P, context: S) {
    super(props, context);
  }
}
