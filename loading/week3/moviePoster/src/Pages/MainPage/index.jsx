import React, { useState } from "react";
import {
  BottomContainer,
  CenteredContainer,
  InputButtonContainer,
  StyledButton,
  StyledH1,
  StyledInput,
} from "./styles";

function MainPage() {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setInput("");
    }
  };

  return (
    <div>
      <CenteredContainer>
        <StyledH1>환영합니다</StyledH1>
      </CenteredContainer>
      <BottomContainer>
        <StyledH1 style={{ fontSize: "48px" }}>📽️ Find your movies!</StyledH1>
        <InputButtonContainer>
          <StyledInput
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <StyledButton onClick={handleSubmit}>🔍</StyledButton>
        </InputButtonContainer>
      </BottomContainer>
    </div>
  );
}

export default MainPage;
