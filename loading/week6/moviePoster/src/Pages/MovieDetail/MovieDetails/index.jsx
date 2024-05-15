import {
  Container,
  MovieContainer,
  ImageContainer,
  ContentContainer,
  StyledH1,
  StyledH2,
  StyledP,
} from "./styles";

function MovieDetails({ movie }) {
  return (
    <Container>
      <MovieContainer>
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
          <StyledP>
            {movie.overview ||
              "TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다."}
          </StyledP>
        </ContentContainer>
      </MovieContainer>
    </Container>
  );
}

export default MovieDetails;
