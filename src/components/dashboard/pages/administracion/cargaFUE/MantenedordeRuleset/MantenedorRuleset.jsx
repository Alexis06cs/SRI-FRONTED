import React from 'react';
import './MantenedorRuleset.css';

const MantenedorRuleset = () => {
  // Datos ficticios para la tabla de Cargas Realizadas
  const cargas = [
    { id: 1, fechaTransaccionCritica: '17/06/21', fechaCarga: '17/06/22', horaCarga: '09:42:48', empresa: 'Minuto verde', usuario: 'rsoto' },
    { id: 2, fechaTransaccionCritica: '24/06/21', fechaCarga: '24/06/22', horaCarga: '09:42:48', empresa: 'Cliente', usuario: 'demo' },
    { id: 3, fechaTransaccionCritica: '06/06/21', fechaCarga: '06/06/22', horaCarga: '09:42:48', empresa: 'Compass Group', usuario: 'rsoto' },
    { id: 4, fechaTransaccionCritica: '24/06/21', fechaCarga: '24/06/22', horaCarga: '09:42:48', empresa: 'Cliente de prueba', usuario: 'rsoto' },
    { id: 5, fechaTransaccionCritica: '24/05/21', fechaCarga: '24/05/22', horaCarga: '09:42:48', empresa: 'Cliente', usuario: 'demo' },
    { id: 6, fechaTransaccionCritica: '29/06/21', fechaCarga: '29/06/22', horaCarga: '09:42:48', empresa: 'Minuto verde', usuario: 'demo' },
    { id: 7, fechaTransaccionCritica: '24/06/21', fechaCarga: '24/06/22', horaCarga: '09:42:48', empresa: 'Minuto verde', usuario: 'demo' },
  ];

  return (
    <div className="mr_container">
      <h1>Cargas Realizadas</h1>
      <div className="mr_table-wrapper">
      <table className="mr_table">
        <thead>
          <tr>
            <th>Fecha Transacción Crítica</th>
            <th>Fecha de Carga</th>
            <th>Hora de Carga</th>
            <th>Empresa</th>
            <th>Usuario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cargas.map((carga) => (
            <tr key={carga.id}>
              <td>{carga.fechaTransaccionCritica}</td>
              <td>{carga.fechaCarga}</td>
              <td>{carga.horaCarga}</td>
              <td>{carga.empresa}</td>
              <td>{carga.usuario}</td>
              <td>
                <div className="acciones-iconos">
                 <button className="btn-icon">
                   <i className="fa-solid fa-download" aria-hidden="true"></i>
                </button> 
                <button className="btn-icon">
                   <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default MantenedorRuleset;
