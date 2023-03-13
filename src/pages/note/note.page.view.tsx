import React from "react";
import { NotePageController, NotePageOptions } from "./note.page.controller";
import { NoteController } from "../../components/note/note.component.controller";
import { ModalController } from "../../components/modal/modal.component.controller";

export const NotePageView = <P extends NotePageOptions, S>(
  ctrl: NotePageController<P, S>,
  props: P
): JSX.Element => (
  <>
    <h1 className="text-center mt-3">Просмотр заметки!</h1>

    <hr className="border border-dark border-2 opacity-50" />

    {ctrl.note ? (
      <NoteController
        key={ctrl.note._id}
        _id={ctrl.note._id}
        title={ctrl.note.title}
        todos={ctrl.note.todos}
        completed={ctrl.completed}
        handleDelete={() => ctrl.handleDelete()}
      />
    ) : (
      <h5 className="mb-2 text-center text-danger">
        Данной заметки не существует!!!
      </h5>
    )}

    <ModalController {...ctrl.modalDialog} />
  </>
);
