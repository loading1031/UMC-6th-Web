import React, { useState } from "react";
import {
  StyledInput,
  StyledFieldset,
  StyledLegend,
  StyledButton,
  WhiteP,
  HorizonDiv,
  FormContainer,
  WarningP
} from "./styles";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
    check_pw: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
    check_pw: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault(); // 폼의 기본 제출 동작 방지
    let valid = true;
    const newErrors = {};

    // 필드별 공백 검사
    Object.keys(formData).forEach(key => {
      if (!formData[key].trim()) {
        valid = false;
        newErrors[key] = "이 필드는 필수입니다.";
      } else {
        newErrors[key] = "";
      }
    });

    setErrors(newErrors);

    if (valid) {
      console.log('Submitted with Email:', formData.email, 'Password:', formData.password);
      // 폼 제출 로직
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: value ? "" : "이 필드는 필수입니다." // 입력 시 에러 메시지 초기화
    }));
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <StyledFieldset>
        <StyledLegend>회원가입 페이지</StyledLegend>
        <StyledInput
          name="name"
          type="text"
          value={formData.name}
          placeholder="이름을 입력해주세요"
          onChange={handleChange}
        />
        {errors.name && <WarningP>{errors.name}</WarningP>}
        <StyledInput
          name="email"
          type="email"
          value={formData.email}
          placeholder="이메일을 입력해주세요"
          onChange={handleChange}
        />
        {errors.email && <WarningP>{errors.email}</WarningP>}
        <StyledInput
          name="age"
          type="number"
          value={formData.age}
          placeholder="나이를 입력해주세요"
          onChange={handleChange}
        />
        {errors.age && <WarningP>{errors.age}</WarningP>}
        <StyledInput
          name="password"
          type="password"
          value={formData.password}
          placeholder="비밀번호를 입력해주세요"
          onChange={handleChange}
        />
        {errors.password && <WarningP>{errors.password}</WarningP>}
        <StyledInput
          name="check_pw"
          type="password"
          value={formData.check_pw}
          placeholder="비밀번호 확인"
          onChange={handleChange}
        />
        {errors.check_pw && <WarningP>{errors.check_pw}</WarningP>}
      </StyledFieldset>
      
      <StyledButton>제출하기</StyledButton>
      <HorizonDiv>
        <WhiteP>이미 아이디가 있으신가요?</WhiteP>
        <WhiteP><strong>로그인 페이지로 이동하기</strong></WhiteP>
      </HorizonDiv>
    </FormContainer>
  );
}

export default SignUp;

