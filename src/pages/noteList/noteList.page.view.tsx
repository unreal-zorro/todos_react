import React from "react";
import {
  NoteListPageController,
  NoteListPageOptions
} from "./noteList.page.controller";
import { NoteController } from "../../components/note/note.component.controller";
import { Link } from "react-router-dom";
import { ModalController } from "../../components/modal/modal.component.controller";

export const NoteListPageView = <P extends NoteListPageOptions, S>(
  ctrl: NoteListPageController<P, S>,
  props: P
): JSX.Element => (
  <>
    <h1 className="text-center mt-3">Список заметок!</h1>

    <hr className="border border-dark border-2 opacity-50" />

    {ctrl.notes && ctrl.notes?.length ? (
      <></>
    ) : (
      <h2 className="mb-4 text-center text-warning">
        Заметок пока нет. Добавьте первую заметку.
      </h2>
    )}

    <div className="d-flex w-100 justify-content-center">
      <Link
        to="/new"
        className="btn btn-success mb-3 text-decoration-none text-white"
      >
        Добавить заметку
      </Link>
    </div>

    {ctrl.notes && ctrl.notes?.length
      ? ctrl.notes.map((note, index) => (
          <NoteController
            key={note._id}
            _id={note._id}
            title={note.title}
            todos={note.todos}
            completed={
              note.todos?.length && ctrl.completed
                ? ctrl.completed[index]
                : false
            }
            onDelete={() => ctrl.handleDelete(note._id)}
            isOpen={true}
            to="/notes"
          />
        ))
      : undefined}

    <ModalController {...ctrl.modalDialog} />
  </>
);
