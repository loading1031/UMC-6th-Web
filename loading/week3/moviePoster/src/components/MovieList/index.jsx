import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { BackgroundBasic, PosterWrapper, Spinner } from "./styles";

function MovieList({ path }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false); // 로딩 상태 추가
  const endpoint = `${import.meta.env.VITE_API_URL}movie/${path}?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=ko-KR`;

  useEffect(() => {
    setLoading(true); // 데이터 요청 전 로딩 시작
    fetch(endpoint)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setMovies((prev) => [...prev, ...response.results]);
        setLoading(false); // 데이터 로딩 완료 후 로딩 상태 해제
      });
  }, [endpoint]);

  if (loading) {
    return <Spinner />; // 로딩 중 스피너 표시
  }

  return (
    <BackgroundBasic>
      <PosterWrapper>
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </PosterWrapper>
    </BackgroundBasic>
  );
}

export default MovieList;
