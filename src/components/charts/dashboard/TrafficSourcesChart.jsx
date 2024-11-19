import React from 'react';
import ReactApexChart from 'react-apexcharts';

const TrafficSourcesChart = () => {
  // Configuración del gráfico
  const options = {
    series: [{
      name: 'Alto',
      type: 'line',
      data: [440, 505, 414, 671,204]
    }, {
      name: 'Medio',
      type: 'line',
      data: [23, 42, 35, 27, 43]
    },
    {
      name: 'Bajo',
      type: 'line',
      data: [33, 12, 25, 47, 13]
    }],
    chart: {
      height: 350,
      type: 'line',
    },
    stroke: {
      width: [4, 4, 4] // Ajusta todas las líneas al mismo grosor
    },
    colors: ['#B02417', '#DE8343', '#A3A7AD'], // Colores personalizados para cada línea
    title: {
      text: 'Riesgos de Usuarios en el Tiempo'
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1]
    },
    labels: ['01 Jul 2024', '01 Agos 2024', '01 Sep 2024', '01 Oct 2024', '01 Nov 2024'],
    yaxis: [{
      title: {
        text: 'Cantidad de riesgos',
      },
    }, {
      opposite: true,
      title: {
        text: ' ',
      }
    }]
  };

  return (
    <div id="chart">
      <ReactApexChart options={options} series={options.series} type="line" height={300} />
    </div>
  );
};

export default TrafficSourcesChart;
