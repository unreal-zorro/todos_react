import { NoteDTO } from "./note.DTO";

let todo: NoteDTO | null = null;
beforeEach(() => {
  todo = new NoteDTO();
});

afterEach(() => {
  todo = null;
});

it("should property '_id' to be ''", () => {
  expect(todo?._id).toBe("");
});

it("should property 'title' to be ''", () => {
  expect(todo?.title).toBeFalsy();
});

it("should property 'todos' to be []", () => {
  expect(todo?.todos).toStrictEqual([]);
});
