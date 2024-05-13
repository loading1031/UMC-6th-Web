import styled from "styled-components";

export const SearchContainer = styled.div`
  background-color: #181b37;
  margin-top: 20px;
  margin-left: 15%;
  margin-right: 15%;
  overflow-y: auto; // 세로 스크롤 활성화
  overflow-x: hidden; // 가로 스크롤 비활성화
  padding: 20px; // 내부 패딩 추가
  height: 70Vh;// 고정 높이 설정

  // 파이어폭스의 스크롤바 스타일링
  scrollbar-color: #f6cf50 #2c2f4c; // 스크롤바 색상과 트랙 색상
  scrollbar-width: thin; // 스크롤바의 폭
`;

export const PosterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
