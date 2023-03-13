import React from "react";
import {
  NewNotePageController,
  NewNotePageOptions
} from "./newNote.page.controller";
import { EditNoteController } from "../../components/editNote/editNote.component.controller";

export const NewNotePageView = <P extends NewNotePageOptions, S>(
  ctrl: NewNotePageController<P, S>,
  props: P
): JSX.Element => (
  <>
    <h1 className="text-center mt-3">Создание заметки!</h1>

    <hr className="border border-dark border-2 opacity-50" />

    <EditNoteController />
  </>
);
