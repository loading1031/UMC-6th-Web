import React, { useState } from "react";
import {
  StyledInput,
  StyledFieldset,
  StyledLegend,
  StyledButton,
  WhiteP,
  HorizonDiv,
  FormContainer,
  WarningP,
} from "./styles";
import { validateField, validateForm } from "./validate";

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

  // 모든 에러가 비어있는지 검사하여 폼의 유효성을 판단
  const isFormValid = () => {
    // 모든 필드에 값이 적절히 입력되었는지 검사
    const allFieldsFilled =
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.age.trim() !== "" &&
      formData.password.trim() !== "" &&
      formData.check_pw.trim() !== "";
    return (
      allFieldsFilled && Object.values(errors).every((error) => error === "")
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // 폼의 기본 제출 동작 방지
    const { isValid, errors } = validateForm(formData);
    setErrors(errors);

    if (isValid) {
      console.log(
        "Submitted\nEmail:",
        formData.email,
        "\nPassword:",
        formData.password,
        "\nname:",
        formData.name,
        "\nage:",
        formData.age
      );
      // 폼 제출 로직
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    // setFormData와 비동기적으로 처리될 수 있기 때문에, formData의 최신 상태를 불러옴(setFormData와는 무관함)
    const { valid, error } = validateField(name, value, {
      ...formData,
      [name]: value,
    });

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: valid ? "" : error, // 유효하면 오류 메시지를 비움, 아니면 오류 메시지 설정
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
          autoComplete="username" // email 자동완성
          onChange={handleChange}
        />
        {errors.email && <WarningP>{errors.email}</WarningP>}
        <StyledInput
          name="age"
          type="number"
          value={formData.age}
          placeholder="나이를 입력해주세요"
          // min="19"
          // step="1"
          onChange={handleChange}
        />
        {errors.age && <WarningP>{errors.age}</WarningP>}
        <StyledInput
          name="password"
          type="password"
          value={formData.password}
          placeholder="비밀번호를 입력해주세요"
          autoComplete="new-password" // 비밀번호 자동완성 차단
          onChange={handleChange}
        />
        {errors.password && <WarningP>{errors.password}</WarningP>}
        <StyledInput
          name="check_pw"
          type="password"
          value={formData.check_pw}
          placeholder="비밀번호 확인"
          autoComplete="new-password"
          onChange={handleChange}
        />
        {errors.check_pw && <WarningP>{errors.check_pw}</WarningP>}
      </StyledFieldset>

      <StyledButton disabled={!isFormValid()}>제출하기</StyledButton>
      <HorizonDiv>
        <WhiteP>이미 아이디가 있으신가요?</WhiteP>
        <WhiteP>
          <strong>로그인 페이지로 이동하기</strong>
        </WhiteP>
      </HorizonDiv>
    </FormContainer>
  );
}

export default SignUp;
