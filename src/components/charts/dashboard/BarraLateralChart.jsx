import React, { useEffect, useState } from 'react';
import ApexCharts from 'react-apexcharts';

const RiesgoChart = () => {
  const [chartOptions, setChartOptions] = useState({
    series: [
      {
        name: 'Riesgo',
        type: 'column',
        data: []
      },
      {
        name: 'Total',
        type: 'line',
        data: []
      }
    ],
    chart: {
      height: 350,
      type: 'line'
    },
    stroke: {
      width: [0, 4]
    },
    title: {
      text: 'Mas recurrentes'
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
      formatter: function (val) {
        return val.toFixed(1); // Redondea las etiquetas de datos a 1 decimal
      }
    },
    labels: [
      '01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', 
      '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', 
      '11 Jan 2001', '12 Jan 2001'
    ],
    yaxis: [
      {
        title: {
          text: 'Cantidad'
        },
        labels: {
          formatter: function (val) {
            return val.toFixed(1); // Redondea los valores del eje y a 1 decimal
          }
        }
      },
      {
        opposite: true,
        title: {
          text: 'Cantidad'
        },
        labels: {
          formatter: function (val) {
            return val.toFixed(1); // Redondea los valores del eje y derecho a 1 decimal
          }
        }
      }
    ]
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}top_riesgos`);
        const data = await response.json();

        const blogData = data.map(item => item.cantidad);
        const socialMediaData = data.map(item => item.cantidad * 0.1);

        setChartOptions(prevOptions => ({
          ...prevOptions,
          series: [
            { ...prevOptions.series[0], data: blogData },
            { ...prevOptions.series[1], data: socialMediaData }
          ],
          labels: data.map(item => item.riesgo)
        }));
      } catch (error) {
        console.error('Error al obtener los datos de la API', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="chart">
      <ApexCharts options={chartOptions} series={chartOptions.series} type="line" height={350} />
    </div>
  );
};

export default RiesgoChart;
