import { useForm } from "react-hook-form";
import { useNavigate, useOutletContext } from "react-router-dom";
import axios from "axios";
import {
  FormContainer,
  StyledButton,
  StyledFieldset,
  StyledInput,
  StyledLegend,
  WarningP,
} from "./styles";

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, isSubmitted, errors },
  } = useForm({ mode: "onChange" });

  // watch를 사용하여 모든 필드의 값을 가져옴
  const formData = watch();

  // 각 필드가 null이거나 비어있는지 확인
  const btnDisable = () => {
    return (
      isSubmitting ||
      !formData.username ||
      !formData.password ||
      Object.keys(errors).length > 0
    );
  };

  const navigate = useNavigate();
  const { handleAuthentication } = useOutletContext();

  const onSubmit = async (data) => {
    try {
      // Assume login endpoint returns a token on successful login
      const loginResponse = await axios.post(
        "http://localhost:8080/auth/login",
        data
      );
      if (loginResponse.status === 200){
        alert(`${loginResponse.data.username}님 환영합니다.`)
        const token = loginResponse.data.token; // Getting token from response
        handleAuthentication(token);
        navigate('/');
      }

    } catch (error) {
      if (error.response) {
        // Handle responses with specific status codes
        if (error.response.status === 404) {
          alert("User not found");
        } else {
          alert(error.response.data.message);
        }
      } else {
        alert("An error occurred during login");
      }
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <StyledFieldset>
        <StyledLegend>로그인 페이지</StyledLegend>
        <StyledInput
          id="username"
          type="text"
          placeholder="아이디"
          aria-invalid={
            isSubmitted ? (errors.id ? "true" : "false") : undefined
          }
          {...register("username", {
            required: "이 필수 입력입니다.",
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
        <StyledButton type="submit" disabled={btnDisable()}>
          로그인
        </StyledButton>
      </StyledFieldset>
    </FormContainer>
  );
}

export default Login;
