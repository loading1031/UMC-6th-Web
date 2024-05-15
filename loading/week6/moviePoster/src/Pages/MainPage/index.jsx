import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BottomContainer,
  CenteredContainer,
  FormContainer,
  InputButtonContainer,
  LoadingTxt,
  StyledButton,
  StyledH1,
  StyledInput,
} from "./styles";
import { Search } from "./Search";

function MainPage() {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (!input.trim()) {
        setSearch(false);
        return; // 입력 값이 없는 경우 요청을 보내지 않습니다.
      }

      const endpoint = `${import.meta.env.VITE_API_URL}search/movie?api_key=${
        import.meta.env.VITE_API_KEY
      }&query=${input}&include_adult=true&language=ko-KR`;

      try {
        const response = await axios.get(endpoint);
        console.log(response.data);
        setMovies(response.data.results);
        setSearch(response.data.results.length > 0);
      } catch (error) {
        console.error("요청을 처리하는 중에 오류가 발생했습니다:", error);
        setSearch(false);
      }
    }, 500); // 500ms 후에 실행

    return () => clearTimeout(timeoutId); // 컴포넌트 언마운트시 또는 input 변경시 타이머 취소
  }, [input]); // input 상태가 변할 때마다 이 effect가 실행됩니다.

  return (
    <div>
      <CenteredContainer>
        <StyledH1>환영합니다</StyledH1>
      </CenteredContainer>
      <BottomContainer>
        <StyledH1 style={{ fontSize: "48px" }}>📽️ Find your movies!</StyledH1>
        <FormContainer onSubmit={(e) => e.preventDefault()}>
          <InputButtonContainer>
            <StyledInput
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <StyledButton type="submit" disabled={!input}>
              🔍
            </StyledButton>
          </InputButtonContainer>
        </FormContainer>
        {search ? (
          <Search movies={movies} search={search} />
        ) : (
          input && <LoadingTxt>데이터를 받아오는 중입니다.</LoadingTxt>
        )}
      </BottomContainer>
    </div>
  );
}

export default MainPage;
