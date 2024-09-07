import React, { useEffect } from 'react';
import { ModalWindow, Overlay } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ imgLarge, onClose, tags }) {
  useEffect(() => {
    const handleCloseOnEscape = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleCloseOnEscape);

    return () => {
      window.removeEventListener('keydown', handleCloseOnEscape);
    };
  }, [onClose]);

  const handleCloseOnOverlay = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleCloseOnOverlay}>
      <ModalWindow>
        <img src={imgLarge} alt={tags} />
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
}

// class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleCloseOnEscape);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleCloseOnEscape);
//   }

//   handleCloseOnEscape = event => {
//     if (event.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleCloseOnOverlay = event => {
//     if (event.currentTarget === event.target) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     const { imgLarge, tags } = this.props;

//     return createPortal(
//       <Overlay onClick={this.handleCloseOnOverlay}>
//         <ModalWindow>
//           <img src={imgLarge} alt={tags} />
//         </ModalWindow>
//       </Overlay>,
//       modalRoot
//     );
//   }
// }

// export default Modal;
