import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import MovieList from './common/MovieList';

function Upcoming(){
    const { API_URL, API_KEY } = useOutletContext();
    const [page, setPage] = useState(1);
    const endpoint = `${API_URL}movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=${page}`

  return (
      <MovieList endpoint={endpoint} setPage={setPage} page={page}/>
    );
}

export default Upcoming;