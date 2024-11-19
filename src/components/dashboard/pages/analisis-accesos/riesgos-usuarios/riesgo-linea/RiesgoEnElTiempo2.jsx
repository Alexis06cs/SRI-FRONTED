import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './RiesgoEnElTiempo.css';  // Asegúrate de crear el archivo CSS
import TrafficSourcesChart from '../../../../../charts/dashboard/TrafficSourcesChart';

const RiesgoEnElTiempoTable = () => {
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
            {/* Tabla de datos */}
            <div className="table-container2">
                <h2>Datos</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Alto</th>
                            <th>Media</th>
                            <th>Bajo</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>28/02/2020</td>
                            <td>3,430</td>
                            <td>1,698</td>
                            <td>46</td>
                            <td>5,174</td>
                        </tr>
                        <tr>
                            <td>09/03/2020</td>
                            <td>2,790</td>
                            <td>1,394</td>
                            <td>46</td>
                            <td>4,230</td>
                        </tr>
                        <tr>
                            <td>16/03/2020</td>
                            <td>2,674</td>
                            <td>1,386</td>
                            <td>46</td>
                            <td>4,106</td>
                        </tr>
                        <tr>
                            <td>30/03/2020</td>
                            <td>2,708</td>
                            <td>1,400</td>
                            <td>46</td>
                            <td>4,154</td>
                        </tr>
                        <tr>
                            <td>05/04/2020</td>
                            <td>2,765</td>
                            <td>1,332</td>
                            <td>46</td>
                            <td>4,443</td>
                        </tr>
                    </tbody>
                </table>
               
              </div>
            </div>
        </div>
    );
};

export default RiesgoEnElTiempoTable;
