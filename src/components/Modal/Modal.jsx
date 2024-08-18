import React, { Component } from 'react';
import { ModalWindow, Overlay } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseOnEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseOnEscape);
  }

  handleCloseOnEscape = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleCloseOnOverlay = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const { imgLarge, tags } = this.props;

    return createPortal(
      <Overlay onClick={this.handleCloseOnOverlay}>
        <ModalWindow>
          <img src={imgLarge} alt={tags} />
        </ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}

export default Modal;
