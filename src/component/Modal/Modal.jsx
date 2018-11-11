import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./modal.css";
class Modal extends Component {
  constructor(props) {
    super(props);
    this.elem = document.createElement("div");
    this.modalRoot = document.getElementById("modal");
    this.modalRoot.appendChild(this.elem);
  }
  componentWillUnmount() {
    this.modalRoot.removeChild(this.elem);
  }
  state = {};
  render() {
    return ReactDOM.createPortal(this.renderModal(), this.elem);
  }
  renderModal() {
    return (
      <div className="modal-background">
        <div className="modal-content">{this.props.children}</div>
      </div>
    );
  }
}

export default Modal;
