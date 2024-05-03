import styled from "styled-components";

export const StyledH1 = styled.h1`
  color: white;
  text-align: center;
  margin-top: 50px;
`;

export const CenteredContainer = styled.div`
  display: flex;
  background-color: black;
  justify-content: center;
  align-items: center;
  height: 40vh;
  margin: 0;
`;

export const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 50vh;
`;

export const StyledInput = styled.input`
  flex-grow: 1;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 20px;
`;

export const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  margin-left: 30px;
  padding: 10px 20px;
  border-radius: 50%;
  background-color: #f6cf50;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  align-items: center;
  font-size: 20px;

  &:hover {
    background-color: #45a049;
  }
`;

export const InputButtonContainer = styled.div`
  display: flex;
  width: 40%;
  margin: 20px auto;
`;
