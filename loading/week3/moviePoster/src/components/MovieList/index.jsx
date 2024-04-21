import React, { useState, useEffect } from 'react';
import Movie from './Movie';
import {BackgroundBasic, PosterWrapper} from './styles';

function MovieList({path}){

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const endpoint = `${import.meta.env.VITE_API_URL}movie/${path}?api_key=${import.meta.env.VITE_API_KEY}&language=ko-KR&page=${page}`

  useEffect(() => {
    
    console.log('Fetching movies'); // 로그 추가
    fetch(endpoint)
    .then(response => response.json()) 
    .then(response => {
      console.log('Fetched data:', response); // 데이터 로드 로그
      setMovies(prev => [...prev, ...response.results]);
    });
  }, [page]); // 의존성 배열이 빈 배열이므로 컴포넌트 마운트 시 1회 실행

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const body = document.body;
      const html = document.documentElement;
      const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
      const windowBottom = windowHeight + window.scrollY; // pageYOffset 대신 scrollY 사용
      if (windowBottom >= docHeight - 1) {
        setPage(prevPage => prevPage + 1); // 페이지 번호 증가
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  return (
    <BackgroundBasic>
      <PosterWrapper>
        {movies.map(movie => (
          <Movie
            key={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            voteAverage={movie.vote_average}
            overview={movie.overview}
          />
        ))}
      </PosterWrapper>
    </BackgroundBasic>
  );
}

export default MovieList;