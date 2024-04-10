
function validateForm() {

    var bool = true;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var password = document.getElementById("password").value;
    var pwdCheck = document.getElementById("pwd-check").value;
    
    var nameError = document.querySelector(".name-field .error-message");
    var emailError = document.querySelector(".email-field .error-message");
    var ageError = document.querySelector(".age-field .error-message");
    var passwordError = document.querySelector(".password-field .error-message");
    var pwdCheckError = document.querySelector(".pwd-check-field .error-message")
  
    // 이름 검증
    if (name.trim() === "") {
        nameError.style.display = "block";
        bool = false;
      } else {
        nameError.style.display = "none";
    }

    // 이메일 검증
    if (!email.includes("@")) {
      emailError.style.display = "block";
      bool=false;
    } else {
      emailError.style.display = "none";
    }

    if (age.trim()===""||isNaN(age)){
        ageError.style.display = "block";
        bool = false;
    }else{
        ageError.display = "none";
    }
    // 비밀번호 검증
    if (password.length < 8) {
        passwordError.style.display = "block";
        bool = false;
    } else {
      passwordError.style.display = "none";
    }
    if (pwdCheck.trim()===""||password!=pwdCheck) {
        pwdCheckError.style.display = "block";
        bool = false;
    } else {
        pwdCheckError.style.display = "none";
    }
    if(bool)
        alert('가입 성공!');
  
    return bool;
  }
  