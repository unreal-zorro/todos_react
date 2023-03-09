import { BaseComponent } from "../base/base.component";
import { NavbarView } from "./navbar.component.view";

export interface NavbarOptions {
  prop1?: string;
}

export class NavbarController<P extends NavbarOptions, S> extends BaseComponent<
  P,
  S
> {
  height = 0;

  readonly view = NavbarView;

  constructor(props: P, context: S) {
    super(props, context);
  }

  activate() {
    super.activate();

    const navbar = document.querySelector("#navbar");
    if (navbar) {
      this.height = navbar.clientHeight;
      this.forceUpdate();
    }
  }
}
