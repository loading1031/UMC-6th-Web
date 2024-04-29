// NotFound.js
import { React, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Background } from "./styles";

const NotFound = () => {
  const navigate = useNavigate();

  // 컴포넌트 마운트 시 /404로 리다이렉트
  useEffect(() => {
    navigate("/404");
  }, [navigate]);

  return (
    <Background>
      <h1>404 Error</h1>
      <p>Page not found.</p>
      <h2>
        <Link to="/">메인으로 이동하기</Link>
      </h2>
    </Background>
  );
};

export default NotFound;
