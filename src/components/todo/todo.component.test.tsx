import React from "react";
import { render, screen } from "@testing-library/react";
import { TodoController } from "./todo.component.controller";
import { TodoDTO } from "../../models/DTOEntities/todoDTO/todo.DTO";
import userEvent from "@testing-library/user-event";

const todo: TodoDTO = new TodoDTO();
todo._id = "1";
todo.checked = true;
todo.text = "Изучить основные теги";

const handleChecked = jest.fn();

describe("Todo", () => {
  it("should render checked Todo component", () => {
    render(
      <TodoController
        checked={todo.checked}
        text={todo.text}
        onChecked={handleChecked}
      />
    );
    expect(screen.getByText(/Изучить основные теги/i)).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toBeChecked();
    expect(screen.getByTestId("todo")).toHaveClass("bg-success bg-opacity-25");
  });

  it("should render unchecked Todo component", () => {
    render(
      <TodoController
        checked={!todo.checked}
        text={todo.text}
        onChecked={handleChecked}
      />
    );
    expect(screen.getByText(/Изучить основные теги/i)).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).not.toBeChecked();
    expect(screen.getByTestId("todo")).not.toHaveClass(
      "bg-success bg-opacity-25"
    );
  });

  it("should call handler in checkbox after click", async () => {
    render(
      <TodoController
        checked={!todo.checked}
        text={todo.text}
        onChecked={handleChecked}
      />
    );
    await userEvent.click(screen.getByRole("checkbox"));
    expect(handleChecked).toHaveBeenCalledTimes(1);
  });
});
