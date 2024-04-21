import React, { useState } from "react";
import {
  ContentText,
  MovieOverview,
  Poster,
  PosterContainer,
  Title,
  VoteAverage,
} from "./styles";

function Movie({ title, posterPath, voteAverage, overview }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    console.log("mouse on");
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    console.log("mouse left");
    setIsHovered(false);
  };

  return (
    <PosterContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Poster
        src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
        alt={title}
      />
      <ContentText>
        <Title>{title}</Title>
        <VoteAverage>⭐️{voteAverage}</VoteAverage>
      </ContentText>
      {isHovered && <MovieOverview>{overview}</MovieOverview>}
    </PosterContainer>
  );
}

export default Movie;
