import React from 'react';
import Card from '../../../../../cards/Card'; // Importa el componente Card

const RiesgoGeneral = () => {
  return (
    <div className="dashboard-main">
        <h1>Riesgo General</h1>
        <div className="card-container">
            <Card title="Riesgo por Proceso Empresarial" imageSrc="/imagenes/img_card.png" />
            <Card title="Riesgo por Nivel" imageSrc="/imagenes/img_card.png" />
            <Card title="Riesgo en el Tiempo" imageSrc="/imagenes/img_card.png" />
        </div>
    </div>
);
}

export default RiesgoGeneral;
