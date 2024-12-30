import React, { useState } from 'react';
import './TransaccionesCriticas.css';
import ReactApexChart from 'react-apexcharts';

const TransaccionesCriticas = () => {
  // Definimos los datos y opciones del gráfico
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['01/07/2021', '02/07/2021', '03/07/2021', '04/07/2021', '05/07/2021'],
    },
    yaxis: {
      title: {
        text: 'Cantidad de Impactos'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " Impactos";
        }
      }
    },
    colors: ['#0ABD8C'] 
  });

  const [chartSeries, setChartSeries] = useState([
    {
      name: 'Impactos',
      data: [5, 12, 8, 15, 10]
    }
  ]);

  return (
    <div className="tc_container">
      <div className='tc_container_card'>
        <h1 className="titulo">Transacciones Críticas</h1>
        <div className="card_filters">
          <div className="card_filters_one">
            <label htmlFor="Filas">Filas</label>
            <select id="fechaRiesgo">
              <option>Seleccione una fecha</option>
              <option>17/06/21</option>
              <option>24/06/21</option>
              <option>06/06/21</option>
            </select>
          </div>
          
          <div className="card_filters_two">
            <label htmlFor="Filas">Nivel Riesgo</label>
            <select id="fechaRiesgo">
              <option>Seleccione una fecha</option>
              <option>17/06/21</option>
              <option>24/06/21</option>
              <option>06/06/21</option>
            </select>
          </div>

          <div className="card_filters_tree">
            <label htmlFor="Filas">Proceso principal</label>
            <select id="fechaRiesgo">
              <option>Seleccione una fecha</option>
              <option>17/06/21</option>
              <option>24/06/21</option>
              <option>06/06/21</option>
            </select>
          </div>
          <div className="card_filter_button">
            <button className="boton"> Buscar</button>
          </div>
        </div>

        <div className="ventas_container">
        <h2>Ventas</h2>
        <div className="table_buttons">
            <button>Histograma</button>
            <button>Exportar a Excel</button>
          </div>
          <div className="table_scroll">
          <table className="ventas_table" >
          <thead>
            <tr>
              <th>Lugar</th>
              <th>Transacción</th>
              <th>Descripción</th>
              <th>Cantidad</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>VD01</td>
              <td>Crear deudor (Comercial)</td>
              <td>23</td>
              <td><button>Histograma</button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>VD01</td>
              <td>Crear deudor (Comercial)</td>
              <td>23</td>
              <td><button>Histograma</button></td>
            </tr>
            <tr>
              <td>3</td>
              <td>VD01</td>
              <td>Crear deudor (Comercial)</td>
              <td>23</td>
              <td><button>Histograma</button></td>
            </tr>
            <tr>
              <td>4</td>
              <td>VD01</td>
              <td>Crear deudor (Comercial)</td>
              <td>23</td>
              <td><button>Histograma</button></td>
            </tr>
          </tbody>
        </table>
          </div>

       
        </div>

        <div class="filters2">
                <h1>Transacciones Criticas </h1>
                <div class="controls">
                    <div class="controls_left">
                        <label htmlFor="fechaRiesgo">Fecha de Riesgo</label>
                        <select id="fechaRiesgo">
                            <option>Seleccione una fecha</option>
                            <option>17/06/21</option>
                            <option>24/06/21</option>
                            <option>06/06/21</option>
                        </select>
                        <button>Buscar</button>
                    </div>
                    <div class="controls_right">
                        <button>Exportar como imagen</button>
                    </div>
                </div>
        </div>


        {/* Gráfico en el div 'graficos_aqui' */}
        <div className="graficos_aqui">
          <ReactApexChart
            options={chartOptions}
            series={chartSeries}
            type="bar"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default TransaccionesCriticas;
