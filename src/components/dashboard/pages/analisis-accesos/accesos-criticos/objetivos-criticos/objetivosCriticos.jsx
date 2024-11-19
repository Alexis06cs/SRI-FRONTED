import React from 'react';
import './objetivosCriticos.css';

const ObjetosCriticos = () => {
  return (
    <div className="oc_container">
        <div className='oc_container_card'>
        <h1 className='titulo'> Despliegue de Objetos Críticos en usuarios</h1>
            <div className='oc_container_filters'>
                <div>
                    <label htmlFor="fila">Fila: </label>
                    <select name="fila" id="fila">
                        <option value="">Select</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="riesgo">Nivel Riesgo: </label>
                    <select name="riesgo" id="riesgo">
                        <option value="">Select</option>
                    </select>
                </div>
                <button className='btn_buscar'>Buscar</button>
                <button className='btn_histrograma'>Histograma</button>
                <button className='btn_exportar_excel'>Exportar a Excel</button>
            </div>
            <div className='oc_container_table'>
                <table>
                    <thead>
                        <tr>
                            <th>Lugar</th>
                            <th>Objeto</th>
                            <th>Campo</th>
                            <th>Valor</th>
                            <th>Descripción</th>
                            <th>Cantidad</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>COM_PRD</td>
                            <td>ACTVT</td>
                            <td>02</td>
                            <td>Determina si un usuario está autorizado</td>
                            <td>18</td>
                            <td><button>Histograma</button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>S_USER</td>
                            <td>ACTVT</td>
                            <td>01</td>
                            <td>Permite modificar grupos</td>
                            <td>20</td>
                            <td><button>Histograma</button></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>S_TABU</td>
                            <td>ACTVT</td>
                            <td>01</td>
                            <td>Permite actualizar tablas</td>
                            <td>25</td>
                            <td><button>Histograma</button></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>S_PROJECT</td>
                            <td>ACTVT</td>
                            <td>FUGR</td>
                            <td>Acceso customizing</td>
                            <td>16</td>
                            <td><button>Histograma</button></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>S_ADMI</td>
                            <td>S_ADMI</td>
                            <td>02</td>
                            <td>Permite modificar grupos</td>
                            <td>17</td>
                            <td><button>Histograma</button></td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>S_DEVELOP</td>
                            <td>S_ADMI</td>
                            <td>FONT</td>
                            <td>Permite modificar grupos</td>
                            <td>11</td>
                            <td><button>Histograma</button></td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>S_QUERY</td>
                            <td>S_ADMI</td>
                            <td>01</td>
                            <td>Permite modificar grupos</td>
                            <td>13</td>
                            <td><button>Histograma</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
};

export default ObjetosCriticos;
