import React from "react";
import {
  EditNotePageController,
  EditNotePageOptions
} from "./editNote.page.controller";
import { EditNoteController } from "../../components/editNote/editNote.component.controller";

export const EditNotePageView = <P extends EditNotePageOptions, S>(
  ctrl: EditNotePageController<P, S>,
  props: P
): JSX.Element => (
  <>
    <h1 className="text-center mt-3">Изменение заметки!</h1>

    <hr className="border border-dark border-2 opacity-50" />

    <EditNoteController />
  </>
);
