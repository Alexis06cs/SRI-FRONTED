import React, { useEffect, useState } from 'react';
import './ReportedeRiesgos.css';

const ReportedeRiesgos = () => {
  const [cargas, setCargas] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [nivelRiesgo, setNivelRiesgo] = useState('');
  const [tipoRiesgo, setTipoRiesgo] = useState('');
  const [descProcEmp, setDescProcEmp] = useState('');
  const [searchUsuario, setSearchUsuario] = useState('');

  const fetchData = async () => {
    setLoading(true);

    const url = searchUsuario
      ? new URL(`${import.meta.env.VITE_API_URL}usuarios_riesgos_por_usuario`)
      : new URL(`${import.meta.env.VITE_API_URL}usuarios_riesgos_filtros_paginado`);

    url.searchParams.append("page", page);
    url.searchParams.append("limit", limit);

    if (searchUsuario) {
      url.searchParams.append("usuario", searchUsuario);
    } else {
      if (nivelRiesgo) url.searchParams.append("nivelRiesgo", nivelRiesgo);
      if (tipoRiesgo) url.searchParams.append("tipoRiesgo", tipoRiesgo);
      if (descProcEmp) url.searchParams.append("descProcEmp", descProcEmp);
    }

    try {
      console.log("Fetching data from:", url.toString());
      const response = await fetch(url);
      const data = await response.json();
      setCargas(data.data);
      setTotalPages(Math.ceil(data.totalRecords / limit));
    } catch (error) {
      console.error('Error al obtener datos:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const handleNextPage = () => {
    if (page < totalPages) setPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage(prevPage => prevPage - 1);
  };

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleApplyFilters = () => {
    setPage(1);
    fetchData(); 
    setShowModal(false); 
  };

  const handleSearch = () => {
    setPage(1);
    fetchData(); 
  };

  return (
    <div className='Card_principal'>
      <div className="log_container">
        <h1>Reporte de Riesgos</h1>
        <div className='filtros_Rriesgos'>
          <div className='buscador_usuario'>
            <span>Buscar: </span>
            <input 
              type="text" 
              placeholder='Escriba un Usuario' 
              value={searchUsuario} 
              onChange={(e) => setSearchUsuario(e.target.value)} 
            />
            <button className='btn_b_rriesgos' onClick={handleSearch}>Buscar</button>
          </div>
          <div className='filtros_Rriesgos2'>
            <span>Fecha inicio: </span>
            <input type="date" />
            <span>Fecha Final</span>
            <input type="date" />
            <button className='btn_ap_filtros' onClick={handleOpenModal}>Aplicar Filtros</button>
            <button className='btn_export_excel'>Exportar a Excel</button>
          </div>
        </div>
        <div className="table_wrapper">
          {loading ? (
            <div className="spinner-container">
              <div className="spinner"></div>
            </div>
          ) : (
            <table className="log_table">
              <thead>
                <tr>
                  <th>Usuario</th>
                  <th>Tipo Usuario</th>
                  <th>Perfil</th>
                  <th>Objeto Autorización</th>
                  <th>Ámbito Autorización</th>
                  <th>Valor Autorización</th>
                  <th>Rol</th>
                  <th>Nivel de Riesgo</th>
                  <th>Riesgo</th>
                  <th>Tipo Función</th>
                  <th>Campo</th>
                  <th>Valor Desde</th>
                  <th>Valor Hasta</th>
                  <th>Condición</th>
                  <th>Descripción de Riesgo</th>
                  <th>Descripción de Función</th>
                  <th>Tipo Riesgo</th>
                  <th>Proceso Empresarial</th>
                  <th>Descripción Proceso Empresarial</th>
                  <th>Fecha</th>
                </tr>
              </thead>
              <tbody>
                {cargas.map((carga, index) => (
                  <tr key={index}>
                    <td>{carga.usuario}</td>
                    <td>{carga.tipo_usuario}</td>
                    <td>{carga.perfil}</td>
                    <td>{carga.objeto_autorizacion}</td>
                    <td>{carga.ambito_autorizacion}</td>
                    <td>{carga.valor_autorizacion1}</td>
                    <td>{carga.rol}</td>
                    <td>{carga.nivel_de_riesgo}</td>
                    <td>{carga.riesgo}</td>
                    <td>{carga.tipo_funcion}</td>
                    <td>{carga.campo}</td>
                    <td>{carga.valor_desde}</td>
                    <td>{carga.valor_hasta}</td>
                    <td>{carga.condicion}</td>
                    <td>{carga.descripcion_riesgo}</td>
                    <td>{carga.descripcion_funcion}</td>
                    <td>{carga.tipo_riesgo}</td>
                    <td>{carga.proceso_empresarial}</td>
                    <td>{carga.desc_proc_emp}</td>
                    <td>{carga.fecha}</td>
                  </tr>
                ))}
                {/* Filas vacías para mantener el espacio en la tabla */}
                {Array.from({ length: limit - cargas.length }).map((_, index) => (
                  <tr key={`empty-${index}`} className="empty-row">
                    <td colSpan="20">&nbsp;</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <div className="pagination">
          <button onClick={handlePrevPage} disabled={page === 1 || loading} className="pagination-btn">Anterior</button>
          <span>Página {page} de {totalPages}</span>
          <button onClick={handleNextPage} disabled={page === totalPages || loading} className="pagination-btn">Siguiente</button>
        </div>
      </div>

      {/* Modal para filtros */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className='texth2'>Filtros de Riesgos</h2>
            <div>
              <label className='text'>Nivel de Riesgo:</label>
              <select value={nivelRiesgo} onChange={(e) => setNivelRiesgo(e.target.value)}>
                <option value="">Selecciona Nivel de Riesgo</option>
                <option value="Bajo">Bajo</option>
                <option value="Medio">Medio</option>
                <option value="Alto">Alto</option>
              </select>
            </div>
            <div>
              <label className='text'>Tipo de Riesgo:</label>
              <select value={tipoRiesgo} onChange={(e) => setTipoRiesgo(e.target.value)}>
                <option value="">Selecciona Tipo de Riesgo</option>
                <option value="SOD">SOD</option>
                <option value="AC">AC</option>
              </select>
            </div>
            <div>
              <label className='text'>Descripción del Proceso Empresarial:</label>
              <select value={descProcEmp} onChange={(e) => setDescProcEmp(e.target.value)}>
                <option value="">Selecciona Proceso Empresarial</option>
                <option value="Basis">Basis</option>
                <option value="Gestión de pedidos">Gestión de pedidos</option>
                <option value="Ciclo de aprovisionamiento">Ciclo de aprovisionamiento</option>
                <option value="Finanzas">Finanzas</option>
                <option value="Gestión de materiales">Gestión de materiales</option>
                <option value="Recursos humanos y cálculo de nómina">Recursos humanos y cálculo de nómina</option>
                <option value="Aplicación compuesta">Aplicación compuesta</option>
              </select>
            </div>
            <button className='btn_modals' onClick={handleCloseModal}>Cerrar</button>
            <button className='btn_modals2' onClick={handleApplyFilters}>Aplicar Filtros</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportedeRiesgos;
