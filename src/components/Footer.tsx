import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="App-footer">
      <div className="advertisement">
        {/* Espaço reservado para a propaganda do Google */}
        <p>Propaganda do Google</p>
      </div>
      <div className="social-media-links">
        <span>Made by Luiz Santos with <i className="fas fa-heart" style={{color:'#FF0000'}}></i> </span>
      </div>
      <div className='social-media-links'>
      <a href="https://www.linkedin.com/in/luizcsbh" target="_blank" rel="noopener noreferrer" style={{color:'#0b65c2'}}>
          <i className="fa-brands fa-linkedin"></i> 
        </a>
        <a href="https://twitter.com/luizcs" target="_blank" rel="noopener noreferrer" style={{color:'#188CD8'}}>
          <i className="fa-brands fa-twitter"></i> 
        </a>
        <a href="https://github.com/luizcsbh" target="_blank" rel="noopener noreferrer" style={{color:'#000000'}}>
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.patreon.com/luizcsbh" target="_blank" rel="noopener noreferrer" style={{color:'#ec624f'}}>
          <i className="fa-brands fa-patreon"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
