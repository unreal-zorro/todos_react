import React from "react";
import {
  MainLayoutController,
  MainLayoutOptions
} from "./main.layout.controller";
import { NavbarController } from "../../components/navbar/navbar.component.controller";
import { Outlet } from "react-router-dom";

export const MainLayoutView = <P extends MainLayoutOptions, S>(
  ctrl: MainLayoutController<P, S>,
  props: P
): JSX.Element => (
  <>
    <div className="scroll">
      <NavbarController />

      <div className="container-sm main-container">
        <Outlet />
      </div>
    </div>
  </>
);
