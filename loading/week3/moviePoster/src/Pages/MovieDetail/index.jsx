import { useLocation } from "react-router-dom";
import ForeGround from "./ForeGround";
import { Background, Overlay } from "./styles";

function MovieDetail() {
  const { state: movie } = useLocation();

  return (
    <Background src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}>
      <Overlay />
      <ForeGround />
    </Background>
  );
}

export default MovieDetail;
