import React from 'react';

import './lib.scss';

const ModalDialog = ({ children }) => (
  <div className="modal-container">
    <div className="modal-bg" />
    <div className="modal">
      {children}
    </div>
  </div>
);

export default ModalDialog;