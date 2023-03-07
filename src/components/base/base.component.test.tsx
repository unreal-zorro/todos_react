// import React from "react";
// import { render, unmountComponentAtNode } from "react-dom";
// import { act } from "react-dom/test-utils";
//
// import { BaseComponent } from "./base.component";
//
// let container: Element | null = null;
// beforeEach(() => {
//   // подготавливаем DOM-элемент, куда будем рендерить
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });
//
// afterEach(() => {
//   // подчищаем после завершения
//   if (container) {
//     unmountComponentAtNode(container);
//     container.remove();
//     container = null;
//   }
// });
//
// it("should contain render Base component", () => {
//   act(() => {
//     render(<BaseComponent />, container);
//   });
//   expect(container).toBeTruthy();
// });

import React from "react";
import { render, screen } from "@testing-library/react";

import { BaseComponent } from "./base.component";

test("renders base component", () => {
  render(<BaseComponent />);
  expect(screen).toBeTruthy();
});
