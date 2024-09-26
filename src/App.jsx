import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/header/Header';


const App = () => {
  return (
    <Router>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Routes>
          <Route path="/docs"  />
          <Route path="/help"  />
          <Route path="/contact" />
          <Route path="/"/> {/* Ruta per defecte */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
