import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <div className="advertisement-placeholder">
        {/* Espaço reservado para a propaganda do Google */}
        <p>Propaganda do Google</p>
      </div>
      <Footer />
    </div>
  );
};

export default App;
