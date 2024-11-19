import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import dayjs from 'dayjs';
import Modal from '../../modals/Modal';

const DashboardChart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoverModal, setHoverModal] = useState({ show: false, x: 0, y: 0 });
  const [selectedData, setSelectedData] = useState(null);
  const [chartData, setChartData] = useState({
    series: [{
      name: "Riesgos",
      data: [] // Inicialmente vacío, se llenará con los datos de la API
    }],
    options: {
      chart: {
        type: 'bar',
        height: 380,
        events: {
          dataPointSelection: (event, chartContext, { dataPointIndex }) => {
            const selectedValue = chartData.series[0].data[dataPointIndex];
            setSelectedData({
              category: chartData.options.xaxis.categories[dataPointIndex],
              value: selectedValue
            });
            setIsModalOpen(true);
          },
          dataPointMouseEnter: (event, chartContext, { dataPointIndex, w }) => {
            setHoverModal({ show: true, x: event.clientX, y: event.clientY });
          },
          dataPointMouseLeave: () => {
            setHoverModal({ show: false });
          }
        }
      },
      xaxis: {
        categories: [], // Inicialmente vacío, se llenará con los procesos
      },
      colors: ['#0ABD8C', '#0ABD8C'],
      title: {
        text: 'Riesgo de Proceso Empresarial',
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '16px', // Aumenta el tamaño de la fuente
          colors: ['#000']   // Color negro para los números
        },
        formatter: (val) => val, // Mostrar el valor encima de cada barra
        offsetY: -10 // Ajuste para que el valor aparezca justo encima de la barra
      }
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}desc_proc_emp`);
        const data = await response.json();

        const processNames = data.map(item => item.desc_proc_emp);
        const totals = data.map(item => parseInt(item.total, 10));

        setChartData(prevData => ({
          ...prevData,
          series: [{
            ...prevData.series[0],
            data: totals
          }],
          options: {
            ...prevData.options,
            xaxis: {
              ...prevData.options.xaxis,
              categories: processNames
            }
          }
        }));
      } catch (error) {
        console.error('Error al obtener los datos de la API', error);
      }
    };

    fetchData();
  }, []);

  if (chartData.series[0].data.length === 0) {
    return <div>Cargando datos...</div>;
  }

  return (
    <div style={{ position: 'relative' }}>
      <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={380} />
      {isModalOpen && <Modal data={selectedData} onClose={() => setIsModalOpen(false)} />}
      {hoverModal.show && (
        <div
          className="hover-modal"
          style={{
            position: 'absolute',
            top: hoverModal.y,
            left: hoverModal.x,
            backgroundColor: '#fff',
            padding: '5px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            zIndex: 1000
          }}
        >
        </div>
      )}
    </div>
  );
};

export default DashboardChart;
