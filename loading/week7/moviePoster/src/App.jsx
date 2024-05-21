import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  const location = useLocation();
  const showComponents = location.pathname !== "/404"; // NotFound 페이지가 아닌 경우
  const [authToken, setAuthToken] = useState(
    localStorage.getItem("token") || null
  );
  const isLoggedIn = authToken !== null;

  const handleAuthentication = (token) => {
    if (token) {
      localStorage.setItem("token", token); // 토큰을 로컬 스토리지에 저장
      setAuthToken(token); // 상태를 업데이트하여 로그인 반영
    } else {
      localStorage.removeItem("token"); // 로컬 스토리지에서 토큰 제거
      setAuthToken(null); // 상태를 업데이트하여 로그아웃 반영
    }
  };

  return (
    <div>
      {showComponents && (
        <NavBar
          isLoggedIn={isLoggedIn}
          handleAuthentication={handleAuthentication}
        />
      )}
      {/* 이곳에 다른 컴포넌트들도 조건부 렌더링 할 수 있습니다 */}
      <Outlet context={{ isLoggedIn, handleAuthentication }} />
      {showComponents && <Footer />}
    </div>
  );
}

export default App;
