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
  
  return (
      <MovieList path='popular' API_KEY={API_KEY} API_URL={API_URL}/>
    );
}

export default Popular;