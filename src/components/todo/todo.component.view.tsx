import React from "react";
import { TodoOptions } from "./todo.component.controller";
import { TodoController } from "./todo.component.controller";

export const TodoView = <P extends TodoOptions, S>(
  ctrl: TodoController<P, S>,
  props: P
): JSX.Element => (
  <>
    <div
      className={
        "card mb-2 w-100 " + (props.checked ? "bg-success bg-opacity-25" : "")
      }
      data-testid="todo"
    >
      <div
        className="card-text d-flex justify-content-start align-items-center
      m-1 ms-3 me-3"
      >
        <input
          className="form-check me-3"
          type="checkbox"
          checked={props.checked}
          onChange={props.onChecked}
        />
        <p className="text-break mb-0">{props.text}</p>
      </div>
    </div>
  </>
);
