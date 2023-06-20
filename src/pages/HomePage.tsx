import React, { useState } from 'react';
import axios from 'axios';

const HomePage: React.FC = () => {
  const [url, setUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [isEmptyError, setIsEmptyError] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (url.trim() === '') {
      setIsEmptyError(true);
      return;
    }

    setIsEmptyError(false);

    try {
      const response = await axios.post('http://localhost:3000/encurtar', { fullURL: url });
      setShortenedUrl(response.data.short);
      setUrl('');
    } catch (error) {
      console.error('Erro ao encurtar a URL:', error);
    }
  };

  return (
    <div className="App-body" >
      <form onSubmit={handleSubmit}>
        <h2>Encurtar um link <i className="fas fa-link"></i></h2>
        <label>Cole aqui uma URL longa</label>
        <input 
          type="text"
          id="urlInput"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Exemplo: https://www.google.com.br"
          className={isEmptyError ? 'error' : ''}
        />
        {isEmptyError && <p className="error-message">Insira uma url válida como: "https://www.pudim.com.br"</p>}
        <button type="submit" style={{ background: '#FFF103' }}>
          Encurtar
        </button>
      </form>
      {shortenedUrl && (
        <div className="result">
          <p>URL encurtada:</p>
          <textarea readOnly value={`http://localhost:3000/${shortenedUrl}`} />
        </div>
      )}
    </div>
  );
};

export default HomePage;
