import React from "react";

export class BaseComponent<P, S> extends React.Component<P, S> {
  view?: (ctrl: this, props: P) => JSX.Element;

  constructor(props: P, context: S) {
    super(props, context);
  }

  componentDidMount(): void {
    this.activate && this.activate();
  }

  shouldComponentUpdate(
    nextProps: Readonly<P>,
    nextState: Readonly<S>,
    nextContext: any
  ): boolean {
    return this.update(nextProps, nextState, nextContext);
  }

  componentWillUnmount(): void {
    this.dispose();
  }

  activate(): void {
    return undefined;
  }

  update(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any) {
    return false;
  }

  dispose(): void {
    return undefined;
  }

  render(): React.ReactElement<object> {
    try {
      if (this.view) {
        return this.view(this, this.props);
      } else {
        const text = "Представление не определено";
        return <div>{text}</div>;
      }
    } catch (e) {
      const text = `В этом компоненте произошла ошибка: ${e}`;
      return <div style={{ color: "red" }}>{text}</div>;
    }
  }
}
