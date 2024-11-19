import React from 'react';
import Card from '../../../../cards/Card';
import './AccesosCriticos.css'

const AccesosCriticos = () => {
  return (
    <div className="adm_container">
      <div className="adm_container_card">
          <Card title="Carga de Tracc Criti" imageSrc="/imagenes/img_card.png" />
          <Card title="Carga de Objetos Criticos" imageSrc="/imagenes/img_card.png" />
      </div>
      
    </div>
  );
};

export default AccesosCriticos;
