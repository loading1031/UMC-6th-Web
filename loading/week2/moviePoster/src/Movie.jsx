import React from 'react';
import './App.css'

function Movie({ title, posterPath, voteAverage }) {
  const posterURL = `https://image.tmdb.org/t/p/w500/${posterPath}`;

  return (
    <div className='poster'>
      <img src={posterURL} alt={title} style={{ width: '100%',height:'70%' }} />
        <div class="content-text">
            <span className='title'>{title}</span>
            <span className='voteAv'>{voteAverage}</span>   
        </div>  
    </div>
  );
}

export default Movie;
