import React from 'react';
import './Pe_CiclodeCompra.css';

const PeCiclodeCompra = ({ onUserClick }) => {
    return (
        <section className="table-container">
            <h2>Proceso Empresarial: Ciclo de compras</h2>
            <button className="add">Exportar como Excel</button>

            <table className="custom-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Usuario</th>
                        <th>Nivel</th>
                        <th>Riesgos</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <tr key={index}>
                            <td>1</td>
                            <td>
                                {/* Este botón activa la función handleAramosClick en RiesgoProcesoEmpresarial */}
                                <button className="user-link" onClick={onUserClick}>
                                    ARAMOS
                                </button>
                            </td>
                            <td>Medio</td>
                            <td>Crear factura de vendedor ficticio e iniciar el pago</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default PeCiclodeCompra;
