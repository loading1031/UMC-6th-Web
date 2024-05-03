import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Overview } from "./overview";
import {
  ContentText,
  Poster,
  PosterContainer,
  Title,
  VoteAverage,
} from "./styles";

function Movie({ movie }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    console.log("mouse on");
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    console.log("mouse left");
    setIsHovered(false);
  };

  const goToMovieDetail = () => {
    const encodedTitle = encodeURIComponent(movie.original_title); // 영화 제목을 URI 컴포넌트로 인코딩
    navigate(`/movie/${encodedTitle}`, { state: { ...movie } });
  };

  return (
    <PosterContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={goToMovieDetail}
    >
      <Poster
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <ContentText>
        <Title>{movie.title}</Title>
        <VoteAverage>⭐️{movie.vote_average}</VoteAverage>
      </ContentText>
      {isHovered && <Overview title={movie.title} overview={movie.overview} />}
    </PosterContainer>
  );
}

export default Movie;