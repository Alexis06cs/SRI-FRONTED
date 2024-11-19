import React from 'react';
import DashboardChart from '../../../../../../charts/dashboard/DashboardChart';

const Proceso_empresarial = () => {
    return (
        <div className='rp_container_one_main'>
          <div>
            <h3>RIESGO POR PROCESO EMPRESARIAL</h3>
          </div>
          <div className="rp_controls">
            <label htmlFor="fecha_riesgo">Fecha de Riesgo: </label>
            <select name="date" id="date_rp">
              <option>Selecciona</option>
            </select>
            <button className='rp_search'>Buscar</button>
            <button className="rp_export">
              <i className="fas fa-download"></i> {/* Icono de descargar */}
            </button>
          </div>
          <div className='rp_container_graphic'>
            <DashboardChart/>
          </div>
        </div>
    );
};

export default Proceso_empresarial;
