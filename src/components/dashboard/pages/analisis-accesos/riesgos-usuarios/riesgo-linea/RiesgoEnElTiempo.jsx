import React from 'react';
import RiesgoEnElTiempoTable from './RiesgoEnElTiempo2';
import 'chart.js/auto';
import './RiesgoEnElTiempo.css';  // Asegúrate de crear el archivo CSS
import TrafficSourcesChart from '../../../../../charts/dashboard/TrafficSourcesChart';

const RiesgoEnElTiempo = () => {
    // Datos del gráfico de líneas
    const data = {
        labels: ['28/02/2020', '09/03/2020', '16/03/2020', '30/03/2020', '05/04/2020'],
        datasets: [
            {
                label: 'Alto',
                data: [3430, 2790, 2674, 2708, 2765],
                borderColor: '#FF6384',
                backgroundColor: 'rgba(255,99,132,0.2)',
                fill: true,
            },
            {
                label: 'Medio',
                data: [1698, 1394, 1386, 1400, 1332],
                borderColor: '#FFCE56',
                backgroundColor: 'rgba(255,206,86,0.2)',
                fill: true,
            },
            {
                label: 'Bajo',
                data: [46, 46, 46, 46, 46],
                borderColor: '#36A2EB',
                backgroundColor: 'rgba(54,162,235,0.2)',
                fill: true,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="riesgo-container">
            <div className="riesgo-container-card">
                <h1>Riesgo en el Tiempo</h1>

                {/* Filtros de fecha y proceso */}
                <div className="input-group">
                    <label htmlFor="fechaRiesgo">Fecha de Riesgo:</label>
                    <input type="date" id="fechaRiesgo" />
                    <label htmlFor="procesoEmpresarial">Proceso Empresarial</label>
                    <select name="" id=""></select>
                    <button className="buscar-btn">Buscar</button>

                </div>

                    {/* Gráfico de líneas */}
                    <div className="chart-container">
                        <h2>Riesgos en el Tiempo</h2>
                        <TrafficSourcesChart/>
                    </div>

    
            </div>
        </div>
    );
};

export default RiesgoEnElTiempo;
