import { useState, useEffect } from "react"; // useState와 useEffect를 react에서 임포트
import { useParams } from "react-router-dom";
import Cast from "./Cast";
import { CastList, CastWrapper, Title } from "./styles";

function Credits() {
  const [credits, setCredits] = useState([]);
  const { id } = useParams();
  const endpoint = `${
    import.meta.env.VITE_API_URL
  }movie/${id}/credits?api_key=${import.meta.env.VITE_API_KEY}&language=ko-KR`;

  useEffect(() => {
    fetch(endpoint)
      .then((response) => {
        if (!response.ok) {
          // 응답 상태가 "ok"가 아닐 때, 즉 200-299 범위 밖일 때
          throw new Error(`CreditHTTP status ${response.status}`); // 오류를 발생시키고 해당 상태 코드를 포함시킴
        }
        return response.json();
      })
      .then((response) => {
        console.log(response);
        setCredits(response.cast);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [endpoint, id]);
  return (
    <CastList>
      <Title>출연진 및 제작진</Title>
      <CastWrapper>
        {credits.map((cast) => (
          <Cast key={cast.id} cast={cast} />
        ))}
      </CastWrapper>
    </CastList>
  );
}

export default Credits;
