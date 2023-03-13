import React from "react";
import { MainPageController, MainPageOptions } from "./main.page.controller";

export const MainPageView = <P extends MainPageOptions, S>(
  ctrl: MainPageController<P, S>,
  props: P
): JSX.Element => (
  <>
    <h1 className="mt-3 text-center">Главная страница</h1>

    {ctrl.numberOfNotes === 0 ? (
      <h3 className="text-center mt-2 text-danger">Заметок пока нет!!!</h3>
    ) : (
      <h3 className="text-center mt-2 text-warning">
        Всего заметок:{" "}
        <span className="fw-bold fs-3 text-success">{ctrl.numberOfNotes}</span>
      </h3>
    )}
  </>
);
