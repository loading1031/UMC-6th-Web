import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
  background-color: #181B37;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 100%; 
  margin-top: 10px;
`;

export const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  padding: 10px;
  margin: 0;
  li {
    color: white;
    margin-right: 20px;
  }
`;

export const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  &.active {
    color: yellow; // 활성 링크 색상
  }
  &:hover {
    font-size: 1.1em; // 호버 시 글자 크기 증가
    cursor: pointer; // 커서 모양 변경
  }
`;
