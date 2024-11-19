import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import '../../../styles/DashboardLayout.css';

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <Navbar />
      <Sidebar />
      <main className="main">
        <section className="main__section main__section--outlet">
          <Outlet />  {/* Aquí se renderizan las diferentes páginas */}
        </section>
      </main>
    </div>
  );
};

export default DashboardLayout;
