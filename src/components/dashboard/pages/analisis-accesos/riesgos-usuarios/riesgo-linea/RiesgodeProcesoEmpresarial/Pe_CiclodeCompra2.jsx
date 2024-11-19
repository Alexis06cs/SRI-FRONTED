import React from 'react';
import './Pe_CiclodeCompra2.css';

const Pe_CiclodeCompra2 = () => {
    return (
        <section className="peciclo-table-container">
            <h2 className="peciclo-title">Proceso Empresarial: Ciclo de compra</h2>
            <h3 className="peciclo-subtitle">Usuario: ARAMOS</h3>
            <button className="peciclo-button">Exportar a Excel</button>
            <button className="peciclo-button">Configuración</button>

            <div className="peciclo-table-scroll">
                <table className="peciclo-custom-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Usuario</th>
                            <th>Nivel de Riesgos</th>
                            <th>Riesgos</th>
                            <th>Proceso Empresarial</th>
                            <th>Función</th>
                            <th>Tipo de Función</th>
                            <th>Transacción</th>
                            <th>Objetos</th>
                            <th>Texto</th>
                            <th>Campo</th>
                            <th>Valor</th>
                            <th>Valor</th>
                            <th>Valor</th>
                            <th>Descripción de Riesgos</th>
                            <th>Descripción de la función</th>
                            <th>Act/Inac</th>
                            <th>Mitigado U</th>
                            <th>Mitigado E</th>
                            <th>Descripción Mitigación</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <tr key={index}>
                                <td>1</td>
                                <td>ARAMOS</td>
                                <td>Alto</td>
                                <td>ZP03</td>
                                <td>Ciclo de compras</td>
                                <td>1</td>
                                <td>AP01</td>
                                <td>F-51</td>
                                <td>F-BKPF</td>
                                <td>-</td>
                                <td>ACTVT</td>
                                <td>01</td>
                                <td>02</td>
                                <td>AND</td>
                                <td>Crear facturas de vendedor ficticio e iniciarles el pago</td>
                                <td>Procesar facturas de vendedor</td>
                                <td>0</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>08/10/2024</td>
                                <td>12:58</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Pe_CiclodeCompra2;
