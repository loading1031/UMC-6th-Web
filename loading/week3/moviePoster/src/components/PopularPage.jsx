import React, { useState, useEffect } from 'react';
import Movie from './MovieList/Movie';
import styled from 'styled-components';
import { useOutletContext } from 'react-router-dom';
import MovieList from './MovieList';

const PosterWrapper = styled.div`
  display: flex;
  flex-wrap : wrap;
  justify-content: center; // 아이템을 중앙 정렬
`;

function Popular(){
   const { API_URL, API_KEY } = useOutletContext();
    //const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=ko-KR&page=${page}`

  /*useEffect(() => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=ko-KR&page=${page}`;
    
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
  */
  

  return (
      <MovieList endpoint={endpoint} setPage={setPage} page={page}/>
    );
}

export default Popular;