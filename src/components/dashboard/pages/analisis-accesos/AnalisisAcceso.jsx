import React from 'react';
import Card from '../../../cards/Card';

const AnalisisAccesos = () => {
    return (
        <div className="dashboard-main">
          <div className="card-container">
            <Card title="Riesgos Usuarios" imageSrc="/imagenes/img_card.png" />
            <Card title="Accesos Criticos" imageSrc="/imagenes/img_card.png" />
          </div>
        </div>
      );
};

export default AnalisisAccesos;
