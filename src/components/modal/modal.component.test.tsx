import React from "react";
import { render, screen } from "@testing-library/react";
import { ModalController } from "./modal.component.controller";
import { ModalDialogModel } from "../../models/viewModel/modalDialogModel/modalDialog.model";

const modalDialog = new ModalDialogModel();

modalDialog.show = true;
modalDialog.title = "Подтвердите отмену изменений";
modalDialog.text = "Вы точно хотите отменить изменения в данной заметке?";
modalDialog.textOkButton = "Отменить";
modalDialog.textCancelButton = "Нет, не отменять";
modalDialog.handleSave = () => undefined;
modalDialog.okIsLink = false;
modalDialog.to = "";

beforeAll(() => {
  render(
    <ModalController
      show={modalDialog.show}
      title={modalDialog.title}
      text={modalDialog.text}
      textOkButton={modalDialog.textOkButton}
      textCancelButton={modalDialog.textCancelButton}
      handleClose={modalDialog.handleClose}
      handleSave={modalDialog.handleSave}
      okIsLink={modalDialog.okIsLink}
      to={modalDialog.to}
    />
  );
});

test("render modal title", () => {
  const title = screen.getByText(modalDialog.title);
  expect(title).toBeInTheDocument();
});
