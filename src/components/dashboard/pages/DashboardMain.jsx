import React, { useState, useEffect } from 'react';
import '../../../styles/DashboardMain.css'; // Asegúrate de tener el CSS correcto
import DashboardChart from '../../charts/dashboard/DashboardChart.jsx';
import CirculeChart from '../../charts/dashboard/CirculeChart.jsx';
import TrafficSourcesChart from '../../charts/dashboard/TrafficSourcesChart.jsx';
import AreaChart from '../../charts/dashboard/AreaChart.jsx';

const DashboardMain = () => {
  const [totalRiesgosSOD, setTotalRiesgosSOD] = useState(0);
  const [totalRiesgosAC, setTotalRiesgosAC] = useState(0);
  const [totalUsuarios, setTotalUsuarios] = useState(0);
  const [totalUsuariosConRiesgo, setTotalUsuariosConRiesgo] = useState(0);
  const [totalRiesgos, setTotalRiesgos] = useState(0); // Estado para almacenar la suma total de riesgos

  // Función para obtener los datos de cada API y actualizar los estados
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch para /conteoSOD
        const responseSOD = await fetch(`${import.meta.env.VITE_API_URL}conteoSOD`);
        const dataSOD = await responseSOD.json();
        console.log('Data SOD:', dataSOD);
        setTotalRiesgosSOD(dataSOD.TOTAL_SOD || 0);

        // Fetch para /conteoAC
        const responseAC = await fetch(`${import.meta.env.VITE_API_URL}conteoAC`);
        const dataAC = await responseAC.json();
        console.log('Data AC:', dataAC);
        setTotalRiesgosAC(dataAC.TOTAL_SOD || 0);

        // Fetch para /totalUsers
        const responseUsuarios = await fetch(`${import.meta.env.VITE_API_URL}totalUsers`);
        const dataUsuarios = await responseUsuarios.json();
        console.log('Data Usuarios:', dataUsuarios);
        setTotalUsuarios(dataUsuarios.total || 0);

        // Fetch para /usuarios_riesgos
        const responseUsuariosRiesgo = await fetch(`${import.meta.env.VITE_API_URL}usuarios_riesgos`);
        const dataUsuariosRiesgo = await responseUsuariosRiesgo.json();
        console.log('Data Usuarios Riesgo:', dataUsuariosRiesgo);
        setTotalUsuariosConRiesgo(dataUsuariosRiesgo.TOTAL_USER || 0);

        // Fetch para niveles de riesgo
        const responseRiesgo = await fetch(`${import.meta.env.VITE_API_URL}niveles_riesgo`);
        const dataRiesgo = await responseRiesgo.json();
        console.log('NIVELES DE RIESGO:', dataRiesgo);
        const total = dataRiesgo.reduce((acc, item) => acc + parseInt(item.cantidad), 0);
        console.log(total);
        setTotalRiesgos(total);
      } catch (error) {
        console.error('Error al obtener los datos', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="db_container">
      <div className='db_container_intro'>
        <div className="db_container db__container--cards">
          <div className='db_continer_intro_card'>
            <div className="db_container_card1">
              <div className="card-header">
                <h3>Total de Usuarios</h3>
              </div>
              <div className='header-chart'>
                <p className="total-number">{totalUsuarios}</p>
                <div className="card-chart">
                  <AreaChart /> {/* Importamos el gráfico de área */}
                </div>
              </div>
              <hr />
              <div className="card-footer">
                <p className="increment">
                  <span className="increment-icon">↑</span>
                  <span className="increment-value">+20%</span>
                  Variación
                </p>
              </div>
            </div>

            <div className="db_container_card2">
              <div className="card-header">
                <h3>Total Riesgos Segregación Funciones (SOD) en usuarios </h3>
              </div>
              <div className='header-chart'>
                <p className="total-number-sod">{totalRiesgosSOD}</p>
                <div className="card-chart">
                  <AreaChart /> {/* Importamos el gráfico de área */}
                </div>
              </div>
              <hr />
              <div className="card-footer">
                <p className="increment">
                  <span className="increment-icon">↑</span>
                  <span className="increment-value">+0.2%</span>
                  <span className='p_sod'>Variación</span>
                </p>
              </div>
            </div>

            <div className="db_container_card3">
              <div className="card-header">
                <h3>Total de Riesgo Accion Critica En Usuarios</h3>
              </div>
              <div className='header-chart'>
                <p className="total-number">{totalRiesgosAC}</p>
                <div className="card-chart">
                  <AreaChart /> {/* Importamos el gráfico de área */}
                </div>
              </div>
              <hr />
              <div className="card-footer">
                <p className="increment">
                  <span className="increment-icon">↑</span>
                  <span className="increment-value">+10%</span>
                  Variación
                </p>
              </div>
            </div>

            <div className="db_container_card4">
              <div className="card-header">
                <h3>Total de Usuarios con Riesgo</h3>
              </div>
              <div className='header-chart'>
                <p className="total-number">{totalUsuariosConRiesgo}</p>
                <div className="card-chart">
                  <AreaChart /> {/* Importamos el gráfico de área */}
                </div>
              </div>
              <hr />
              <div className="card-footer">
                <p className="increment">
                  <span className="increment-icon">↑</span>
                  <span className="increment-value">+20%</span>
                  Variación
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='db_container_intro_grafico'>
        <div className='db_container_intro_grafico_medium'>
          <DashboardChart />
        </div>
      </div>
      <div className='db_container_intro_graficos_finales'>
        <div className='db_container_intro_graficos_finales_1'>
          <div className="riesgo-por-nivel-card">
            <h3 className="titulo-grafico">RIESGOS POR NIVEL</h3>
            <p className="total-riesgos">{totalRiesgos}</p>
            <p className="descripcion">TOTAL DE RIESGOS</p>
            <hr />
            <div className='circulechart'>
              <CirculeChart /> {/* Importamos el gráfico */}
            </div>
          </div>
        </div>
        <div className="graficos-finales__container">
          <div className='db_container_intro_graficos_finales_2'>
            <TrafficSourcesChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
