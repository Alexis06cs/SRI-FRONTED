import React, { useEffect, useState } from 'react';
import './UsuarioRiesgo.css';
const UsuarioRiesgo = ({ itemsPerPage }) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}usuarios_frecuencia`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error al obtener los datos de la API", error);
      }
    };

    fetchData();
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginatedData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      <table className="details_table">
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Frecuencia</th>
            <th>Porcentaje</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item, index) => (
            <tr key={index}>
              <td>{item.usuario}</td>
              <td>{item.total}</td>
              <td>{((item.total / data.reduce((acc, item) => acc + item.total, 0)) * 100).toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination_usuario">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Atrás
        </button>
        <span>Página {currentPage} de {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default UsuarioRiesgo;
