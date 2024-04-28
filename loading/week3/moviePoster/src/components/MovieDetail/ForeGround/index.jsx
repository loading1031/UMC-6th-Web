import { useLocation } from "react-router-dom";
import {
  Container,
  ImageContainer,
  ContentContainer,
  StyledH1,
  StyledH2,
  StyledP,
} from "./styles";

function ForeGround() {
  const { state: movie } = useLocation();

  return (
    <Container>
      <ImageContainer>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
      </ImageContainer>
      <ContentContainer>
        <StyledH1>{movie.title}</StyledH1>
        <StyledH2>
          평점: {"⭐️".repeat(Math.floor(movie.vote_average))}
        </StyledH2>
        <StyledH2>개봉일 {movie.release_date}</StyledH2>
        <StyledH2>줄거리</StyledH2>
        <StyledP>{movie.overview}</StyledP>
      </ContentContainer>
    </Container>
  );
}

export default ForeGround;