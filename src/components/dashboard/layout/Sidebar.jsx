import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './../../auth/login/AuthContext'; // Importar el contexto de autenticación
import '../../../styles/Sidebar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Sidebar = () => {
  const { user } = useAuth(); // Obtener el usuario y su rol desde el contexto
  console.log('Usuario actual:', user); // Log para verificar el valor del usuario

  const [openMenus, setOpenMenus] = useState({
    analisisAccesos: false,
    riesgosUsuarios: false,
    riesgoLinea: false,
    riesgoGeneral: false,
    accesosCriticos: false,
    licenciamiento: false,
    nivelUsuarios: false,
    administracion: false,
    simulacion: false,
    riesgoDeLinea: false,
    mantenedor: false,
    reporteSOD: false,
    cargaFUE: false,
    ReportedeRiesgos: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  const handleLogout = () => {
    localStorage.removeItem('usuario');
    window.location.href = '/';
  };

  return (
    <aside className="sidebar">
      <div className="sidebar__container">
        <div className="sidebar__menu">
          <ul className="sidebar__menu__list">

            {/* Análisis Accesos */}
            <li className="sidebar__element">
              <a className="sidebar__action" href="#" onClick={() => toggleMenu('analisisAccesos')}>
                <i className="fas fa-house"></i> Análisis Accesos
                <i className={`fas fa-caret-${openMenus.analisisAccesos ? 'down' : 'right'}`}></i>
              </a>    

              <div className={`sidebar__action__submenu ${openMenus.analisisAccesos ? 'sidebar__action__submenu--open' : ''}`}>
                {openMenus.analisisAccesos && (
                  <ul className="sidebar__submenu">
                    <li>
                    <Link className="sidebar__action_sub" to="/dashboard/analisis-accesos/riesgos-usuarios/riesgo-linea/riesgo-proceso-empresarial" onClick={() => toggleMenu('riesgosUsuarios')}>
                      Riesgos Usuarios
                      <i className={`fa fa-caret-${openMenus.riesgosUsuarios ? 'down' : 'right'}`}></i>
                    </Link>
                    </li>
                    <li>
                      <a className="sidebar__action_sub" href="#" onClick={() => toggleMenu('accesosCriticos')}>
                        Accesos Críticos
                        <i className={`fa fa-caret-${openMenus.accesosCriticos ? 'down' : 'right'}`}></i>
                      </a>
                      <div className={`sidebar__action__submenu ${openMenus.accesosCriticos ? 'sidebar__action__submenu--open' : ''}`}>
                        {openMenus.accesosCriticos && (
                          <ul className="sidebar__submenu">
                            <li>
                              <a className="sidebar__action_sub2" href="#" onClick={() => toggleMenu('transaccionesCriticas')}>
                                Transacciones Críticas
                                <i className={`fa fa-caret-${openMenus.transaccionesCriticas ? 'down' : 'right'}`}></i>
                              </a>
                              <div className={`sidebar__action__submenu ${openMenus.transaccionesCriticas ? 'sidebar__action__submenu--open' : ''}`}>
                                {openMenus.transaccionesCriticas && (
                                  <ul className="submenu">
                                    <li>
                                      <Link className="sidebar__action_sub3" to="/dashboard/analisis-accesos/accesos-criticos/transacciones-criticas">
                                        Despliegue de Transacciones Críticas en Usuarios
                                      </Link>
                                    </li>
                                  </ul>
                                )}
                              </div>
                            </li>
                            <li>
                              <a className="sidebar__action_sub2" href="#" onClick={() => toggleMenu('objetivosCriticos')}>
                                Objetivos Críticos
                                <i className={`fa fa-caret-${openMenus.objetivosCriticos ? 'down' : 'right'}`}></i>
                              </a>
                              <div className={`sidebar__action__submenu ${openMenus.objetivosCriticos ? 'sidebar__action__submenu--open' : ''}`}>
                                {openMenus.objetivosCriticos && (
                                  <ul className="sidebar__submenu">
                                    <li>
                                      <Link className="sidebar__action_sub3" to="/dashboard/analisis-accesos/accesos-criticos/objetos-criticos">
                                        Despliegue de Objetos Críticos en Usuarios
                                      </Link>
                                    </li>
                                  </ul>
                                )}
                              </div>
                            </li>
                          </ul>
                        )}
                      </div>
                    </li>
                    <li>
                    <Link className="sidebar__action_sub" to="/dashboard/reporte-riesgos" onClick={() => toggleMenu('ReportedeRiesgos')}>
                       Reporte de Riesgos
                      <i className={`fa fa-caret-${openMenus.ReportedeRiesgos ? 'down' : 'right'}`}></i>
                    </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>

            {/* Licenciamiento (FUE) */}
            <li className="sidebar__element">
              <a className="sidebar__action" href="#" onClick={() => toggleMenu('licenciamiento')}>
                <i className="fa-solid fa-database"></i> Licenciamiento (FUE)
                <i className={`fa fa-caret-${openMenus.licenciamiento ? 'down' : 'right'}`}></i>
              </a>
              <div className={`sidebar__action__submenu ${openMenus.licenciamiento ? 'sidebar__action__submenu--open' : ''}`}>
                {openMenus.licenciamiento && (
                  <ul className="sidebar__submenu">
                    <li>
                    <Link className="sidebar__action_sub" to="/dashboard/licenciamiento-fue/nivel-usuarios/simulacion">
                                Nivel de Usuarios
                    </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>

            {/* Administración - Visible solo para administradores */}
            {user?.rol && user.rol.toLowerCase() === 'admin' && (
              <li className="sidebar__element">
                <a className="sidebar__action" href="#" onClick={() => toggleMenu('administracion')}>
                  <i className="fa-solid fa-sliders"></i> Administración
                  <i className={`fa fa-caret-${openMenus.administracion ? 'down' : 'right'}`}></i>
                </a>
                <div className={`sidebar__action__submenu ${openMenus.administracion ? 'sidebar__action__submenu--open' : ''}`}>
                  {openMenus.administracion && (
                    <ul className="sidebar__submenu">
                      <li>
                        <a className="sidebar__action_sub" href="#" onClick={() => toggleMenu('mantenedor')}>
                          Mantenedor
                          <i className={`fa fa-caret-${openMenus.mantenedor ? 'down' : 'right'}`}></i>
                        </a>
                        <div className={`sidebar__action__submenu ${openMenus.mantenedor ? 'sidebar__action__submenu--open' : ''}`}>
                          {openMenus.mantenedor && (
                            <ul className="sidebar__submenu">
                              <li>
                                <Link className="sidebar__action_sub2" to="/dashboard/administracion/mantenedor/empresa">
                                  Mantenedor de Empresa
                                </Link>
                              </li>
                              <li>
                                <Link className="sidebar__action_sub2" to="/dashboard/administracion/mantenedor/usuario">
                                  Mantenedor Usuario
                                </Link>
                              </li>
                            </ul>
                          )}
                        </div>
                      </li>
                      <li>
                        <a className="sidebar__action_sub" href="#" onClick={() => toggleMenu('reporteSOD')}>
                          ReporteSOD
                          <i className={`fa fa-caret-${openMenus.reporteSOD ? 'down' : 'right'}`}></i>
                        </a>
                        <div className={`sidebar__action__submenu ${openMenus.reporteSOD ? 'sidebar__action__submenu--open' : ''}`}>
                          {openMenus.reporteSOD && (
                            <ul className="sidebar__submenu">
                              <li>
                                <Link className="sidebar__action_sub2" to="/dashboard/administracion/reporte-sod/carga-datos-riesgo">
                                  Carga de Datos de Riesgo
                                </Link>
                              </li>
                              <li>
                                <Link className="sidebar__action_sub2" to="/dashboard/administracion/reporte-sod/mantenedor-riesgos">
                                  Mantenedor de Riesgos
                                </Link>
                              </li>
                            </ul>
                          )}
                        </div>
                      </li>
                      <li>
                        <a className="sidebar__action_sub" href="#" onClick={() => toggleMenu('cargaFUE')}>
                          Carga FUE
                          <i className={`fa fa-caret-${openMenus.cargaFUE ? 'down' : 'right'}`}></i>
                        </a>
                        <div className={`sidebar__action__submenu ${openMenus.cargaFUE ? 'sidebar__action__submenu--open' : ''}`}>
                          {openMenus.cargaFUE && (
                            <ul className="sidebar__submenu">
                              <li>
                                <Link className="sidebar__action_sub2" to="/dashboard/administracion/carga-fue/mantenedor-ruleset">
                                  Mantenedor de Ruleset
                                </Link>
                              </li>
                            </ul>
                          )}
                        </div>
                      </li>
                      <li>
                        <Link className="sidebar__action" to="/dashboard/administracion/log">
                          Log
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </li>
            )}
          </ul>
        </div>
        <button className="logout" onClick={handleLogout}>
          Salir
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
