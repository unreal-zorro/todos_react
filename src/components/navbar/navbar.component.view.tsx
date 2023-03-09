import React from "react";
import { NavbarController, NavbarOptions } from "./navbar.component.controller";
import { NavLink } from "react-router-dom";

export const NavbarView = <P extends NavbarOptions, S>(
  ctrl: NavbarController<P, S>,
  props: P
): JSX.Element => (
  <>
    <div
      className="bg-success position-absolute"
      style={{
        width: "calc(100vw - 100%)",
        height: `${ctrl.height}px`,
        zIndex: "1000",
        top: 0,
        left: 0
      }}
    ></div>

    <nav className="navbar navbar-expand-sm navbar-dark bg-success" id="navbar">
      <div className="container-sm main-container">
        <NavLink className="navbar-brand" to="/">
          <span
            data-bs-toggle="collapse"
            data-bs-target=".navbar-collapse.show"
          >
            Заметки
          </span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Переключить навигацию"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                <span
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show"
                >
                  Главная
                </span>
              </NavLink>
            </li>

            <li
              className="nav-item"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
            >
              <NavLink className="nav-link" to="/notes">
                <span
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show"
                >
                  Все заметки
                </span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/new">
                <span
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show"
                >
                  Новая заметка
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
);
