import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { BackgroundBasic, PosterWrapper,Spinner } from "./styles";

function MovieList({ path }) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false); // 로딩 상태 추가
  const endpoint = `${import.meta.env.VITE_API_URL}movie/${path}?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=ko-KR&page=${page}`;

  useEffect(() => {
    setLoading(true); // 데이터 요청 전 로딩 시작
    fetch(endpoint)
      .then((response) => response.json())
      .then((response) => {
        setMovies((prev) => [...prev, ...response.results]);
        setLoading(false); // 데이터 로딩 완료 후 로딩 상태 해제
      });
  }, [endpoint, page]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const body = document.body;
      const html = document.documentElement;
      const docHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      const windowBottom = windowHeight + window.scrollY; // pageYOffset 대신 scrollY 사용
      if (windowBottom >= docHeight - 1) {
        setPage((prevPage) => prevPage + 1); // 페이지 번호 증가
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) {
    return <Spinner />; // 로딩 중 스피너 표시
  }

  return (
    <BackgroundBasic>
      <PosterWrapper>
        {movies.map((movie) => (
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
