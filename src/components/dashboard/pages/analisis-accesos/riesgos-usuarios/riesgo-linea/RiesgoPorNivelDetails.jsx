import React, { useEffect, useState } from 'react';

const RiesgoPorNivelDetails = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedLevel, setSelectedLevel] = useState(null);
    const [riskData, setRiskData] = useState([]);
    const [totalRisk, setTotalRisk] = useState(0);

    // Obtiene datos de la API y calcula el total
    useEffect(() => {
        const fetchRiskData = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}niveles_riesgo`);
                const data = await response.json();

                // Calcula el total de riesgos
                const total = data.reduce((sum, item) => sum + item.cantidad, 0);
                setTotalRisk(total);
                setRiskData(data);
            } catch (error) {
                console.error('Error al obtener datos de la API:', error);
            }
        };

        fetchRiskData();
    }, []);

    // Controla la selección de nivel de riesgo
    const handleLevelSelect = (level) => {
        setSelectedLevel(level);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="riesgo-container2">
            <div className="riesgo-container-card-2">

                {/* Tabla de detalles */}
                <div className="table-container2">
                    <h2>Detalles por Riesgos por Nivel</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Nivel</th>
                                <th>Riesgo</th>
                                <th>Porcentaje</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {riskData.map((item) => (
                                <tr key={item.nivel_de_riesgo}>
                                    <td>{item.nivel_de_riesgo}</td>
                                    <td>{item.cantidad.toLocaleString()}</td>
                                    <td>{((item.cantidad / totalRisk) * 100).toFixed(2)}%</td>
                                    <td>
                                        <button
                                            className="detalles-btn"
                                            onClick={() => handleLevelSelect(item.nivel_de_riesgo)}
                                        >
                                            Detalles
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td>Total</td>
                                <td>{totalRisk.toLocaleString()}</td>
                                <td>100.00%</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Detalles del Nivel: {selectedLevel}</h2>
                        <p>
                            A continuación, te mostramos información detallada del nivel de riesgo seleccionado: <strong>{selectedLevel}</strong>
                        </p>
                        <ul>
                            <li><strong>Total de Incidentes:</strong> {selectedLevel === 'Alto' ? 18175 : selectedLevel === 'Medio' ? 23422 : 231}</li>
                            <li><strong>Porcentaje del Total:</strong> {selectedLevel === 'Alto' ? '35%' : selectedLevel === 'Medio' ? '25%' : '15%'}</li>
                            <li><strong>Tiempo Promedio de Resolución:</strong> {selectedLevel === 'Alto' ? '72 horas' : selectedLevel === 'Medio' ? '48 horas' : '24 horas'}</li>
                            <li><strong>Categorías de Incidentes:</strong></li>
                            <ul>
                                {selectedLevel === 'Alto' ? (
                                    <>
                                        <li>Fallas críticas del sistema (65%)</li>
                                        <li>Riesgos de seguridad (25%)</li>
                                        <li>Errores financieros (10%)</li>
                                    </>
                                ) : selectedLevel === 'Medio' ? (
                                    <>
                                        <li>Problemas de rendimiento (50%)</li>
                                        <li>Alertas de mantenimiento (30%)</li>
                                        <li>Otros (20%)</li>
                                    </>
                                ) : (
                                    <>
                                        <li>Problemas menores de soporte (60%)</li>
                                        <li>Recomendaciones de mejora (30%)</li>
                                        <li>Otros (10%)</li>
                                    </>
                                )}
                            </ul>
                        </ul>
                        <button className="rpn_button" onClick={closeModal}>Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RiesgoPorNivelDetails;
