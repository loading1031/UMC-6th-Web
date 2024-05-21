import React from "react";
import { StyledNav, StyledUl, StyledLink } from "./styles";

const NavBar = ({ isLoggedIn, handleAuthentication }) => {
  const handleLogout = (event) => {
    event.preventDefault(); // 기본 이벤트를 막습니다.
    handleAuthentication(null); // 로그아웃을 처리합니다.
  };

  return (
    <StyledNav>
      <h4 style={{ margin: 0, color: "white" }}>UMC Movie</h4>
      <StyledUl>
        {!isLoggedIn && (
          <li>
            <StyledLink to="/signup">회원가입</StyledLink>
          </li>
        )}
        <li>
          {isLoggedIn ? (
            <StyledLink to="/" onClick={handleLogout}>
              로그아웃
            </StyledLink>
          ) : (
            <StyledLink to="/login">로그인</StyledLink>
          )}
        </li>
        <li>
          <StyledLink to="/popular">Popular</StyledLink>
        </li>
        <li>
          <StyledLink to="/nowplaying">NowPlaying</StyledLink>
        </li>
        <li>
          <StyledLink to="/toprated">Top Rated</StyledLink>
        </li>
        <li>
          <StyledLink to="/upcoming">Upcoming</StyledLink>
        </li>
      </StyledUl>
    </StyledNav>
  );
};

export default NavBar;
