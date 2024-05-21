import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  StyledInput,
  StyledFieldset,
  StyledLegend,
  StyledButton,
  WhiteP,
  HorizonDiv,
  FormContainer,
  WarningP,
  StyledLink,
} from "./styles";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm({ mode: "onChange" });

  const navigate = useNavigate();

  const onSubmit = async (data) => {

    try {
      const response = await axios.post(
        "http://localhost:8080/auth/signup",
        data
      );
      if (response.status === 201) {
        alert("회원가입이 성공적으로 완료되었습니다.");
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      console.error(error.response);
      if (error.response) {
        switch (error.response.status) {
          case 400:
            alert(error.response.data.message); // Passwords do not match
            break;
          case 409:
            alert(error.response.data.message); // Username already exists
            break;
          default:
            alert("회원가입 중 오류가 발생했습니다.");
        }
      } else {
        alert("네트워크 오류가 발생했습니다. 다시 시도해주세요.");
      }
    }
  };

  // watch를 사용하여 모든 필드의 값을 가져옴
  const formData = watch();

  // 각 필드가 null이거나 비어있는지 확인
  const btnDisable = () => {
    return (
      isSubmitting ||
      !formData.name ||
      !formData.email ||
      !formData.age ||
      !formData.username ||
      !formData.password ||
      !formData.passwordCheck ||
      Object.keys(errors).length > 0
    );
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <StyledFieldset>
        <StyledLegend>회원가입 페이지</StyledLegend>

        <StyledInput
          name="name"
          type="text"
          placeholder="이름을 입력해주세요"
          aria-invalid={
            isSubmitted ? (errors.name ? "true" : "false") : undefined
          }
          {...register("name", {
            required: "이름을 입력해주세요.",
            pattern: {
              value: /^[가-힣a-zA-Z\s-]+$/,
              message:
                "이름은 한글, 영문자, 하이픈, 공백만 포함할 수 있습니다.",
            },
          })}
        />
        {errors.name && <WarningP role="alert">{errors.name.message}</WarningP>}
        <StyledInput
          name="email"
          type="email"
          placeholder="이메일을 입력해주세요"
          autoComplete="email" // email 자동완성
          aria-invalid={
            isSubmitted ? (errors.email ? "true" : "false") : undefined
          }
          {...register("email", {
            required: "이메일을 입력해주세요.",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "유효한 이메일 주소를 입력해주세요.",
            },
          })}
        />
        {errors.email && (
          <WarningP role="alert">{errors.email.message}</WarningP>
        )}

        <StyledInput
          name="age"
          type="number"
          placeholder="나이를 입력해주세요"
          aria-invalid={
            isSubmitted ? (errors.age ? "true" : "false") : undefined
          }
          {...register("age", {
            required: "나이를 입력해주세요.",
            validate: {
              positive: (value) =>
                parseFloat(value) > 0 || "나이는 음수가 될 수 없습니다.",
              minAge: (value) =>
                parseFloat(value) >= 19 ||
                "나이는 19세 이상만 가입 가능합니다.",
              integer: (value) =>
                Number.isInteger(parseFloat(value)) ||
                "나이는 소수가 될 수 없습니다.",
            },
          })}
        />
        {errors.age && <WarningP role="alert">{errors.age.message}</WarningP>}

        <StyledInput
          name="username"
          type="text"
          placeholder="아이디를 입력해주세요."
          autoComplete="username"
          aria-invalid={
            isSubmitted ? (errors.username ? "true" : "false") : undefined
          }
          {...register("username", {
            required: "아이디를 입력해주세요.",
            pattern: {
              value: /^[a-zA-Z0-9]+$/,
              message: "아이디는 영어와 숫자만 사용할 수 있습니다.",
            },
          })}
        />
        {errors.username && (
          <WarningP role="alert">{errors.username.message}</WarningP>
        )}

        <StyledInput
          name="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          autoComplete="new-password" // 비밀번호 자동완성 차단
          aria-invalid={
            isSubmitted ? (errors.password ? "true" : "false") : undefined
          }
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
            minLength: {
              value: 4,
              message: "비밀번호는 최소 4자리 이상이어야 합니다.",
            },
            maxLength: {
              value: 12,
              message: "비밀번호는 최대 12자리까지 가능합니다.",
            },
            pattern: {
              value: /(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W]).*/,
              message:
                "비밀번호는 영어, 숫자, 특수문자를 모두 조합해야 합니다.",
            },
          })}
        />
        {errors.password && (
          <WarningP role="alert">{errors.password.message}</WarningP>
        )}

        <StyledInput
          name="passwordCheck"
          type="password"
          placeholder="비밀번호 확인"
          autoComplete="new-password"
          aria-invalid={
            isSubmitted ? (errors.passwordCheck ? "true" : "false") : undefined
          }
          {...register("passwordCheck", {
            required: "비밀번호를 다시 입력해주세요.",
            validate: (value) =>
              value === watch("password") || "비밀번호가 일치하지 않습니다.",
          })}
        />
        {errors.passwordCheck && (
          <WarningP role="alert">{errors.passwordCheck.message}</WarningP>
        )}
      </StyledFieldset>

      <StyledButton type="submit" disabled={btnDisable()}>
        제출하기
      </StyledButton>
      <HorizonDiv>
        <WhiteP>이미 아이디가 있으신가요?</WhiteP>
        <StyledLink to="/login">
          <strong>로그인 페이지로 이동하기</strong>
        </StyledLink>
      </HorizonDiv>
    </FormContainer>
  );
}

export default SignUp;
