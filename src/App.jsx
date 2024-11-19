import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { AuthProvider } from './../src/components/auth/login/AuthContext';
import ProtectedRoute from './components/auth/login/ProtectedRoute';

// Componentes de autenticación
import Login from './components/auth/login/Login';
import Olvidaste from './components/auth/olvidaste/Olvidaste';
import Recuperar from './components/auth/recuperar/Recuperar';

// Componentes del dashboard
import DashboardLayout from './components/dashboard/layout/DashboardLayout';
import AccesosCriticos from './components/dashboard/pages/analisis-accesos/accesos-criticos/AccesosCriticos';
import RiesgoDeLinea from './components/dashboard/pages/analisis-accesos/riesgos-usuarios/riesgo-linea/RiesgoDelinea';
import RiesgoGeneral from './components/dashboard/pages/analisis-accesos/riesgos-usuarios/riesgo-general/RiesgoGeneral';
import Simulacion from './components/dashboard/pages/analisis-accesos/riesgos-usuarios/simulacion/Simulacion';
import AnalisisAccesos from './components/dashboard/pages/analisis-accesos/AnalisisAcceso';
import LicenciamientoFue from './components/dashboard/pages/Licenciamiento-FUE/LicenciamientoFUE';
import Administracion from './components/dashboard/pages/administracion/Administracion';
import DashboardMain from './components/dashboard/pages/DashboardMain';
import NivelUsuarios from './components/dashboard/pages/Licenciamiento-FUE/nivel-usuario/NivelUsuarios';
import LicenciaUsuarios from './components/dashboard/pages/Licenciamiento-FUE/nivel-usuario/licencia-usuarios/LicenciaUsuarios';
import RiesgoProcesoEmpresarial from './components/dashboard/pages/analisis-accesos/riesgos-usuarios/riesgo-linea/RiesgodeProcesoEmpresarial';
import RiesgoPorNivel from './components/dashboard/pages/analisis-accesos/riesgos-usuarios/riesgo-linea/RiesgoPorNivel';
import RiesgoEnElTiempo from './components/dashboard/pages/analisis-accesos/riesgos-usuarios/riesgo-linea/RiesgoEnElTiempo';
import Mantenedor from './components/dashboard/pages/administracion/mantenedor/Mantenedor';
import MantenedorEmpresas from './components/dashboard/pages/administracion/mantenedor/mantenedor-empresas/MantenedorEmpresas';
import MantenedorUsuarios from './components/dashboard/pages/administracion/mantenedor/mantenedor-usuarios/MantenedorUsuarios';
import ReporteSOD from './components/dashboard/pages/administracion/reporteSOD/ReporteSOD';
import CargaDeDatos from './components/dashboard/pages/administracion/reporteSOD/CargaDeDatos/CargaDeDatos';
import MantenedorRiesgos from './components/dashboard/pages/administracion/reporteSOD/MantenedorRiesgo/MantenedorRiesgos';
import CargaFue from './components/dashboard/pages/administracion/cargaFUE/CargaFue';
import MantenedorRuselet from './components/dashboard/pages/administracion/cargaFUE/MantenedordeRuleset/MantenedorRuleset';
import CargaTransacciones from './components/dashboard/pages/administracion/AccesosCriticos/CargaTransacciones/CargaTransacciones';
import TransaccionesCriticas from './components/dashboard/pages/analisis-accesos/accesos-criticos/transacciones-criticas/TransaccionesCriticas';
import ObjetosCriticos from './components/dashboard/pages/analisis-accesos/accesos-criticos/objetivos-criticos/objetivosCriticos';
import Logs from './components/dashboard/pages/administracion/log';
import ReportedeRiesgos from './components/dashboard/pages/analisis-accesos/reporte-riesgos/ReportedeRiesgos';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Rutas de autenticación */}
          <Route path="/" element={<Login />} />
          <Route path="/olvidaste" element={<Olvidaste />} />
          <Route path="/recuperar" element={<Recuperar />} />

          {/* Rutas del dashboard */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            {/* Página principal del dashboard */}
            <Route index element={<DashboardMain />} />
            <Route path="analisis-accesos" element={<AnalisisAccesos />} />
            <Route path="analisis-accesos/riesgos-usuarios/riesgo-linea" element={<RiesgoDeLinea />} />
            <Route path="analisis-accesos/riesgos-usuarios/riesgo-linea/riesgo-proceso-empresarial" element={<RiesgoProcesoEmpresarial />} />
            <Route path="analisis-accesos/riesgos-usuarios/riesgo-linea/riesgo-por-nivel" element={<RiesgoPorNivel />} />
            <Route path="analisis-accesos/riesgos-usuarios/riesgo-linea/riesgo-en-el-tiempo" element={<RiesgoEnElTiempo />} />
            <Route path="analisis-accesos/riesgos-usuarios/riesgo-general" element={<RiesgoGeneral />} />
            <Route path="analisis-accesos/riesgos-usuarios/simulacion" element={<Simulacion />} />
            <Route path="reporte-riesgos" element={<ReportedeRiesgos />} />

            <Route path="analisis-accesos/accesos-criticos" element={<AccesosCriticos />} />
            <Route path="analisis-accesos/accesos-criticos/transacciones-criticas" element={<TransaccionesCriticas />} />
            <Route path="analisis-accesos/accesos-criticos/objetos-criticos" element={<ObjetosCriticos />} />

            {/* Licenciamiento */}
            <Route path="licenciamiento-fue" element={<LicenciamientoFue />} />
            <Route path="licenciamiento-fue/nivel-usuarios" element={<NivelUsuarios />} />
            <Route path="licenciamiento-fue/nivel-usuarios/licencia-usuarios" element={<LicenciaUsuarios />} />
            <Route path="licenciamiento-fue/nivel-usuarios/simulacion" element={<Simulacion />} />

            {/* Rutas de Administración (protegidas para rol admin) */}
            <Route
              path="administracion"
              element={
                <ProtectedRoute requiredRole="admin">
                  <Administracion />
                </ProtectedRoute>
              }
            />
            <Route
              path="administracion/mantenedor"
              element={
                <ProtectedRoute requiredRole="admin">
                  <Mantenedor />
                </ProtectedRoute>
              }
            />
            <Route
              path="administracion/mantenedor/empresa"
              element={
                <ProtectedRoute requiredRole="admin">
                  <MantenedorEmpresas />
                </ProtectedRoute>
              }
            />
            <Route
              path="administracion/mantenedor/usuario"
              element={
                <ProtectedRoute requiredRole="admin">
                  <MantenedorUsuarios />
                </ProtectedRoute>
              }
            />
            <Route
              path="administracion/reporte-sod"
              element={
                <ProtectedRoute requiredRole="admin">
                  <ReporteSOD />
                </ProtectedRoute>
              }
            />
            <Route
              path="administracion/reporte-sod/carga-datos-riesgo"
              element={
                <ProtectedRoute requiredRole="admin">
                  <CargaDeDatos />
                </ProtectedRoute>
              }
            />
            <Route
              path="administracion/reporte-sod/mantenedor-riesgos"
              element={
                <ProtectedRoute requiredRole="admin">
                  <MantenedorRiesgos />
                </ProtectedRoute>
              }
            />
            <Route
              path="administracion/carga-fue"
              element={
                <ProtectedRoute requiredRole="admin">
                  <CargaFue />
                </ProtectedRoute>
              }
            />
            <Route
              path="administracion/carga-fue/mantenedor-ruleset"
              element={
                <ProtectedRoute requiredRole="admin">
                  <MantenedorRuselet />
                </ProtectedRoute>
              }
            />
            <Route
              path="administracion/accesos-criticos/carga-transacciones-criticas"
              element={
                <ProtectedRoute requiredRole="admin">
                  <CargaTransacciones />
                </ProtectedRoute>
              }
            />
            <Route
              path="administracion/log"
              element={
                <ProtectedRoute requiredRole="admin">
                  <Logs />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
