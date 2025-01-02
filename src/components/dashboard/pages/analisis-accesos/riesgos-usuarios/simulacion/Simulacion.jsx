import React, { useState, useEffect } from 'react';
import './Simulacion.css';
import LicenciaUsuarios from '../../../Licenciamiento-FUE/nivel-usuario/licencia-usuarios/LicenciaUsuarios';

const Simulacion = () => {
    const [usuario, setUsuario] = useState('');
    const [estadoUsuarios, setEstadoUsuarios] = useState({
        gb_advance_use: false,
        gc_core_use: false,
        gd_self_service_use: false,
    });
    const [resultado, setResultado] = useState([]);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const pageSize = 6;

    const isFilterSelected = Object.values(estadoUsuarios).some(value => value);

    useEffect(() => {
        handleBuscar();
    }, [page]);

    const handleUsuarioChange = (e) => {
        setUsuario(e.target.value.toUpperCase());
    };

    const handleEstadoUsuariosChange = (e) => {
        setEstadoUsuarios({
            ...estadoUsuarios,
            [e.target.name]: e.target.checked,
        });
    };

    const handleBuscar = async () => {
        setLoading(true);
        setError(null); // Limpiar error antes de la búsqueda
        const licenciasSeleccionadas = [];
        if (estadoUsuarios.gb_advance_use) licenciasSeleccionadas.push('GB Advanced Use');
        if (estadoUsuarios.gc_core_use) licenciasSeleccionadas.push('GC Core Use');
        if (estadoUsuarios.gd_self_service_use) licenciasSeleccionadas.push('GD Self-Service Use');

        const url = new URL(`${import.meta.env.VITE_API_URL}usuario_licencia_cara`);
        
        if (usuario) {
            url.searchParams.append('usuario', usuario);
        }
        if (licenciasSeleccionadas.length > 0) {
            url.searchParams.append('licencia', licenciasSeleccionadas[0]);
        }
        
        url.searchParams.append('page', page);

        try {
            const response = await fetch(url.toString());
            const data = await response.json();

            if (response.ok && data.length > 0) {
                setResultado(data);
                setError(null);
            } else {
                setResultado([]);
                setError(data.message || "No se encontraron datos para los filtros seleccionados");
            }
        } catch (error) {
            console.error("Error al buscar usuario y licencias:", error);
            setError("Error al conectar con el servidor");
        } finally {
            setLoading(false);
        }
    };

    const handleNextPage = () => setPage(prevPage => prevPage + 1);
    const handlePrevPage = () => setPage(prevPage => Math.max(prevPage - 1, 1));

    return (
        <div className="simulacion-container">
            <div className="licencia_card2">
                <LicenciaUsuarios />
            </div>
            <h2 className="user">Usuarios</h2>
            <div className="simulacion-filtros">
                <div className="simulacion-seccion">
                    <div className="input-group-simulacion">
                        <label htmlFor="usuarios">Usuarios:</label>
                        <input type="text" id="usuarios" value={usuario} onChange={handleUsuarioChange} />
                        <button className="buscar-btn" onClick={() => { setPage(1); handleBuscar(); }}>Buscar</button>
                    </div>

                    <div className="filtros-container">
                        <div className="estado-usuarios">
                            <label>Tipos de Licencias:</label>
                            <div className="checkbox-group">
                                <input
                                    type="checkbox"
                                    name="gb_advance_use"
                                    checked={estadoUsuarios.gb_advance_use}
                                    onChange={handleEstadoUsuariosChange}
                                /> <span>GB Advance Use</span>
                                <input
                                    type="checkbox"
                                    name="gc_core_use"
                                    checked={estadoUsuarios.gc_core_use}
                                    onChange={handleEstadoUsuariosChange}
                                /> <span> GC Core Use</span>
                                <input
                                    type="checkbox"
                                    name="gd_self_service_use"
                                    checked={estadoUsuarios.gd_self_service_use}
                                    onChange={handleEstadoUsuariosChange}
                                /> <span> GD Self-Service Use</span>
                                <button className="buscar-btn2" onClick={() => { setPage(1); handleBuscar(); }}>Buscar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="table-container">
                {loading ? (
                    <div className="spinner"></div>
                ) : resultado.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Usuarios</th>
                                <th>Tipo Licencia Actual</th>
                            </tr>
                        </thead>
                        <tbody>
                            {resultado.map((res, index) => (
                                <tr key={index}>
                                    <td>{res.usuario}</td>
                                    <td>{res.licencia}</td>
                                </tr>
                            ))}

                            {Array.from({ length: pageSize - resultado.length }).map((_, index) => (
                                <tr key={`empty-${index}`} className="empty-row2">
                                   
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="no-data-message">
                        {error || "No se encontraron resultados"}
                    </div>
                )}
            </div>

            <div className="pagination-controls">
                <button className="pagination-btn" onClick={handlePrevPage} disabled={page === 1 || loading}>Anterior</button>
                <span>Página {page}</span>
                <button className="pagination-btn" onClick={handleNextPage} disabled={loading}>Siguiente</button>
            </div>
        </div>
    );
};

export default Simulacion;
