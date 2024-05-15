import { useState, useEffect } from "react"; // useState와 useEffect를 react에서 임포트
import { useParams, useNavigate } from "react-router-dom";
import ForeGround from "./ForeGround";
import { Background, Overlay } from "./styles";

function MovieDetail() {
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const endpoint = `${import.meta.env.VITE_API_URL}movie/${id}?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=ko-KR`;

  useEffect(() => {
    fetch(endpoint)
      .then((response) => {
        if (!response.ok) {
          // 응답 상태가 "ok"가 아닐 때, 즉 200-299 범위 밖일 때
          throw new Error(`HTTP status ${response.status}`); // 오류를 발생시키고 해당 상태 코드를 포함시킴
        }
        return response.json();
      })
      .then((response) => {
        console.log(response);
        setMovie(response);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        navigate("/404"); // 예외 발생 시 에러 페이지로 리다이렉트
      });
  }, [endpoint, id, navigate, setMovie]);

  return (
    <Background src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}>
      <Overlay />
      <ForeGround movie={movie} />
    </Background>
  );
}

export default MovieDetail;
