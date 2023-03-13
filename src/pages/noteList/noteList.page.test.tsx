import React from "react";
import { render, screen } from "@testing-library/react";
import { NoteListPageController } from "./noteList.page.controller";
import { MemoryRouter } from "react-router-dom";

const renderWithRouter = (component: JSX.Element) =>
  render(<MemoryRouter>{component}</MemoryRouter>);

describe("Note list page without notes in repository", () => {
  it("should render Note list page component", () => {
    renderWithRouter(<NoteListPageController />);
    expect(screen.getAllByRole("heading")[0].textContent).toBe(
      "Список заметок!"
    );
    expect(screen.getAllByRole("heading")[1].textContent).toBe(
      "Заметок пока нет. Добавьте первую заметку."
    );
    expect(screen.getByRole("link").textContent).toBe("Добавить заметку");
  });
});
