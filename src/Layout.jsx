import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="App">
      <div className="dashboard-container">
        <h2>Brewery Data Dashboard</h2>
        
        {/* Outlet will render either <Dashboard /> or <BreweryDetail /> */}
        <Outlet />
        
      </div>
    </div>
  );
}

export default Layout;