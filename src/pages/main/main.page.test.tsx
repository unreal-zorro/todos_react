import React from "react";
import { render, screen } from "@testing-library/react";
import { MainPageController } from "./main.page.controller";

describe("Main page without notes in repository", () => {
  it("should render Main page component", () => {
    render(<MainPageController />);
    expect(screen.getAllByRole("heading")[0].textContent).toBe(
      "Главная страница"
    );
    expect(screen.getAllByRole("heading")[1].textContent).toBe(
      "Заметок пока нет!!!"
    );
  });
});
