import React from 'react';
import './CargaTransacciones.css'

const CargaTransacciones = () => {
  // Datos ficticios para las cargas realizadas
  const cargas = [
    { id: 1, fechaRiesgo: '17/06/21', fechaCarga: '17/06/22', horaCarga: '09:42:48', empresa: 'Minuto verde', usuario: 'rsoto' },
    { id: 2, fechaRiesgo: '24/06/21', fechaCarga: '24/06/22', horaCarga: '09:42:48', empresa: 'Cliente', usuario: 'demo' },
    { id: 3, fechaRiesgo: '06/06/21', fechaCarga: '06/06/22', horaCarga: '09:42:48', empresa: 'Compass Group', usuario: 'rsoto' },
    { id: 4, fechaRiesgo: '24/06/21', fechaCarga: '24/06/22', horaCarga: '09:42:48', empresa: 'Cliente de prueba', usuario: 'rsoto' },
    { id: 5, fechaRiesgo: '24/05/21', fechaCarga: '24/05/22', horaCarga: '09:42:48', empresa: 'Cliente', usuario: 'demo' },
    { id: 6, fechaRiesgo: '29/06/21', fechaCarga: '29/06/22', horaCarga: '09:42:48', empresa: 'Minuto verde', usuario: 'demo' },
    { id: 7, fechaRiesgo: '24/06/21', fechaCarga: '24/06/22', horaCarga: '09:42:48', empresa: 'Minuto verde', usuario: 'demo' },
  ];

  return (
    

    <div className="cdd_container">
        <h1>Agregar Riesgos desde Excel</h1>
       <div className="carga-datos-container">
        
        {/* Formulario para cargar archivo */}
        <div className="carga-datos-form">
                <div className="form-group">
                <label htmlFor="empresa">Empresa:</label>
                <select id="empresa">
                    <option>Seleccione una empresa</option>
                    <option>Minuto verde</option>
                    <option>Cliente</option>
                    <option>Compass Group</option>
                </select>
                </div>

                <div className="form-group">
                <label htmlFor="fechaRiesgo">Fecha de Riesgo:</label>
                <select id="fechaRiesgo">
                    <option>Seleccione una fecha</option>
                    <option>17/06/21</option>
                    <option>24/06/21</option>
                    <option>06/06/21</option>
                </select>
                </div>

                <div className="form-group">
                <label htmlFor="archivo">Archivo:</label>
                <input type="file" id="archivo" />
                </div>

                <div className="form-group buttons">
                <button className="btn-cancelar">Cancelar</button>
                <button className="btn-guardar">Guardar</button>
                </div>
        </div>

        {/* Tabla de Cargas Realizadas */}
        <h2>Cargas Realizadas</h2>
        <table className="cargas-table">
            <thead>
            <tr>
                <th>Fecha de Riesgo</th>
                <th>Fecha de Carga</th>
                <th>Empresa</th>
                <th>Usuario</th>
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
            {cargas.map((carga) => (
                <tr key={carga.id}>
                <td>{carga.fechaRiesgo}</td>
                <td>{carga.fechaCarga} {carga.horaCarga}</td>
                <td>{carga.empresa}</td>
                <td>{carga.usuario}</td>
                <td>
                    <button className="btn-descargar">Descarga</button>
                    <button className="btn-eliminar">Eliminar</button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    </div>
  );
};

export default CargaTransacciones;
