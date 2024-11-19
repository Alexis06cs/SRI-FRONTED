import React, { useEffect, useState } from 'react';
import './RiesgoFrecuenteTable.css';

const RiesgoFrecuenteTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}riesgo_table`);
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los datos de la API:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleExportToExcel = () => {
    // Implementación de exportación a Excel
    console.log('Exportando a Excel...');
  };

  if (loading) {
    return <div>Cargando datos...</div>;
  }

  return (
    <div className="table-container">
      <h2>DATOS</h2>
      <button className="export-button" onClick={handleExportToExcel}>Exportar como Excel</button>
      <table className="riesgo-table">
        <thead>
          <tr>
            <th>Nro</th>
            <th>Riesgo</th>
            <th>Nivel</th>
            <th>Proceso Empresarial</th>
            <th>Cantidad Usuario</th>
            <th>Descripción Riesgo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0, 7).map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td> {/* Números del 1 al 7 */}
              <td>{item.Riegos}</td>
              <td>{item.Nivel}</td>
              <td>{item.Proceso_Empresarial}</td>
              <td>{item.Cantidad_Usuario}</td>
              <td>{item.Descripcion_Riesgo}</td>
              <td>
                <button className="action-button">Histograma Usuario</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RiesgoFrecuenteTable;
