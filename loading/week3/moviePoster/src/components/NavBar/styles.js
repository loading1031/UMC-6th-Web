import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;