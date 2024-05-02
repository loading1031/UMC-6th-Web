import React,{useState} from 'react';
import { StyledNav, StyledUl, StyledLink } from './styles';

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // 클릭 이벤트 핸들러
  const handleLoginClick = () => {
    setIsLoggedIn(isLoggedIn => !isLoggedIn); // 현재 상태를 반전시킴
  };

  return(
    <StyledNav>
      <h4 style={{ margin: 0, color: 'white' }}>UMC Movie</h4>
      <StyledUl>
        <li><StyledLink onClick={handleLoginClick}>
        {isLoggedIn ? '로그아웃' : '로그인'}
        </StyledLink></li>
        <li><StyledLink to="/popular">Popular</StyledLink></li>
        <li><StyledLink to="/nowplaying">NowPlaying</StyledLink></li>
        <li><StyledLink to="/toprated">Top Rated</StyledLink></li>
        <li><StyledLink to="/upcoming">Upcoming</StyledLink></li>
      </StyledUl>
    </StyledNav>
  );
};

export default NavBar;
