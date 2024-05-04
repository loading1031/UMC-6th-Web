import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center; // 세로 방향 중앙 정렬
  text-align: center;
`;

export const StyledFieldset = styled.fieldset`
  border: none; // 테두리 제거
  position: relative; // 상대 위치 설정
  margin-top: 5%;
  margin-left: 35%;
  margin-right: 35%;
  padding-top: 3%; // 상단 테두리와 legend 사이의 공간 확보
  padding-left:0;
  padding-right:0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center; // 세로 방향 중앙 정렬
  text-align: left;
`;

export const StyledLegend = styled.legend`
  padding: 0 5px; // 텍스트 주변 패딩
  width: auto;
  margin: 0px auto; // 자동 마진으로 중앙 정렬, absolute 없이
  color: white;
  font-size: 30px;
`;

export const StyledInput = styled.input`
  margin: 5px;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 20px;
`;

export const WarningP = styled.p`
    margin-left:3%;
    color: red;
`;
export const PassP = styled.p`
    color: green;
`;

export const StyledButton = styled.button`
  margin: 15px 35%;
  padding: 20px;
  font-size: 20px;
  box-sizing: border-box;
  border-radius: 20px;
`;

export const WhiteP = styled.p`
  color: white;
`;

export const HorizonDiv = styled.div`
  display: flex;
  margin: auto 35%;
  justify-content: space-between; // 컨테이너 내부 요소들 사이에 공간을 균등하게 배분
  align-items: center; // 수직 중앙 정렬
`;
