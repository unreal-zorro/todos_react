import React from "react";
import { render, screen } from "@testing-library/react";
import { EditNoteController } from "./editNote.component.controller";
import { MemoryRouter } from "react-router-dom";

const renderWithRouter = (component: JSX.Element) =>
  render(<MemoryRouter>{component}</MemoryRouter>);

beforeAll(() => {
  renderWithRouter(<EditNoteController />);
});

test("render no note text", () => {
  const text = screen.getByText("Данной заметки не существует!!!");
  expect(text).toBeInTheDocument();
});
