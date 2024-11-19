import React from 'react';
import './MantenedorRiesgos.css'; // Asegúrate de crear este archivo CSS

const MantenedorRiesgos = () => {
  // Datos ficticios para la tabla de riesgos
  const riesgos = [
    { id: 1, nombre: 'SALL', descripcion: 'SAP ALL', procesoEmpresarial: 'Todos' },
    { id: 2, nombre: 'ZB01', descripcion: 'SAP New', procesoEmpresarial: 'Todos' },
    { id: 3, nombre: 'ZF29', descripcion: 'Desarrollo básico y gestión de sistemas', procesoEmpresarial: 'Basis' },
    { id: 4, nombre: 'ZB01', descripcion: 'Utilidades básicas y gestión', procesoEmpresarial: 'Finanzas' },
    { id: 5, nombre: 'ZF29', descripcion: 'Crear y realizar transporte', procesoEmpresarial: 'RRHH y nomina' },
    { id: 6, nombre: 'ZF29', descripcion: 'Cruzar datos', procesoEmpresarial: 'Gestión de Materiales' },
    { id: 7, nombre: 'ZF29', descripcion: 'Manipular reports', procesoEmpresarial: 'Ciclo de compras' },
  ];

  return (
    <div className="mr_container2">
      <div className="mantenedor-riesgos-container">
        <h1>Listado de Riesgos</h1>
        <table className="riesgos-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Proceso Empresarial</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {riesgos.map((riesgo) => (
              <tr key={riesgo.id}>
                <td>{riesgo.nombre}</td>
                <td>{riesgo.descripcion}</td>
                <td>{riesgo.procesoEmpresarial}</td>
                <td>
                  <div className="acciones-iconos">
                    <button className="btn-icon">
                      <i className="fa fa-pencil" aria-hidden="true"></i>
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

export default MantenedorRiesgos;
