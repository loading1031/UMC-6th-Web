import styled from "styled-components";

export const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: 5fr 5fr;
  align-items: center; // 컨텐츠를 각 열의 수직 중앙에 정렬합니다.
  height: 100%; // 전체 뷰포트 높이로 설정하여 셀이 확장되도록 함
  width: 100%;
  position: absolute; // z-index를 사용하기 위해 필요
  top: 0;
  left: 0;
  z-index: 3;
`;

export const ImageContainer = styled.div`
  justify-self: end; // 왼쪽 열의 콘텐츠를 우측 정렬합니다.
  img {
    width: 80%; // 이미지의 너비를 컨테이너의 너비에 맞춥니다.
    height: auto; // 이미지의 높이를 자동으로 조정합니다.
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center; // 세로 방향 중앙 정렬
`;


export const StyledH1 = styled.h1`
  color: white;
`;

export const StyledH2 = styled.h2`
  color: white;
`;

export const StyledP = styled.p`
  color: white;
  margin-right: 30%;
`;
