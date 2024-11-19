import React from 'react';
import './ModalComponent.css';

const ModalComponent = ({ isOpen, onClose, nivel, porcentaje }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-details">
        <h3>Detalles:</h3>
        <div className="details-content">
          <div className="status-box"></div>
          <span>{nivel}</span>
          <span>{porcentaje}%</span>
          <button className="download-button" onClick={() => alert("Descargando archivo...")}>
            <i className="fas fa-download"></i>
          </button>
        </div>
        <button className="close-button" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default ModalComponent;
