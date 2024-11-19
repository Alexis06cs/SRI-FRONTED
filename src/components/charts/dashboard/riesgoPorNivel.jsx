import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels'; // Importa el plugin
import '../modals.charts/ModalComponent.css';

const Modal = ({ show, onClose, level, percentage }) => {
    if (!show) return null;
    return (
      <div className="modal-details" onClick={(e) => e.stopPropagation()} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1000 }}>
        <h3>Detalles:</h3>
        <div className="details-content">
          <div className="status-box" style={{ backgroundColor: level === 'Alto' ? '#0ABD8C' : level === 'Medio' ? '#5FCBE4' : '#808080' }}></div>
          <span>{level}</span>
          <span>{percentage}%</span>
          <button className="download-button" onClick={() => alert("Descargando archivo...")}> 
            <i className="fas fa-download"></i>
          </button>
          <button className="close-button" onClick={onClose}>x</button>
        </div>
      </div>
    );
};

const RiesgoPorNivelChart = () => {
    const [chartData, setChartData] = useState({
      labels: [],
      datasets: [
        {
          label: 'Riesgo por Nivel',
          data: [],
          backgroundColor: ['#0ABD8C', '#5FCBE4', '#808080'],
          hoverBackgroundColor: ['#0e8c6a', '#217c91', '#696565'],
        },
      ],
    });
    const [modalInfo, setModalInfo] = useState({ show: false, level: '', percentage: 0 });
    const [totalRisk, setTotalRisk] = useState(0);

    useEffect(() => {
        const fetchRiskData = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}niveles_riesgo`);
                const data = await response.json();

                const labels = data.map((item) => item.nivel_de_riesgo);
                const values = data.map((item) => item.cantidad);

                const total = values.reduce((sum, value) => sum + value, 0);
                setTotalRisk(total);

                setChartData({
                    labels: labels,
                    datasets: [
                        {
                            label: 'Riesgo por Nivel',
                            data: values,
                            backgroundColor: ['#B02417', '#A3A7AD', '#DE8343'],
                            hoverBackgroundColor: ['#B02418', '#217c91', '#696565'],
                        },
                    ],
                });
            } catch (error) {
                console.error('Error al obtener datos de la API:', error);
            }
        };

        fetchRiskData();
    }, []);

    const handleElementClick = (elements) => {
      if (elements.length > 0) {
        const index = elements[0].index;
        const level = chartData.labels[index];
        const value = chartData.datasets[0].data[index];
        const percentage = ((value / totalRisk) * 1000).toFixed(2);
        setModalInfo({ show: true, level, percentage });
      }
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
        },
        datalabels: {
          color: '#fff',               // Texto en blanco
          backgroundColor: '#000',      // Fondo negro para el borde
          borderRadius: 4,
          borderColor: '#000',
          borderWidth: 1,
          padding: 4,
          font: {
            weight: 'bold',
            size: 15,
          },
          formatter: (value) => `${value}`, // Muestra el porcentaje
        },
      },
      onClick: (_, elements) => handleElementClick(elements),
    };

    return (
      <div className="doughnut-container" style={{ position: 'relative' }}>
        <Doughnut data={chartData} options={options} plugins={[ChartDataLabels]} />
        <Modal 
          show={modalInfo.show} 
          onClose={() => setModalInfo({ ...modalInfo, show: false })} 
          level={modalInfo.level} 
          percentage={modalInfo.percentage} 
        />
      </div>
    );
};

export default RiesgoPorNivelChart;
