import React from 'react';
import Card from '../../../cards/Card';
import './administracion.css'

const Administracion = () => {
  return (
    <div className="adm_container">
      <div className="adm_container_card">
          <Card title="Mantenedor" imageSrc="/imagenes/img_card.png" />
          <Card title="Reportes SOD" imageSrc="/imagenes/img_card.png" />
          <Card title="Carga FUE" imageSrc="/imagenes/img_card.png" />
          <Card title="Accesos Criticos" imageSrc="/imagenes/img_card.png" />
          <Card title="Log" imageSrc="/imagenes/img_card.png" />
      </div>
      
    </div>
  );
};

export default Administracion;
