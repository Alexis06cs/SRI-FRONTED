import React from 'react';
import ReactApexChart from 'react-apexcharts';

const AreaChart = () => {
  const options = {
    series: [{
      name: 'Riesgos',
      data: [300, 200, 100, 400, 350, 450] // Datos ficticios
    }],
    chart: {
      type: 'area',
      height: 100,
      zoom: {
        enabled: false
      },
      sparkline: {
        enabled: true // Ocultar ejes
      }
    },
    dataLabels: {
      enabled: false // No mostrar etiquetas
    },
    stroke: {
      curve: 'smooth', // Curva suave
      width: 2
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.2, // Más transparencia
        opacityTo: 0.1
      }
    },
    colors: ['#00E396'], // Cambiar color a verde claro
    tooltip: {
      enabled: false // Desactivar el tooltip
    }
  };

  return (
    <div>
      <ReactApexChart options={options} series={options.series} type="area" height={16} />
    </div>
  );
};

export default AreaChart;
