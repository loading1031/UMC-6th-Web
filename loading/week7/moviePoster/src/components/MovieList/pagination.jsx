import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import {
  BackgroundBasic,
  PaginationButton,
  PaginationWrapper,
  PosterWrapper,
  Spinner,
  WhiteSpan,
} from "./styles";

function Pagination({ path }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false); // 로딩 상태 추가
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const endpoint = `${import.meta.env.VITE_API_URL}movie/${path}?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=ko-KR&page=${page}`;

  useEffect(() => {
    setLoading(true); // 데이터 요청 전 로딩 시작
    fetch(endpoint)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setMovies(response.results);
        setTotalPages(response.total_pages);
        setLoading(false); // 데이터 로딩 완료 후 로딩 상태 해제
      });
  }, [endpoint]);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

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
      <PaginationWrapper>
        <PaginationButton onClick={handlePreviousPage} disabled={page === 1}>
          이전
        </PaginationButton>
        <WhiteSpan>
          {page} / {totalPages}
        </WhiteSpan>
        <PaginationButton
          onClick={handleNextPage}
          disabled={page === totalPages}
        >
          다음
        </PaginationButton>
      </PaginationWrapper>
    </BackgroundBasic>
  );
}

export default Pagination;
