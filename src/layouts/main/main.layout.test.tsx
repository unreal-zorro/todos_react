import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainLayoutController } from "./main.layout.controller";

const renderWithRouter = (component: JSX.Element) =>
  render(<MemoryRouter>{component}</MemoryRouter>);

describe("Main", () => {
  it("should render Main component", () => {
    renderWithRouter(<MainLayoutController />);
    expect(screen.getByText(/Все заметки/i)).toBeInTheDocument();
  });
});
