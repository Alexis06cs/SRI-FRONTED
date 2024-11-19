import React from 'react';
import Card from '../../../cards/Card'; // Suponiendo que tienes el componente de Card reusable

const LicenciamientoFUE = () => {
  return (
    <div className="dashboard-main">
      <div className="card-container">
        <Card title="Nivel Usuarios" imageSrc="/imagenes/img_card.png" />
      </div>
    </div>
  );
};

export default LicenciamientoFUE;
