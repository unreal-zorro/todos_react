import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders text 'Hello Todos!!!'", () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello Todos!!!/i);
  expect(linkElement).toBeInTheDocument();
});
