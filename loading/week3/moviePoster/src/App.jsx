import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  const location = useLocation();
  const showComponents = location.pathname !== "/404"; // NotFound 페이지가 아닌 경우
  return (
    <div>
      {showComponents && <NavBar />}
      {/* 이곳에 다른 컴포넌트들도 조건부 렌더링 할 수 있습니다 */}
      <Outlet />  
      {showComponents && <Footer />}
    </div>
  );
}

export default App;
