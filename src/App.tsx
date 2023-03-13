import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider
} from "react-router-dom";
import { EditNotePageController } from "./pages/editNote/editNote.page.controller";
import { NoteListPageController } from "./pages/noteList/noteList.page.controller";
import { MainLayoutController } from "./layouts/main/main.layout.controller";
import { MainPageController } from "./pages/main/main.page.controller";
import { NotePageController } from "./pages/note/note.page.controller";
import { NewNotePageController } from "./pages/newNote/newNote.page.controller";

const router = createBrowserRouter([
  {
    element: <MainLayoutController />,
    children: [
      { path: "/*", element: <MainPageController /> },
      { path: "/notes", element: <NoteListPageController /> },
      { path: "/notes/:id", element: <NotePageController /> },
      {
        path: "/new",
        element: <NewNotePageController />
      },
      {
        path: "/edit/:id",
        element: <EditNotePageController />
      },
      { path: "*", element: <Navigate to="/" replace /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
