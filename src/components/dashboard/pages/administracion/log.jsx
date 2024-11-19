import React from 'react';
import './log.css';

const Logs = () => {
  // Datos ficticios para la tabla de Cargas Realizadas
  const cargas = [
    { id: 1, nombreusuario: 'Gustavo navia', perfil: 'Admi', tipomodi: 'Cambio de mantenedor', fecha: '17/06/21', hora: '09:42:48' },
    { id: 2, nombreusuario: 'Gustavo navia', perfil: 'Admi', tipomodi: 'Cambio de mantenedor', fecha: '17/06/21', hora: '09:42:48' },
    { id: 3, nombreusuario: 'Gustavo navia', perfil: 'Admi', tipomodi: 'Cambio de mantenedor', fecha: '17/06/21', hora: '09:42:48' },
    { id: 4, nombreusuario: 'Gustavo navia', perfil: 'Admi', tipomodi: 'Cambio de mantenedor', fecha: '17/06/21', hora: '09:42:48' },
    { id: 5, nombreusuario: 'Gustavo navia', perfil: 'Admi', tipomodi: 'Cambio de mantenedor', fecha: '17/06/21', hora: '09:42:48' },
    { id: 6, nombreusuario: 'Gustavo navia', perfil: 'Admi', tipomodi: 'Cambio de mantenedor', fecha: '17/06/21', hora: '09:42:48' },
    { id: 7, nombreusuario: 'Gustavo navia', perfil: 'Admi', tipomodi: 'Cambio de mantenedor', fecha: '17/06/21', hora: '09:42:48' },
  ];

  return (
    <div className="log_container">
      <h1>Administración de perfiles</h1>
      <table className="log_table">
        <thead>
          <tr>
            <th>Nombre Usuario</th>
            <th>Perfil</th>
            <th>tipo de Modificación</th>
            <th>Fecha</th>
            <th>Hora</th>
          </tr>
        </thead>
        <tbody>
          {cargas.map((carga) => (
            <tr key={carga.id}>
              <td>{carga.nombreusuario}</td>
              <td>{carga.perfil}</td>
              <td>{carga.tipomodi}</td>
              <td>{carga.fecha}</td>
              <td>{carga.hora}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Logs;
