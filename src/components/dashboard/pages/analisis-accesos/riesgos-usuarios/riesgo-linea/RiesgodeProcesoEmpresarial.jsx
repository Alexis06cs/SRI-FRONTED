import React, { useEffect, useState } from 'react';
import './RiesgodeProcesoEmpresarial.css';
import { ThreeDots } from 'react-loader-spinner';
import DashboardChart from '../../../../../charts/dashboard/DashboardChart';
import RiesgoDeLinea from './RiesgoDelinea';
import UsuarioRiesgo from './UsuarioRiesgo';
import UsuarioChart from '../../../../../charts/dashboard/UsuariosPorRiesgo';
import DetalleProcesoEmpresarial from './RiesgodeProcesoEmpresarial/DetalleProcesoEmpresarial';
import PeCiclodeCompra from './RiesgodeProcesoEmpresarial/Pe_CiclodeCompra';
import PeCiclodeCompra2 from './RiesgodeProcesoEmpresarial/Pe_CiclodeCompra2';
import RiesgoPorNivelChart from '../../../../../charts/dashboard/riesgoPorNivel';
import RiesgoPorNivelDetails from './RiesgoPorNivelDetails';
import RiesgoEnElTiempo from './RiesgoEnElTiempo';
import RiesgoEnElTiempoTable from './RiesgoEnElTiempo2';
import RiesgosFrecuentes from './RiesgodeProcesoEmpresarial/RiesgosFrecuentes'; // Importa el componente RiesgosFrecuentes
import RiesgoFrecuenteTable from './RiesgodeProcesoEmpresarial/RiesgoFrecuenteTable';

