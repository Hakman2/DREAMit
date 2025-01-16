import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './styles/header.css';
import './styles/sidebar.css';
import './styles/mainContent.css';

function App() {
  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-layout">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;