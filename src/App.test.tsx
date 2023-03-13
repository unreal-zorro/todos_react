import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render Main page", () => {
    render(<App />);
    expect(screen.getAllByRole("heading")[0].textContent).toBe(
      "Главная страница"
    );
  });
});
