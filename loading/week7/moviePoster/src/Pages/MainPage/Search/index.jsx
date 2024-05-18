import Movie from "../../../components/MovieList/Movie";
import { PosterWrapper, SearchContainer } from "./styles";

export const Search = ({ movies }) => {
  return (
    <SearchContainer>
      <PosterWrapper>
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </PosterWrapper>
    </SearchContainer>
  );
};
