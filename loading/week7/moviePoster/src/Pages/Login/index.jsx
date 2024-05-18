import { useForm } from "react-hook-form";
import { useNavigate, useOutletContext } from "react-router-dom";
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
      !formData.id ||
      !formData.password ||
      Object.keys(errors).length > 0
    );
  };

  const navigate = useNavigate();
  const { handleLoginClick } = useOutletContext();

  return (
    <FormContainer
      onSubmit={handleSubmit((data) => {
        alert("로그인 되었습니다.");
        handleLoginClick(); // 로그인 상태 변경
        navigate("/");
      })}
    >
      <StyledFieldset>
        <StyledLegend>로그인 페이지</StyledLegend>
        <StyledInput
          id="id"
          type="text"
          placeholder="아이디"
          aria-invalid={
            isSubmitted ? (errors.id ? "true" : "false") : undefined
          }
          {...register("id", {
            required: "이 필수 입력입니다.",
          })}
        />
        {errors.id && <WarningP role="alert">{errors.id.message}</WarningP>}
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
