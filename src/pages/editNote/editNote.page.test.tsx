import React from "react";
import { render, screen } from "@testing-library/react";
import { EditNotePageController } from "./editNote.page.controller";

describe("Edit note page without notes in repository", () => {
  it("should render Edit note page component", () => {
    render(<EditNotePageController />);
    expect(screen.getAllByRole("heading")[0].textContent).toBe(
      "Изменение заметки!"
    );
    expect(screen.getAllByRole("heading")[1].textContent).toBe(
      "Данной заметки не существует!!!"
    );
  });
});
