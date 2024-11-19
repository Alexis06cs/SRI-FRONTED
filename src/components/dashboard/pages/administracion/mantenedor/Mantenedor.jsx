import React from 'react';
import Card from '../../../../cards/Card';
import './mantenedor.css'

const Mantenedor = () => {
  return (
    <div className="adm_container">
      <div className="adm_container_card">
          <Card title="Mantenedor de Empresas" imageSrc="/imagenes/img_card.png" />
          <Card title="Mantenedor de Usuario" imageSrc="/imagenes/img_card.png" />
          
      </div>
      
    </div>
  );
};

export default Mantenedor;
