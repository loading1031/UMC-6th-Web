export const validateForm = (formData) => {
  const errors = {};
  let isValid = true;

  Object.keys(formData).forEach((field) => {
    const { valid, error } = validateField(field, formData[field], formData);
    if (!valid) {
      isValid = false;
      errors[field] = error;
    }
  });

  return { isValid, errors };
};

export const validateField = (name, value, allData) => {
  let error = "";
  let valid = true;
  let age;

  switch (name) {
    case "name":
      if (!value.trim()) {
        valid = false;
        error = "이름을 입력해주세요.";
      } else if (!/^[가-힣a-zA-Z\s-]+$/.test(value)) {
        valid = false;
        error = "이름은 한글, 영문자, 하이픈, 공백만 포함할 수 있습니다.";
      }
      break;
    case "email":
      if (!value.trim()) {
        valid = false;
        error = "이메일을 입력해주세요.";
      } else if (!/@/.test(value)) {
        valid = false;
        error = "유효한 이메일 주소를 입력해주세요.";
      }
      break;
    case "age":
      age = parseFloat(value);
      if (age == null) {
        valid = false;
        error = "나이를 입력해주세요.";
      } else if (age < 0) {
        valid = false;
        error = "나이는 음수가 될 수 없습니다.";
      } else if (age < 19) {
        valid = false;
        error = "나이는 19세 이상만 가입 가능합니다.";
      } else if (age % 1 !== 0) {
        valid = false;
        error = "나이는 소수가 될 수 없습니다.";
      }
      break;
    case "password":
      if (!value.trim()) {
        valid = false;
        error = "비밀번호를 입력해주세요.";
      } else if (value.length < 4) {
        valid = false;
        error = "비밀번호는 최소 4자리 이상이어야 합니다.";
      } else if (value.length > 12) {
        valid = false;
        error = "비밀번호는 최대 12자리까지 가능합니다.";
      } else if (!/(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W]).*/.test(value)) {
        valid = false;
        error = "비밀번호는 영어, 숫자, 특수문자를 모두 조합해야 합니다.";
      }
      break;
    case "check_pw":
      if (value !== allData.password) {
        valid = false;
        error = "비밀번호가 일치하지 않습니다.";
      }
      break;
    default:
      break;
  }

  return { valid, error };
};