const RiesgoProcesoEmpresarial = () => {
  const [showPeCiclodeCompra, setShowPeCiclodeCompra] = useState(false);
  const [showPeCiclodeCompra2, setShowPeCiclodeCompra2] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSimulationEnabled, setIsSimulationEnabled] = useState(false);
  const [activeChart, setActiveChart] = useState(''); // Estado para controlar el gráfico activo
  const [fadeIn, setFadeIn] = useState(false);

  const handleSimulationToggle = () => {
    setIsSimulationEnabled(!isSimulationEnabled);
  };

  const handleChartSelection = (chartName) => {
    setActiveChart(chartName); // Cambia el gráfico activo
  };

  const handleButtonClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowPeCiclodeCompra(true);
      setShowPeCiclodeCompra2(false);
      setFadeIn(true);
    }, 2000);
  };

  const handleAramosClick = () => {
    setShowPeCiclodeCompra2(true);
    setFadeIn(true);
  };

  useEffect(() => {
    setFadeIn(true);
  }, []);
  
  const [usuario, setUsuario] = useState('');
  const [nivelDeRiesgo, setNivelDeRiesgo] = useState([]);
  const [tipoRiesgo, setTipoRiesgo] = useState([]);

  // Funciones para manejar el cambio de los inputs
  const handleUsuarioChange = (e) => setUsuario(e.target.value);

  const handleNivelDeRiesgoChange = (nivel) => {
    setNivelDeRiesgo((prev) =>
      prev.includes(nivel) ? prev.filter((n) => n !== nivel) : [...prev, nivel]
    );
  };

  const handleTipoRiesgoChange = (tipo) => {
    setTipoRiesgo((prev) =>
      prev.includes(tipo) ? prev.filter((t) => t !== tipo) : [...prev, tipo]
    );
  };

  const handleBuscar = async () => {
    const queryParams = new URLSearchParams({
      usuario: usuario,
      nivel_de_riesgo: nivelDeRiesgo.join(','),
      tipo_riesgo: tipoRiesgo.join(','),
      simulacion: isSimulationEnabled
    });

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}filteredRiesgos?${queryParams}`);
      const data = await response.json();
      console.log(data); 
    } catch (error) {
      console.error('Error al obtener los datos filtrados:', error);
    }
  };
  
  return (
    <div className='rp_container'>
      <div className='rp_container_zero'>
        <div className='rp_container_zero_search_riesgos'>
          <h4>Analisis de riesgo</h4>
          <div className='rp_container_zero_search_riesgos_file_one'>
            <span>Usuarios: </span>
            <input type="text" value={usuario} onChange={handleUsuarioChange} />
            <button className='btn_rp_buscar' onClick={handleBuscar}>Buscar</button>
          </div>
          <div className='rp_container_zero_search_criticidad'>
            <span className='rp_span_criticidad'>C. de Riesgo: </span>
            <input type="checkbox" onChange={() => handleNivelDeRiesgoChange('Alto')} />
            <span>Alto</span>
            <input type="checkbox" onChange={() => handleNivelDeRiesgoChange('Medio')} />
            <span>Medio</span>
            <input type="checkbox" onChange={() => handleNivelDeRiesgoChange('Bajo')} />
            <span>Bajo</span>
          </div>
          <div className='rp_container_zero_search_tipos'>
            <span className='rp_container_tipos'>Tipos de Riesgos: </span>
            <input type="checkbox" onChange={() => handleTipoRiesgoChange('SOD')} />
            <span>SOD</span>
            <input type="checkbox" onChange={() => handleTipoRiesgoChange('AC')} />
            <span>Accion Critica</span>
          </div>
          <div className='rp_container_zero_search_simulacion'>
            <span className='rp_container_simulacion'>Simulación</span>
            <label className="switch">
              <input 
                type="checkbox" 
                checked={isSimulationEnabled} 
                onChange={handleSimulationToggle} 
              />
              <span className="slider"></span>
            </label>
            <span>{isSimulationEnabled ? "ON" : "OFF"}</span>
          </div>
        </div>

        <div className='rp_container_zero_card_2'>
          <div className='rp_container_zero_card2_simulacion'>
            <h4>Simulación Asignación a usuarios</h4>
            <div className='rp_container_zero_card2_simulacion_searchs'>
              <div className='rp_container_zero_card2_simulacion_file1'>
                <span>Rol:</span>
                <input 
                  type="text" 
                  disabled={!isSimulationEnabled} 
                  style={{
                    backgroundColor: !isSimulationEnabled ? 'rgba(160, 160, 160, 0.40)' : 'white',
                    transition: 'background-color 0.3s ease'
                  }} 
                />
                <button className='rp_card2_file1' disabled={!isSimulationEnabled}>Simular</button>
              </div>
              <div className='rp_container_zero_card2_simulacion_file2'>
                <span>Transacciones:</span>
                <input 
                  type="text" 
                  disabled={!isSimulationEnabled} 
                  style={{
                    backgroundColor: !isSimulationEnabled ? 'rgba(160, 160, 160, 0.40)' : 'white',
                    transition: 'background-color 0.3s ease'
                  }}
                />
                <button className='rp_card2_file2' disabled={!isSimulationEnabled}>Simular</button>
              </div>
            </div>
          </div>

          <div className='rp_container_zero_card2_grafico'>
            <h4>Gráficos:</h4>
            <div className="grid">
              <div className="item">
                <span>Proceso Empresarial</span>
                <input
                  type="checkbox"
                  checked={activeChart === 'Proceso Empresarial'}
                  onChange={() => handleChartSelection('Proceso Empresarial')}
                />
              </div>
              <div className="item">
                <span>U. con más Riesgos</span>
                <input
                  type="checkbox"
                  checked={activeChart === 'U. con más Riesgos'}
                  onChange={() => handleChartSelection('U. con más Riesgos')}
                />
              </div>
              <div className="item">
                <span>Nivel de Riesgo</span>
                <input
                  type="checkbox"
                  checked={activeChart === 'Nivel de Riesgo'}
                  onChange={() => handleChartSelection('Nivel de Riesgo')}
                />
              </div>
              <div className="item">
                <span>Riesgos más recurrentes</span>
                <input
                  type="checkbox"
                  checked={activeChart === 'Riesgos más recurrentes'}
                  onChange={() => handleChartSelection('Riesgos más recurrentes')}
                />
              </div>
              <div className="item">
                <span>Riesgo en el Tiempo</span>
                <input
                  type="checkbox"
                  checked={activeChart === 'Riesgo en el Tiempo'}
                  onChange={() => handleChartSelection('Riesgo en el Tiempo')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='rp_container_one'>
        <RiesgoDeLinea />
        <div className={`rp_container_graphic fade-in-content ${fadeIn ? 'show' : ''}`}>
          {isLoading ? (
            <div className="loader-overlay">
              <ThreeDots
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="three-dots-loading"
              />
            </div>
          ) : (
            <>
              {activeChart === 'Proceso Empresarial' ? (
                <DashboardChart />
              ) : activeChart === 'U. con más Riesgos' ? (
                <UsuarioChart limit={5} />
              ) : activeChart === 'Nivel de Riesgo' ? (
                <RiesgoPorNivelChart />
              ) : activeChart === 'Riesgos más recurrentes' ? (
                <RiesgosFrecuentes />
              ) : activeChart === 'Riesgo en el Tiempo' ? (
                <RiesgoEnElTiempo />
              ) : (
                <DashboardChart />
              )}
            </>
          )}
        </div>
      </div>

      <div className='rp_container_two'>
        {activeChart === 'U. con más Riesgos' ? (
          <UsuarioRiesgo itemsPerPage={10} />
        ) : activeChart === 'Nivel de Riesgo' ? (
          <RiesgoPorNivelDetails />
        ) : activeChart === 'Riesgo en el Tiempo' ? (
          <RiesgoEnElTiempoTable />
        ) : activeChart === 'Riesgos más recurrentes' ? (
          <RiesgoFrecuenteTable />
        ) : (
          <DetalleProcesoEmpresarial onButtonClick={handleButtonClick} />
        )}
      </div>
    </div>
  );
};

export default RiesgoProcesoEmpresarial;
