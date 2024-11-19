import React from "react";
import './DetalleProcesoEmpresarial.css';

const DetalleProcesoEmpresarial = ({ onButtonClick }) => {
    return (
        <div className="detalle_proceso_empresarial">
          <div className="tabla_header">
            <h3>DETALLE PROCESO EMPRESARIAL</h3>
            <button className="export_excel" onClick={onButtonClick}>
              Exportar como Excel
            </button>
          </div>
          <div className='tabla_contenedor'>
            <table className="details_table">
              <thead>
                <tr>
                  <th>Proceso</th>
                  <th>Riesgo</th>
                  <th>Porcentaje</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Basis</td>
                  <td>804</td>
                  <td>15.54%</td>
                  <td><button className="details_button" onClick={onButtonClick}>Detalles</button></td>
                </tr>
                <tr>
                  <td>Gestión de Inventarios</td>
                  <td>1,223</td>
                  <td>23.64%</td>
                  <td><button className="details_button" onClick={onButtonClick}>Detalles</button></td>
                </tr>
                <tr>
                  <td>Contabilidad Financiera</td>
                  <td>950</td>
                  <td>18.37%</td>
                  <td><button className="details_button" onClick={onButtonClick}>Detalles</button></td>
                </tr>
                <tr>
                  <td>Logística</td>
                  <td>1,035</td>
                  <td>20.03%</td>
                  <td><button className="details_button" onClick={onButtonClick}>Detalles</button></td>
                </tr>
                <tr>
                  <td>Recursos Humanos</td>
                  <td>720</td>
                  <td>13.92%</td>
                  <td><button className="details_button" onClick={onButtonClick}>Detalles</button></td>
                </tr>
                {/* Puedes agregar más filas aquí */}
              </tbody>
              <tfoot>
                <tr>
                  <td>Total</td>
                  <td>5,174</td>
                  <td>100.00%</td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
    );
};

export default DetalleProcesoEmpresarial;
