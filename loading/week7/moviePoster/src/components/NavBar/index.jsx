import React from "react";
import { StyledNav, StyledUl, StyledLink } from "./styles";

const NavBar = ({ isLoggedIn, handleLoginClick }) => {

  return (
    <StyledNav>
      <h4 style={{ margin: 0, color: "white" }}>UMC Movie</h4>
      <StyledUl>
        <li>
          <StyledLink to="/signup">회원가입</StyledLink>
        </li>
        <li>
          <StyledLink to="/login" onClick={handleLoginClick}>
            {isLoggedIn ? "로그아웃" : "로그인"}
          </StyledLink>
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
