import React from 'react';
import Card from '../../../../cards/Card';

const AccesosCriticos = () => {
  return (
    <div className="dashboard-main">
      <h1>Accesos Críticos</h1>
      <div className="card-container">
        <Card title="Transacciones Críticas" imageSrc="/imagenes/img_card.png" />
        <Card title="Objetos Críticos" imageSrc="/imagenes/img_card.png" />
      </div>
    </div>
  );
};

export default AccesosCriticos;
