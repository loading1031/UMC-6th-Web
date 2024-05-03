import styled from "styled-components";

export const Container = styled.div``;

export const StyledFieldset = styled.fieldset`
  border: none; // 테두리 제거
  position: relative; // 상대 위치 설정
  margin-top: 10%;
  padding-top: 5%; // 상단 테두리와 legend 사이의 공간 확보
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center; // 세로 방향 중앙 정렬
`;

export const StyledLegend = styled.legend`
  padding: 0 5px; // 텍스트 주변 패딩
  width: auto;
  margin: auto; // 자동 마진으로 중앙 정렬, absolute 없이
  color: white;
  font-size: 30px;
`;

export const StyledH1 = styled.h1`
  color: white;
  text-size: 30px;
`;

export const StyledInput = styled.input`
  margin-left: 35%;
  margin-right: 35%;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 20px;
`;
