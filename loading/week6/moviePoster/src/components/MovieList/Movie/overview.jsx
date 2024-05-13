import { MovieOverview } from "./styles";

export const Overview = ({ title, overview }) => (
  <MovieOverview>
    <p>{title}</p>
    {overview || "TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다."}
  </MovieOverview>
);
