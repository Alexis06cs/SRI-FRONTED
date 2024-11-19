import React, { useEffect, useState } from 'react';
import './Licenciausuarios2.css'; // Asegúrate de crear este archivo CSS

const Licenciausuarios2 = () => {
  // Estado para almacenar los datos de la API
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // URL base para la API
  const apiUrl = `${import.meta.env.VITE_API_URL}usuarios_licencia_detalle`;

  // Efecto para consumir la API al montar el componente
  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Error en la respuesta de la API');
        }
        const data = await response.json();
        setUsuarios(data); // Guardar los datos en el estado
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUsuarios();
  }, [apiUrl]);

  return (
    <div className="mr_container">
      <div className="mantenedor-riesgos-container">
        <h1>Usuarios</h1>
          <div className='mantenedor-riesgos-container-busqueda'>
              <span>Usuario: </span>
              <input type="text" />
              <button className='mtn_busqueda_user'>Buscar</button>

              <span>Rol: </span>
              <input type="text" />
              <button className='mtn_busqueda_rol'>Buscar</button>
          </div>
        
      </div>
    </div>
  );
};

export default Licenciausuarios2;
