import React from 'react';
import 'chart.js/auto';
import RiesgoPorNivelChartComponent from '../../../../../charts/dashboard/riesgoPorNivel';
import './RiesgoPorNivel.css';
import RiesgoPorNivelDetails from './RiesgoPorNivelDetails';

const RiesgoPorNivelChart = () => {
    return (
        <div className='riesgo-container2'>
            <div className="chart-container2">
                 <div className="input-group2">
                    <label htmlFor="fechaRiesgo">Fecha de Riesgo:</label>
                    <input type="text" id="fechaRiesgo" placeholder="Buscar" />
                    <button className="buscar-btn">Buscar</button>
                    <button className="export-btn">Exportar como imagen</button>
                </div>
                <div className="doughnut-container">
                    <RiesgoPorNivelChartComponent />
                </div>
            </div>
            {/* Aquí renderizamos el componente de detalles */}
            <RiesgoPorNivelDetails />
        </div>
    );
};  

export default RiesgoPorNivelChart;
