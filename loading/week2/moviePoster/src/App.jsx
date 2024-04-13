import React from 'react';
import Movie from './Movie';
import { moviesData } from './data/moviesData'; // 데이터 파일 임포트
import './App.css';

function App() {
  return (
    <div className='background basic'>
      <h1>Movie List</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {moviesData.results.map(movie => (
          <Movie
            key={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            voteAverage={movie.vote_average}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

