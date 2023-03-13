import React from "react";
import { render, screen } from "@testing-library/react";
import { NotePageController } from "./note.page.controller";

describe("Note page without notes in repository", () => {
  it("should render Note page component", () => {
    render(<NotePageController />);
    expect(screen.getAllByRole("heading")[0].textContent).toBe(
      "Просмотр заметки!"
    );
    expect(screen.getAllByRole("heading")[1].textContent).toBe(
      "Данной заметки не существует!!!"
    );
  });
});
