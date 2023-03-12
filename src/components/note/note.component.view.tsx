import { NoteController, NoteOptions } from "./note.component.controller";
import React from "react";
import { TodoController } from "../todo/todo.component.controller";
import { Link } from "react-router-dom";

export const NoteView = <P extends NoteOptions, S>(
  ctrl: NoteController<P, S>,
  props: P
): JSX.Element => (
  <>
    <div
      className={
        "card mb-3 " + (props.completed ? "bg-warning-subtle" : "bg-light")
      }
      data-testid="note"
    >
      <div className="card-body">
        <h5 className="card-title text-center mb">{props.title}</h5>

        <div className="d-flex flex-column">
          {ctrl.innerTodos && ctrl.innerTodos?.length ? (
            ctrl.innerTodos?.map(todo => (
              <TodoController
                key={todo._id}
                checked={todo.checked}
                text={todo.text}
                onChecked={ctrl.checkedHandler(todo)}
              />
            ))
          ) : (
            <>
              <hr className="border border-danger border-2 opacity-75" />

              <h5 className="mb-4 text-center text-success">
                Задач пока нет. Добавьте первую задачу.
              </h5>
            </>
          )}
        </div>

        {ctrl.numberOfRestTodos ? (
          <h5 className="mb-4 text-center text-success">
            ... Ещё осталось задач: {ctrl.numberOfRestTodos}
          </h5>
        ) : undefined}

        <div
          className="d-flex mt-2 flex-wrap justify-content-between
        align-items-center flex-row"
        >
          {props.isOpen && props.to ? (
            <Link
              to={`${props.to}/${props._id}`}
              className="btn btn-success text-decoration-none text-white
              flex-fill m-2"
            >
              Открыть
            </Link>
          ) : undefined}

          <Link
            to={`/edit/${props._id}`}
            className="btn btn-secondary text-decoration-none text-white
            flex-fill m-2"
          >
            Изменить
          </Link>

          <button
            className="btn btn-danger flex-fill m-2"
            onClick={props.onDelete}
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  </>
);
