import React from 'react';
import '../../../../../styles/RiesgoUsuario.css';  // Archivo CSS para esta página
import Card from '../../../../cards/Card'; // Importa el componente Card

const RiesgosUsuarios = () => {
  return (
    <div className="dashboard-main">
          <div className="card-container">
            <Card title="Riesgos Usuarios por Proceso Empresarial" imageSrc="/imagenes/img_card.png" />
            <Card title="Riesgo por Nivel" imageSrc="/imagenes/img_card.png" />
            <Card title="Riesgo en el Tiempo" imageSrc="/imagenes/img_card.png" />
          </div>
      </div>
  );
};

export default RiesgosUsuarios;
