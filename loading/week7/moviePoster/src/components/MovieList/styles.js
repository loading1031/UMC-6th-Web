import styled, { keyframes } from "styled-components";

export const BackgroundBasic = styled.div`
  padding: 3%;
  justify-content: space-between;
`;

export const PosterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
`;

export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-top: 8px solid blue;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 2s linear infinite;
  margin: 50px auto; // 스피너를 화면 중앙에 위치시킵니다.
`;
