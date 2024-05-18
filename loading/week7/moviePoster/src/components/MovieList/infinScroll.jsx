import React, { useEffect, useState, useRef } from "react";
import Movie from "./Movie";
import { BackgroundBasic, PosterWrapper, Spinner } from "./styles";

function InfiniteScroll({ path }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false); // 로딩 상태 추가
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const endpoint = `${import.meta.env.VITE_API_URL}movie/${path}?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=ko-KR&page=${page}`;

  useEffect(() => {
    setLoading(true); // 데이터 요청 전 로딩 시작
    fetch(endpoint)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setMovies((prev) => [...prev, ...response.results]);
        setHasMore(response.page < response.total_pages);
        setLoading(false); // 데이터 로딩 완료 후 로딩 상태 해제
      });
  }, [endpoint]);

  const observer = useRef(); // 목적: IntersectionObserver 인스턴스를 저장합니다.
  const lastMovieElementRef = useRef(); // 목적: 마지막 영화 요소를 참조합니다.

  useEffect(() => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPage((prev) => prev + 1);
      }
    });

    if (lastMovieElementRef.current) {
      observer.current.observe(lastMovieElementRef.current);
    }
  }, [loading, hasMore]);

  if (loading) {
    return <Spinner />; // 로딩 중 스피너 표시
  }

  return (
    <BackgroundBasic>
      <PosterWrapper>
        {movies.map((movie, index) => {
          if (movies.length === index + 1) {
            return (
              <div ref={lastMovieElementRef} key={movie.id}>
                <Movie key={movie.id} movie={movie} />
              </div>
            );
          } else {
            return <Movie key={movie.id} movie={movie} />;
          }
        })}
      </PosterWrapper>
    </BackgroundBasic>
  );
}

export default InfiniteScroll;
