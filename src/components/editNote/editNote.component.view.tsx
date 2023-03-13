import React from "react";
import {
  EditNoteController,
  EditNoteOptions
} from "./editNote.component.controller";
import { ModalController } from "../modal/modal.component.controller";

export const EditNoteView = <P extends EditNoteOptions, S>(
  ctrl: EditNoteController<P, S>,
  props: P
): JSX.Element => (
  <>
    {(ctrl.EditMatch && ctrl.note) || ctrl.NewMatch ? (
      <div
        className={
          "card mb-3 " + (ctrl.completed ? "bg-warning-subtle" : "bg-light")
        }
      >
        <div className="card-body">
          <>
            <label className="w-100 text-center mb-2 h5" htmlFor="noteTitle">
              Заголовок заметки:
            </label>

            <div className="card mb-2 w-100">
              <div
                contentEditable="true"
                className="form-control text-center"
                id="noteTitle"
                onInput={event => ctrl.handleChangeTitle(event)}
                onBlur={event => ctrl.handleBlurTitle(event)}
                suppressContentEditableWarning={true}
              >
                {ctrl.note?.title}
              </div>
            </div>

            <hr className="border border-danger border-2 opacity-75" />

            {ctrl.note && ctrl.note?.todos && ctrl.note?.todos?.length ? (
              <div className="d-flex flex-column">
                {ctrl.note?.todos?.map(todo => (
                  <div
                    key={todo._id}
                    className={
                      "card mb-2 w-100 " +
                      (todo.checked ? "bg-success bg-opacity-25" : "")
                    }
                  >
                    <div className="card-text d-flex justify-content-center align-items-center m-1 ms-3 me-3">
                      <input
                        className="form-check me-3"
                        type="checkbox"
                        checked={todo.checked}
                        onChange={() => ctrl.handleCheckedToDo(todo._id)}
                      />
                      <div
                        contentEditable="true"
                        className="form-control text-break"
                        onInput={event =>
                          ctrl.handleChangeToDoText(todo._id, event)
                        }
                        onBlur={event =>
                          ctrl.handleBlurToDoText(todo._id, event)
                        }
                        suppressContentEditableWarning={true}
                      >
                        {todo.text}
                      </div>
                      <input
                        className="btn-close ms-3"
                        type="button"
                        onClick={() => ctrl.handleDeleteToDo(todo._id)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <h5 className="mb-2 text-center text-success">
                Задач пока нет. Добавьте первую задачу.
              </h5>
            )}

            <div
              className="d-flex w-100 justify-content-around
             align-items-center flex-wrap"
            >
              <button
                className="btn btn-primary m-2"
                onClick={ctrl.handleAddToDo}
              >
                Добавить задачу
              </button>

              <button
                className="btn btn-success m-2"
                onClick={ctrl.handleUndo}
                disabled={ctrl.undoSteps <= 0}
              >
                <div className="bi-arrow-left-circle">
                  <span>&nbsp;</span>
                  <span>Отменить {ctrl.undoSteps}</span>
                </div>
              </button>

              <button
                className="btn btn-warning m-2"
                onClick={ctrl.handleRedo}
                disabled={ctrl.redoSteps <= 0}
              >
                <div className="bi-arrow-right-circle">
                  <span>&nbsp;</span>
                  <span>Повторить {ctrl.redoSteps}</span>
                </div>
              </button>
            </div>

            <hr className="border border-danger border-2 opacity-75" />

            <div className="d-flex flex-wrap justify-content-between align-items-center flex-row">
              <button
                className="btn btn-secondary flex-fill m-2"
                onClick={ctrl.handleSave}
              >
                Сохранить изменения
              </button>
              <a
                href="#"
                className="btn btn-danger flex-fill m-2"
                onClick={ctrl.handleCancel}
              >
                Отменить изменения
              </a>
            </div>
          </>
        </div>
      </div>
    ) : (
      <h5 className="mb-2 text-center text-danger">
        Данной заметки не существует!!!
      </h5>
    )}

    <ModalController {...ctrl.modalDialog} />
  </>
);
