import React, { useEffect, useState } from 'react';
import './LicenciaUsuarios.css';

const LicenciaUsuarios = () => {
    const [licencias, setLicencias] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [totalFUE, setTotalFUE] = useState(0);

    // URL base para la API
    const apiUrl = `${import.meta.env.VITE_API_URL}usuarios_licencias`;

    // Efecto para consumir la API al montar el componente
    useEffect(() => {
        const fetchLicencias = async () => {
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Error en la respuesta de la API');
                }
                const data = await response.json();

                // Ordenar las licencias manualmente
                const orderedLicenses = [
                    { Licencia: 'GB Advanced Use', total_usuarios: 0 },
                    { Licencia: 'GC Core Use', total_usuarios: 0 },
                    { Licencia: 'GD Self-Service Use', total_usuarios: 0 }
                ];

                // Llenar los valores de `total_usuarios` según los datos recibidos
                data.forEach((licencia) => {
                    const licenseIndex = orderedLicenses.findIndex(item => item.Licencia === licencia.Licencia);
                    if (licenseIndex !== -1) {
                        orderedLicenses[licenseIndex].total_usuarios = licencia.total_usuarios;
                    }
                });

                setLicencias(orderedLicenses); // Guardar los datos ordenados en el estado

                // Calcular el total de FUE según el tipo de licencia
                let fueSum = 0;
                orderedLicenses.forEach((licencia) => {
                    if (licencia.Licencia === 'GB Advanced Use') {
                        fueSum += licencia.total_usuarios * 1; // 1 FUE por cada GB Advanced Use
                    } else if (licencia.Licencia === 'GC Core Use') {
                        fueSum += licencia.total_usuarios / 5; // 1 FUE por cada 5 GC Core Use
                    } else if (licencia.Licencia === 'GD Self-Service Use') {
                        fueSum += licencia.total_usuarios / 30; // 1 FUE por cada 30 GD Self-Service Use
                    }
                });
                setTotalFUE(fueSum.toFixed(2)); // Redondear a 2 decimales
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchLicencias();
    }, [apiUrl]);

    return (
      <>
        <div className="fue-container">
        <div className="fue">Total FUE: {Math.ceil(totalFUE)}</div>
        </div>
        <div className="mr_container2">
          <div className="mantenedor-riesgos-container">
            <h1>Vista General</h1>
            {loading && <p>Cargando datos...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && (
            <div className="table-responsive">
              <table className="riesgos-table">
                <thead>
                  <tr>
                    <th>Tipo de licencia</th>
                    <th>Cantidad de usuarios</th>
                  </tr>
                </thead>
                <tbody>
                  {licencias.map((licencia, index) => (
                    <tr key={index}>
                      <td>{licencia.Licencia}</td>
                      <td>{licencia.total_usuarios}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
            )}
          </div>
        </div>
      </>
    );
};

export default LicenciaUsuarios;
