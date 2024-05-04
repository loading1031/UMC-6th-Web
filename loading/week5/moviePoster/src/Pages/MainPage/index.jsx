import React, { useState, useRef } from "react";
import axios from "axios";
import {
  BottomContainer,
  CenteredContainer,
  InputButtonContainer,
  StyledButton,
  StyledH1,
  StyledInput,
} from "./styles";
import { Search } from "./Search";

function MainPage() {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState(false);
  const [movies, setMovies] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // 폼의 기본 제출 동작 방지
    if (!input.trim()) return;

    const endpoint = `${import.meta.env.VITE_API_URL}search/movie?api_key=${
      import.meta.env.VITE_API_KEY
    }&query=${input}&include_adult=true&language=ko-KR`;

    try {
      const response = await axios.get(endpoint);
      console.log(response.data);
      setMovies(response.data.results);
      setSearch(true);
    } catch (error) {
      console.error("요청을 처리하는 중에 오류가 발생했습니다:", error);
    }
  };

  return (
    <div>
      <CenteredContainer>
        <StyledH1>환영합니다</StyledH1>
      </CenteredContainer>
      <BottomContainer>
        <StyledH1 style={{ fontSize: "48px" }}>📽️ Find your movies!</StyledH1>
        <form onSubmit={handleSubmit}>
          <InputButtonContainer>
            <StyledInput
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <StyledButton
              type="submit" // 버튼 타입을 submit으로 변경 (form 내부에선 생략 가능)
              disabled={!input}
            >
              🔍
            </StyledButton>
          </InputButtonContainer>
        </form>
        {search && <Search movies={movies} />}
      </BottomContainer>
    </div>
  );
}

export default MainPage;
