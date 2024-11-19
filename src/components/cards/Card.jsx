import React from 'react';

import '../../styles/Card.css';  // El archivo CSS para el estilo de la tarjeta

const Card = ({ title, imageSrc, onClick }) => {
    return (
      <div className="card">
        <img src={imageSrc} alt={title} />
        <h3 className="card-title">{title}</h3>
        <button className="card-button" onClick={onClick}>Visualizar</button>
      </div>
    );
  };
  
  export default Card;
