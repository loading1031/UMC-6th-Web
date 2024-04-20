import React, { useState, useEffect } from 'react';
import Movie from './components/Movie';
import { API_URL,IMAGE_BASE_URL,API_KEY,API_TOKEN } from './Config.js';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=ko-KR`;
    
    fetch(endpoint)
    .then(response => response.json()) 
    .then(response => 
      setMovies(response.results))
  }, []); // 의존성 배열이 빈 배열이므로 컴포넌트 마운트 시 1회 실행

  return (
    <div className='background basic'>
      <h1>Movie List</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {movies.map(movie => (
          <Movie
            key={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            voteAverage={movie.vote_average}
            overview={movie.overview}
          />
        ))}
      </div>
    </div>
  );
}

export default App;


