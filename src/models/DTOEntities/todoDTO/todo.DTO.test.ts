import { TodoDTO } from "./todo.DTO";

let todo: TodoDTO | null = null;
beforeAll(() => {
  todo = new TodoDTO();
});

afterAll(() => {
  todo = null;
});

it("should property '_id' to be ''", () => {
  expect(todo?._id).toBe("");
});

it("should property 'checked' to be false", () => {
  expect(todo?.checked).toBeFalsy();
});

it("should property 'text' to be ''", () => {
  expect(todo?.text).toBe("");
});
