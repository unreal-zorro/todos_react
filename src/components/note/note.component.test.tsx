import React from "react";
import { render, screen } from "@testing-library/react";
import { NoteController } from "./note.component.controller";
import { TodoDTO } from "../../models/DTOEntities/todoDTO/todo.DTO";
import { NoteDTO } from "../../models/DTOEntities/noteDTO/note.DTO";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const todo1: TodoDTO = new TodoDTO();
todo1._id = "1";
todo1.checked = true;
todo1.text = "Изучить основные теги";

const todo2: TodoDTO = new TodoDTO();
todo2._id = "2";
todo2.checked = false;
todo2.text = "Изучить атрибуты тегов";

const todo3: TodoDTO = new TodoDTO();
todo3._id = "3";
todo3.checked = true;
todo3.text = "Изучить семантические теги";

const todo4: TodoDTO = new TodoDTO();
todo4._id = "4";
todo4.checked = true;
todo4.text = "Изучить мета теги";

const todo5: TodoDTO = new TodoDTO();
todo5._id = "5";
todo5.checked = false;
todo5.text = "Изучить структуру HTML документа";

const note: NoteDTO = new NoteDTO();
note._id = "1";
note.title = "Изучить HTML";
note.todos = [todo1, todo2, todo3, todo4, todo5];

const handleDelete = jest.fn();

const renderWithRouter = (component: JSX.Element) =>
  render(<MemoryRouter>{component}</MemoryRouter>);

describe("Note", () => {
  it("should render Note component without 'isOpen'", () => {
    renderWithRouter(
      <NoteController
        _id={note._id}
        title={note.title}
        todos={note.todos}
        completed={false}
        onDelete={handleDelete}
        isOpen={false}
        to={"/notes"}
      />
    );
    expect(screen.getByText(note.title)).toBeInTheDocument();
    expect(screen.getAllByRole("checkbox").length).toBe(note.todos.length);
    expect(screen.getByText(note.todos[0].text)).toBeInTheDocument();
    expect(screen.getByText(note.todos[1].text)).toBeInTheDocument();
    expect(screen.getByText(note.todos[2].text)).toBeInTheDocument();
    expect(screen.getByText(note.todos[3].text)).toBeInTheDocument();
    expect(screen.getByText(note.todos[4].text)).toBeInTheDocument();
    expect(screen.getAllByRole("checkbox")[0]).toBeChecked();
    expect(screen.getAllByRole("checkbox")[1]).not.toBeChecked();
    expect(screen.getAllByRole("checkbox")[2]).toBeChecked();
    expect(screen.getAllByRole("checkbox")[3]).toBeChecked();
    expect(screen.getAllByRole("checkbox")[4]).not.toBeChecked();
    expect(screen.getByTestId("note")).not.toHaveClass("bg-warning-subtle");
    expect(screen.getByTestId("note")).toHaveClass("bg-light");
    expect(screen.getByRole("link")).toHaveAttribute("href", "/edit/1");
  });

  it("should render Note component with props 'completed' and 'isOpen'", () => {
    renderWithRouter(
      <NoteController
        _id={note._id}
        title={note.title}
        todos={note.todos}
        completed={true}
        onDelete={handleDelete}
        isOpen={true}
        to={"/notes"}
      />
    );
    expect(screen.getAllByRole("checkbox").length).toBe(3);
    expect(
      screen.getByText(`... Ещё осталось задач: ${5 - 3}`)
    ).toBeInTheDocument();
    expect(screen.getByText(note.todos[0].text)).toBeInTheDocument();
    expect(screen.getByText(note.todos[1].text)).toBeInTheDocument();
    expect(screen.getByText(note.todos[2].text)).toBeInTheDocument();
    expect(screen.getAllByRole("checkbox")[0]).toBeChecked();
    expect(screen.getAllByRole("checkbox")[1]).not.toBeChecked();
    expect(screen.getAllByRole("checkbox")[2]).toBeChecked();
    expect(screen.getByTestId("note")).toHaveClass("bg-warning-subtle");
    expect(screen.getByTestId("note")).not.toHaveClass("bg-light");
    expect(screen.getAllByRole("link")[0]).toHaveAttribute("href", "/notes/1");
  });

  it("should render Note without todos", () => {
    renderWithRouter(
      <NoteController
        _id={note._id}
        title={note.title}
        todos={[]}
        completed={true}
        onDelete={handleDelete}
        isOpen={true}
        to={"/notes"}
      />
    );
    expect(screen.getAllByRole("heading")[1].textContent).toBe(
      "Задач пока нет. Добавьте первую задачу."
    );
  });

  it("should call handler in todo checkbox after click", async () => {
    renderWithRouter(
      <NoteController
        _id={note._id}
        title={note.title}
        todos={note.todos}
        completed={true}
        onDelete={handleDelete}
        isOpen={true}
        to={"/notes"}
      />
    );
    await userEvent.click(screen.getByRole("button"));
    expect(handleDelete).toHaveBeenCalledTimes(1);
  });
});
