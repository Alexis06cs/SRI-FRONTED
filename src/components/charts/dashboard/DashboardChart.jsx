import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import Modal from '../../modals/Modal';

const DashboardChart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoverModal, setHoverModal] = useState({ show: false, x: 0, y: 0 });
  const [selectedData, setSelectedData] = useState(null);
  const [chartData, setChartData] = useState({
    series: [{
      name: "Riesgos",
      data: [] // Inicialmente vacío
    }],
    options: {
      chart: {
        type: 'bar',
        height: 380,
        events: {
          dataPointSelection: (event, chartContext, { dataPointIndex }) => {
            if (chartData.series[0]?.data[dataPointIndex] !== undefined) {
              const selectedValue = chartData.series[0].data[dataPointIndex];
              setSelectedData({
                category: chartData.options.xaxis.categories[dataPointIndex],
                value: selectedValue
              });
              setIsModalOpen(true);
            }
          },
        },
      },
      xaxis: {
        categories: [] // Inicialmente vacío
      },
      colors: ['#0ABD8C'],
      title: {
        text: 'Riesgo de Proceso Empresarial',
      },
      dataLabels: {
        enabled: true,
        formatter: (val) => val,
      },
    }
  });

  const fetchData = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}desc_proc_emp`);
      const data = await response.json();

      // Validar y procesar los datos
      if (!Array.isArray(data) || data.length === 0) {
        console.error('API devolvió datos inválidos o vacíos:', data);
        return;
      }

      const categories = [];
      const seriesData = [];

      data.forEach(item => {
        if (item.desc_proc_emp && typeof item.total === 'number') {
          categories.push(item.desc_proc_emp);
          seriesData.push(item.total);
        }
      });

      if (categories.length === 0 || seriesData.length === 0) {
        console.error('Datos procesados están vacíos:', { categories, seriesData });
        return;
      }

      setChartData({
        series: [{ name: "Riesgos", data: seriesData }],
        options: {
          ...chartData.options,
          xaxis: { ...chartData.options.xaxis, categories },
        },
      });
    } catch (error) {
      console.error('Error al obtener los datos de la API:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (
    chartData.series[0]?.data?.length === 0 || 
    chartData.options.xaxis?.categories?.length === 0
  ) {
    return <div>Cargando datos o sin datos disponibles...</div>;
  }

  return (
    <div style={{ position: 'relative' }}>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={380}
      />
      {isModalOpen && <Modal data={selectedData} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default DashboardChart;
