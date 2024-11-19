import React, { useState } from 'react';
import './MantenedorUsuarios.css'; // Asegúrate de que este archivo contiene los estilos

const MantenedorUsuarios = () => {
  const [modalEditarVisible, setModalEditarVisible] = useState(false);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);

  // Datos ficticios para los usuarios
  const usuarios = [
    { id: 1, username: 'demo', administrador: 'SI', permisos: 'Reportes Usuarios, Parámetros de Seguridad', empresa: 'Minuto verde' },
    { id: 2, username: 'rsoto', administrador: 'NO', permisos: '-', empresa: 'Fashion_park' },
    { id: 3, username: 'sgarcia', administrador: 'SI', permisos: 'Reportes SOD, Accesos Críticos', empresa: 'Compass Group' },
    { id: 4, username: 'fpark', administrador: 'SI', permisos: 'Reportes SOD, Accesos Críticos', empresa: 'Cliente de prueba' },
    { id: 5, username: 'sgarcia', administrador: 'SI', permisos: 'Reportes SOD, Accesos Críticos', empresa: 'Cliente' },
    { id: 6, username: 'rsoto', administrador: 'NO', permisos: '-', empresa: 'Cliente de Prueba' },
    { id: 7, username: 'demo', administrador: 'NO', permisos: '-', empresa: 'Minuto verde' },
  ];

  // Función para mostrar el modal y pasar los datos del usuario seleccionado
  const showModalEditar = (usuario) => {
    setUsuarioSeleccionado(usuario);
    setModalEditarVisible(true);
  };

  // Función para ocultar el modal
  const hideModalEditar = () => {
    setModalEditarVisible(false);
    setUsuarioSeleccionado(null); // Limpiar el usuario seleccionado
  };

  return (
    <div className="mu_container3">
      <div className="usuarios-container3">
        <h1>Listado de usuarios</h1>

        {/* Botón para agregar un usuario */}
        <div className="usuarios-header">
          <button className="btn-agregar">+ Agregar Usuario</button>
        </div>

        <table className="usuarios-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Administrador</th>
              <th>Permisos carga masiva</th>
              <th>Empresa</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.username}</td>
                <td>{usuario.administrador}</td>
                <td>{usuario.permisos}</td>
                <td>{usuario.empresa}</td>
                <td>
                  <div className="acciones-iconos">
                    <button className="btn-cambiar">
                      <i className="fa fa-key" aria-hidden="true"></i> {/* Ícono de llave */}
                    </button>
                    <button className="btn-editar" onClick={() => showModalEditar(usuario)}>
                      <i className="fa fa-pencil" aria-hidden="true"></i> {/* Ícono de editar */}
                    </button>
                    <button className="btn-eliminar">
                      <i className="fa fa-trash" aria-hidden="true"></i> {/* Ícono de eliminar */}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {modalEditarVisible && usuarioSeleccionado && (
          <div className="modal-overlay">
            <div className="md_editar">
              <h2>Editar Usuario</h2>
              <form>
                <div className="modal-header-row">
                  <div className="form-group">
                    <label>Username:</label>
                    <input type="text" value={usuarioSeleccionado.username} readOnly />
                  </div>
                  <div className="form-group">
                    <label>Empresas:</label>
                    <select value={usuarioSeleccionado.administrador}>
                      <option value="SI">SI</option>
                      <option value="NO">NO</option>
                    </select>
                  </div>
                </div>

                <div className="modal-row">
                  <div className="form-group">
                    <label>Reportes SOD:</label>
                    <input type="text" value={usuarioSeleccionado.empresa} />
                  </div>
                  <div className="form-group">
                    <label>Reportes SOD (Carga Excel):</label>
                    <select>
                      <option value="lectura">Lectura</option>
                      <option value="escritura">Escritura</option>
                    </select>
                  </div>
                </div>

                <div className="modal-row">
                  <div className="form-group">
                    <label>Accesos Críticos (Carga Excel):</label>
                    <select>
                      <option value="lectura">Lectura</option>
                      <option value="escritura">Escritura</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Authority Check (Carga Excel):</label>
                    <select>
                      <option value="lectura">Lectura</option>
                      <option value="escritura">Escritura</option>
                    </select>
                  </div>
                </div>

                <div className="modal-row">
                  <div className="form-group">
                    <label>Reportes Usuarios (Carga Excel):</label>
                    <select>
                      <option value="lectura">Lectura</option>
                      <option value="escritura">Escritura</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Parámetros Seguridad (Carga Excel):</label>
                    <select>
                      <option value="lectura">Lectura</option>
                      <option value="escritura">Escritura</option>
                    </select>
                  </div>
                </div>

                <div className="form-buttons-right">
                  <button type="button" className="btn-eliminar">Eliminar</button>
                  <button type="button" className="btn-cancelar2" onClick={hideModalEditar}>Cancelar</button>
                  <button type="submit" className="btn-guardar">Guardar</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MantenedorUsuarios;
