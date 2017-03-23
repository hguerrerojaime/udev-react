import MessageModal from 'udev-react/commons/MessageModal';
import ConfirmModal from 'udev-react/commons/ConfirmModal';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'udev-react/commons/Button';

let message = (message) => {

   renderModal(<MessageModal onClose={removeModal}>{message}</MessageModal>);

};

let confirm = (message,callback) => {
    renderModal(<ConfirmModal onConfirm={callback} onClose={removeModal}>{message}</ConfirmModal>);
};


let renderModal = (modal) => {

  ReactDOM.render(
    modal,
    document.getElementById("alert-wrapper")
  );

};

let removeModal = () => {
  ReactDOM.render(
    <div />,
    document.getElementById("alert-wrapper")
  );
}

let alert = {
  message: message,
  confirm: confirm
};

export default alert;
