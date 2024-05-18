import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  const location = useLocation();
  const showComponents = location.pathname !== "/404"; // NotFound 페이지가 아닌 경우
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(isLoggedIn => !isLoggedIn); // 현재 상태를 반전시킴
  };
  return (
    <div>
      {showComponents && <NavBar isLoggedIn={isLoggedIn} handleLoginClick = {handleLoginClick}/>}
      {/* 이곳에 다른 컴포넌트들도 조건부 렌더링 할 수 있습니다 */}
      <Outlet context={{ handleLoginClick }}/>
      {showComponents && <Footer />}
    </div>
  );
}

export default App;
