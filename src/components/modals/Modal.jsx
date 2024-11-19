import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ data, onClose }) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Detalles de la Barra Seleccionada</h2>
        <p>Categoría: {data?.category}</p>
        <p>Valor: {data?.value}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>,
    document.body // Renderizar el modal en el body
  );
};

export default Modal;
