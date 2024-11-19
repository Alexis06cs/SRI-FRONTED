import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const CirculeChart = () => {
  const [chartData, setChartData] = useState({
    series: [],
    options: {
      chart: {
        type: 'donut',
      },
      labels: ['Alto', 'Medio', 'Bajo'],
      colors: ['#B02417', '#DE8343', '#A3A7AD'],
      legend: {
        position: 'right',
      },
      plotOptions: {
        pie: {
          donut: {
            size: '40%'  // Ajusta este valor para hacer la dona más gruesa
          }
        }
      },
      responsive: [{
        breakpoint: 270,
        options: {
          chart: {
            width: 300
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}niveles_riesgo`);
        const data = await response.json();
        
        // Mapea los datos obtenidos a los valores de Alto, Medio, Bajo
        const riskCounts = {
          Alto: 0,
          Medio: 0,
          Bajo: 0,
        };

        data.forEach(item => {
          if (item.nivel_de_riesgo === 'Alto') riskCounts.Alto = item.cantidad;
          if (item.nivel_de_riesgo === 'Medio') riskCounts.Medio = item.cantidad;
          if (item.nivel_de_riesgo === 'Bajo') riskCounts.Bajo = item.cantidad;
        });

        // Actualiza los datos del gráfico con los valores de la API
        setChartData(prevData => ({
          ...prevData,
          series: [riskCounts.Alto, riskCounts.Medio, riskCounts.Bajo]
        }));
      } catch (error) {
        console.error('Error al obtener los datos de la API', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <ReactApexChart options={chartData.options} series={chartData.series} type="donut" height={165} />
    </div>
  );
};

export default CirculeChart;
