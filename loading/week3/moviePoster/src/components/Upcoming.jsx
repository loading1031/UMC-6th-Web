import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import MovieList from './MovieList';

function Upcoming(){
    const { API_URL, API_KEY } = useOutletContext();

  return (
    <MovieList path='upcoming' API_KEY={API_KEY} API_URL={API_URL}/>
    );
}

export default Upcoming;