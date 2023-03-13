import React from "react";
import { ModalController, ModalOptions } from "./modal.component.controller";
import { Link } from "react-router-dom";

export const ModalView = <P extends ModalOptions, S>(
  ctrl: ModalController<P, S>,
  props: P
): JSX.Element => (
  <div
    className={"" + (props.show ? "" : "d-none")}
    onClick={event => ctrl.modalClickHandler(event as unknown as Event)}
  >
    <div className="vw-100 vh-100 bg-black opacity-75 fixed-top"></div>

    <div className="modal d-block" tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{props.title}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Закрыть"
              onClick={props.handleClose}
            ></button>
          </div>
          <div className="modal-body">
            <p>{props.text}</p>
          </div>
          <div className="modal-footer">
            {props.okIsLink && props.to && props.okIsLink ? (
              <Link
                to={props.to}
                className="btn btn-success"
                onClick={props.handleSave}
              >
                {props.textOkButton}
              </Link>
            ) : (
              <button className="btn btn-success" onClick={props.handleSave}>
                {props.textOkButton}
              </button>
            )}
            <button
              className="btn btn-danger"
              data-bs-dismiss="modal"
              onClick={props.handleClose}
            >
              {props.textCancelButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
