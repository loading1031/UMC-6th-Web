import styled from "styled-components";

export const Background = styled.div`
  position: relative;
  width: 100%; // 컨테이너의 전체 너비
  height: 100vh; // 뷰포트의 높이만큼 설정, 이미지가 전체 화면을 채우도록
  background-image: url(${(props) =>
    props.src}); // 이미지 URL을 props로부터 받음
  background-size: cover; // 이미지가 컨테이너 크기에 맞게 조정되도록
  background-position: center; // 이미지의 중간 부분이 주로 보이도록 조정
  background-repeat: no-repeat; // 배경 이미지가 반복되지 않도록
  overflow: hidden; // 내부 요소가 범위를 벗어나지 않도록 함
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(34, 38, 76, 0.8); // 50% 투명도

  display: flex;
  justify-content: center;
  align-items: center;
`;
