import React, { useState } from "react";
import {
  StyledInput,
  Container,
  StyledFieldset,
  StyledLegend,
  StyledButton,
  WhiteP,
  HorizonDiv
} from "./styles";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
    check_pw: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <Container>
      <StyledFieldset>
        <StyledLegend>회원가입 페이지</StyledLegend>
        <StyledInput
          name="name"
          type="text"
          value={formData.name}
          placeholder="이름을 입력해주세요"
          onChange={handleChange}
        />
        <StyledInput
          name="email"
          type="email"
          value={formData.email}
          placeholder="이메일을 입력해주세요"
          onChange={handleChange}
        />
        <StyledInput
          name="age"
          type="number"
          value={formData.age}
          placeholder="나이를 입력해주세요"
          onChange={handleChange}
        />
        <StyledInput
          name="password"
          type="password"
          value={formData.password}
          placeholder="비밀번호를 입력해주세요"
          onChange={handleChange}
        />
        <StyledInput
          name="check_pw"
          type="password"
          value={formData.check_pw}
          placeholder="비밀번호 확인"
          onChange={handleChange}
        />
      </StyledFieldset>
      <StyledButton>제출하기</StyledButton>
      <HorizonDiv><WhiteP>이미 아이디가 있으신가요?</WhiteP> <WhiteP><strong>로그인 페이지로 이동하기</strong></WhiteP></HorizonDiv>
    </Container>
  );
}

export default SignUp;
