import React from "react";
import { render, screen } from "@testing-library/react";
import { NewNotePageController } from "./newNote.page.controller";

describe("New note page without notes in repository", () => {
  it("should render New note page component", () => {
    render(<NewNotePageController />);
    expect(screen.getAllByRole("heading")[0].textContent).toBe(
      "Создание заметки!"
    );
    expect(screen.getAllByRole("heading")[1].textContent).toBe(
      "Данной заметки не существует!!!"
    );
  });
});
