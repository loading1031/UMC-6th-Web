import React, { useState, useEffect } from 'react';
import { API_URL, API_KEY } from './Config.js';
import './App.css';
import { Outlet,Link } from 'react-router-dom';
import styled from 'styled-components';
import Popular from './components/PopularPage.jsx';

const StyledNav = styled.nav`
  background-color: #181B37;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 100%; 
  margin-top: 10px;
`;

const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  padding:10px;
  margin: 0;
  li {
    color: white;
    margin-right: 20px; // 오른쪽 마진을 추가하여 각 항목 사이의 간격을 늘림
  }
`;

const StyledLink = styled(Link)`
  color: white; // 링크의 텍스트 색상을 흰색으로 설정
  text-decoration: none; // 밑줄 제거
  }`;

const NavBar = () => (
  <StyledNav>
    <h4 style={{margin:0, color:'white'}}>UMC Movie</h4>
    <StyledUl>
      <li><StyledLink>회원가입</StyledLink></li>
      <li><StyledLink to="/popular">Popular</StyledLink></li>
      <li><StyledLink to="/nowplaying">NowPlaying</StyledLink></li>
      <li><StyledLink to="/toprated">Top Rated</StyledLink></li>
      <li><StyledLink to="/upcoming">Upcoming</StyledLink></li>
     </StyledUl>
  </StyledNav>
);

function App() {

  return (

    <div>
      <NavBar />
      <Outlet context={{ API_URL, API_KEY }} />
    </div>

  );
}

export default App;



