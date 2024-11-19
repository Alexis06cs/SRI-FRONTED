import React, { useState } from 'react';
import './MantenedorEmpresas.css';

const MantenedorEmpresas = () => {
  const [modalVisible, setModalVisible] = useState(false);

  // Función para mostrar el modal
  const showModal = () => {
    setModalVisible(true);
  };

  // Función para ocultar el modal
  const hideModal = () => {
    setModalVisible(false);
  };

  // Datos ficticios para las empresas
  const empresas = [
    { id: 1, nombre: 'Compass', logo: '/imagenes/compass-logo.jpg' },
    { id: 2, nombre: 'Fashionspark', logo: '/imagenes/fashionspark-logo.png' },
    { id: 3, nombre: 'Blumar', logo: '/imagenes/compass-logo.jpg' },
    { id: 4, nombre: 'Compass', logo: '/imagenes/fashionspark-logo.png' },
    { id: 5, nombre: 'Fashionspark', logo: '/imagenes/compass-logo.jpg' },
    { id: 6, nombre: 'Blumar', logo: '/imagenes/fashionspark-logo.png' },
  ];

  return (
    <div className="me_container">
      <div className="empresa-container">
        <h1>Lista de Empresa</h1>
        <div className="empresa-header">
          <button className="btn-agregar2" onClick={showModal}>+ Agregar Empresa</button>
        </div>

        <table className="empresa-table">
          <thead>
            <tr>
              <th>Logo Imagen</th>
              <th>Nombre</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {empresas.map((empresa) => (
              <tr key={empresa.id}>
                <td>
                  <img src={empresa.logo} alt={empresa.nombre} className="empresa-logo" />
                </td>
                <td>{empresa.nombre}</td>
                <td>
                  <div className="acciones-iconos">
                    <button className="icon-editar">
                      <i className="fa fa-pencil" aria-hidden="true"></i>
                    </button>
                    <button className="icon-eliminar">
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {modalVisible && (
          <div className="modal-overlay">
            <div className="modal_agregar">
              <h2>Modificar Empresa</h2>
              <form>
                <div className="modal-row">
                  <div className="form-group">
                    <label>Nombre</label>
                    <input type="text" name="nombre" />
                  </div>
                  <div className="form-group">
                    <label>Logo</label>
                    <input type="file" name="logo" />
                  </div>
                  <div className="form-group">
                    <label>Imagen</label>
                    <img src="/imagenes/compass-logo.jpg" alt="Imagen actual" className="imagen-actual" />
                  </div>
                </div>
                <div className="form-buttons-right">
                  <button type="button" className="btn-cancelar3" onClick={hideModal}>Cancelar</button>
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

export default MantenedorEmpresas;
