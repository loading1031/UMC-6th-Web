import React,{useState} from 'react';
import styled from 'styled-components';

// 스타일 컴포넌트 정의
const Styled_h1 = styled.h1`
  color: white;
  text-align: center;  // 텍스트 수평 중앙 정렬
  margin-top: 50px;
`;

// 중앙 맞춰주는 컨테이너 스타일
const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;  // 수평 중앙 정렬
  align-items: center;      // 수직 중앙 정렬
  height: 40vh;            // 뷰포트의 전체 높이
  margin: 0;                // 기본 마진 제거
`;

// 바텀 컨테이너
const BottomContainer = styled.div`
    background-color: #181B37;
    display: flex;
    align-items: center;      // 수직 중앙 정렬
    flex-direction: column; // 아이템들을 수직 방향으로 쌓음

    height:50vh;
`
const StyledInput = styled.input`
    flex-grow: 1; // 컨테이너 내에서 가능한 모든 공간을 차지하도록 설정
    padding: 10px; /* 입력 필드 내부의 패딩 */
    box-sizing: border-box; /* 패딩과 테두리를 요소의 총 크기에 포함 */
    border-radius: 20px; /* 입력 필드의 테두리를 둥글게 */
`
const StyledButton = styled.button`
    width: 40px; // 너비와 높이를 같게 설정하여 원형을 만듦
    height: 40px;
    margin-left: 30px;
    padding: 10px 20px;
    border-radius: 50%; /* 버튼의 테두리를 둥글게 */
    background-color: #F6CF50; /* 버튼 배경 색상 */
    color: white; /* 버튼 텍스트 색상 */
    border: none; /* 테두리 제거 */
    cursor: pointer; /* 마우스 오버 시 커서 변경 */
    transition: background-color 0.3s; /* 배경 색상 변화 애니메이션 */
    align-items: center; // 내용을 수직 중앙에 정렬

    font-size: 30px; // 아이콘의 크기를 늘림

    &:hover {
        background-color: #45a049; /* 마우스 오버 시 배경 색상 변경 */
    }
`;
const InputButtonContainer = styled.div`
  display: flex; // flexbox를 사용하여 아이템을 수평으로 정렬
  width: 40%; // 이 너비는 Styled_h1과 일치하게 조정할 수 있습니다
  margin: 20px auto; // 수평 중앙 정렬 및 상하 여백 설정
`;


function MainPage(){

    
    const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input.trim());
      setInput('');
    }
  };

  return (
    <div>
        <CenteredContainer>
        <Styled_h1>환영합니다</Styled_h1>
        </CenteredContainer>
        <div>
        <BottomContainer>
        <Styled_h1 style={{fontSize: '48px'}}>📽️ Find your movies!</Styled_h1>
        <InputButtonContainer>
            <StyledInput
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}>
            </StyledInput>
            <StyledButton>🔍</StyledButton>
        </InputButtonContainer>
        </BottomContainer>
        </div>
    </div>
  );
}

export default MainPage;
