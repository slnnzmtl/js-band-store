import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './ModalWindow.scss';

const ModalWindow = ({ children, closeWindow }) => {
  useEffect(() => () => closeWindow(), [closeWindow]);

  return (
    <div className="modal-window" onClick={closeWindow} role="presentation">
      <div className="modal-window__container">
        {children}
        <button type="button" className="modal-window__close" onClick={closeWindow}>
          Close
        </button>
      </div>
    </div>
  );
};

ModalWindow.propTypes = {
  children: PropTypes.node,
  closeWindow: PropTypes.func,
};

ModalWindow.defaultProps = {
  children: null,
  closeWindow: () => {},
};

export default ModalWindow;
