// 페이지 로드시마다 버튼 활성화 검사
document.addEventListener('DOMContentLoaded', function() {
    var inputs = document.querySelectorAll('#signup-form input[type="text"], #signup-form input[type="email"], #signup-form input[type="password"]');
    var submitBtn = document.querySelector('.btn');

    function updateSubmitBtnState() {
        for (let input of inputs) {
            if (input.value.trim() === '') {
                submitBtn.disabled = true;
                return;
            }
        }
        submitBtn.disabled = false;
    }

    inputs.forEach(input => {
        input.addEventListener('input', updateSubmitBtnState);
    });

    // 초기 상태 업데이트
    updateSubmitBtnState();
});


// 폼 제출시 유효성 검사
function validateForm() {

    var bool = true;

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var password = document.getElementById("password").value;
    var pwdCheck = document.getElementById("pwd-check").value;
    
    var nameError = document.querySelector(".name-field .error-message");
    
    var emailError = document.querySelector(".email-field .error-message");
    
    var ageErrorEmpty = document.querySelector(".age-field .empty");
    var ageErrorIsNan = document.querySelector(".age-field .isNan")
    var ageErrorMinus = document.querySelector(".age-field .minus");
    var ageErrorDecimal = document.querySelector(".age-field .decimal");
    var ageErrorYoung = document.querySelector(".age-field .young");

    var passwordErrorMin = document.querySelector(".password-field .min");
    var passwordErrorMax = document.querySelector(".password-field .max");
    var passwordErrorSimple = document.querySelector(".password-field .simple");
    
    var pwdCheckError = document.querySelector(".pwd-check-field .error-message")

    var nameSuccess = document.querySelector(".name-field .success-message");
    var emailSuccess = document.querySelector(".email-field .success-message");
    var ageSuccess = document.querySelector(".age-field .success-message");
    var passwordSuccess = document.querySelector(".password-field .success-message");
    var pwdCheckSuccess = document.querySelector(".pwd-check-field .success-message");
  
    // 이름 검증
    if (name.trim() === "") {
        nameError.style.display = "block";
        nameSuccess.style.display = "none";
        bool = false;
      } else {
        nameSuccess.style.display = "block";
        nameError.style.display = "none";
    }

    // 이메일 검증
    if (!email.includes("@")) {
        emailError.style.display = "block";
        emailSuccess.style.display = "none";    

        bool=false;
    } else {
        emailSuccess.style.display = "block";    
        emailError.style.display = "none";
    }

    if (age.trim() === ""){
        ageErrorEmpty.style.display = "block";
        ageErrorIsNan.style.display = "none";
        ageErrorMinus.style.display = "none";
        ageErrorDecimal.style.display = "none";
        ageErrorYoung.style.display = "none";
        ageSuccess.style.display = "none";

        bool = false;
    } else if(isNaN(age)){
        ageErrorIsNan.style.display = "block";
        ageErrorEmpty.style.display = "none";
        ageErrorMinus.style.display = "none";
        ageErrorDecimal.style.display = "none";
        ageErrorYoung.style.display = "none";
        ageSuccess.style.display = "none";
        bool = false;
    } else{
        var ageValue = parseFloat(age); // age를 숫자로 변환
        if(!Number.isInteger(ageValue)){
            ageErrorDecimal.style.display = "block";
            ageErrorEmpty.style.display = "none";
            ageErrorIsNan.style.display = "none";
            ageErrorMinus.style.display = "none";
            ageErrorYoung.style.display = "none";
            ageSuccess.style.display = "none";
            bool = false;

        }else if(ageValue < 0){
            ageErrorMinus.style.display = "block";
            ageErrorEmpty.style.display = "none";
            ageErrorIsNan.style.display = "none";
            ageErrorDecimal.style.display = "none";
            ageErrorYoung.style.display = "none";
            ageSuccess.style.display = "none";
            bool = false;
        } else if(ageValue < 19){
            ageErrorYoung.style.display = "block";
            ageErrorEmpty.style.display = "none";
            ageErrorIsNan.style.display = "none";
            ageErrorMinus.style.display = "none";
            ageErrorDecimal.style.display = "none";
            ageSuccess.style.display = "none";
            bool = false;
        } else {
            ageSuccess.style.display = "block";
            // 모든 ageError들을 숨깁니다.
            ageErrorEmpty.style.display = "none";
            ageErrorIsNan.style.display = "none";
            ageErrorMinus.style.display = "none";
            ageErrorDecimal.style.display = "none";
            ageErrorYoung.style.display = "none";
        }
    }
    // 비밀번호 검증
    if (password.length < 4) {
        passwordErrorMin.style.display = "block";
        passwordErrorMax.style.display = "none";
        passwordErrorSimple.style.display = "none"; 
        passwordSuccess.style.display = "none";

        bool = false;
    } else if(password.length > 12){
        passwordErrorMax.style.display = "block";
        passwordErrorMin.style.display = "none";
        passwordErrorSimple.style.display = "none"; 
        passwordSuccess.style.display = "none";
        
        bool = false;
    } else if(!/[A-Za-z]/.test(password) || !/\d/.test(password) || !/[!@#$%^&*]/.test(password)){
        passwordErrorSimple.style.display = "block";
        passwordErrorMin.style.display = "none";
        passwordErrorMax.style.display = "none";
        passwordSuccess.style.display = "none";
        
        bool = false;
    }else {
        passwordSuccess.style.display = "block";
        passwordErrorMin.style.display = "none";
        passwordErrorMax.style.display = "none";
        passwordErrorSimple.style.display = "none"; // 성공 시 모든 에러 메시지를 숨깁니다.
    }

    if (pwdCheck.trim()===""||password!=pwdCheck) {
        pwdCheckError.style.display = "block";
        pwdCheckSuccess.style.display = "none";

        bool = false;
    } else {
        pwdCheckSuccess.style.display = "block";
        pwdCheckError.style.display = "none";
    }
    if(bool){
        // 유효성 검사를 모두 통과한 후, 1초(1000밀리초) 뒤에 "가입 성공!" 알림을 띄움
        setTimeout(function() {
            alert('가입 성공!');
        }, 1000); // 1000밀리초 후에 실행

    }
  
    return false; // 폼 제출후 갱신을 막고자 false 변경 -> 원래는 bool 반환
  }
  