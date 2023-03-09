import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { NavbarController } from "./navbar.component.controller";

const renderWithRouter = (component: JSX.Element) =>
  render(<MemoryRouter>{component}</MemoryRouter>);

test("renders text 'Все заметки'", () => {
  renderWithRouter(<NavbarController />);
  const linkElement = screen.getByText(/Все заметки/i);
  expect(linkElement).toBeInTheDocument();
});
