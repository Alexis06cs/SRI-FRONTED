import React from 'react';
import Card from '../../../../cards/Card'; // Asegúrate de que el componente Card esté bien importado

const NivelUsuarios = () => {
  return (
    <div className="dashboard-main">
      <div className="card-container">
        <Card title="Licencia Usuarios" imageSrc="/imagenes/img_card.png" />
        <Card title="Simulación" imageSrc="/imagenes/img_card.png" />
      </div>
    </div>
  );
};

export default NivelUsuarios;
