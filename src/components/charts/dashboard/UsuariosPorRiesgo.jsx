import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const UsuarioChart = ({ limit }) => {
  const [chartData, setChartData] = useState({
    series: [{
      name: "Frecuencia de Usuarios",
      data: []
    }],
    options: {
      chart: { type: 'bar', height: 380 },
      xaxis: { categories: [] },
      colors: ['#0ABD8C'],
      title: { text: 'Top Usuarios con Más Riesgos' }
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}usuarios_frecuencia`);
        const data = await response.json();

        const topData = data.slice(0, limit);
        const userNames = topData.map(item => item.usuario);
        const totals = topData.map(item => parseInt(item.total, 10));

        setChartData(prevData => ({
          ...prevData,
          series: [{ ...prevData.series[0], data: totals }],
          options: { ...prevData.options, xaxis: { categories: userNames } }
        }));
      } catch (error) {
        console.error('Error al obtener los datos de la API', error);
      }
    };

    fetchData();
  }, [limit]);

  return (
    <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={380} />
  );
};

export default UsuarioChart;
