import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="App-header" >
      <h1><i className="fas fa-cut" style={{ marginRight: '10px' }}></i>Encurtador de URL<i className="fas fa-cut" style={{ marginLeft: '10px',transform:'rotate(180deg)' }}></i></h1> 
    </header>
  );
};

export default Header;
