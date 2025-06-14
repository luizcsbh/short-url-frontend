import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="App-footer">
      <div className="footer-content">
        <div className="advertisement">
          <p>Propaganda do Google</p>
        </div>
        
        <div>
          <span>Made by Luiz Santos with <i className="fas fa-heart" style={{color: '#FF0000'}}></i></span>
        </div>
        
        <div className="social-media-links">
          <a href="https://www.linkedin.com/in/luizcsbh" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <i className="fa-brands fa-linkedin" style={{color: '#0b65c2'}}></i> 
          </a>
          <a href="https://twitter.com/luizcs" target="_blank" rel="noopener noreferrer" title="Twitter">
            <i className="fa-brands fa-twitter" style={{color: '#188CD8'}}></i> 
          </a>
          <a href="https://github.com/luizcsbh" target="_blank" rel="noopener noreferrer" title="GitHub">
            <i className="fa-brands fa-github" style={{color: '#000000'}}></i>
          </a>
          <a href="https://www.patreon.com/luizcsbh" target="_blank" rel="noopener noreferrer" title="Patreon">
            <i className="fa-brands fa-patreon" style={{color: '#ec624f'}}></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;