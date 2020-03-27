import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { COLORS } from '../../viables/viables';

const NavigationWrapper = styled.nav`
  top: 20px;
  left: 30px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  text-decoration: none;
  color: inherit;
  margin-bottom: 50px;
  
`;

const Logo = styled.span`
  font-size: 60px;
  margin-right: 10px;
  letter-spacing: -5px;
  font-family: 'Anton', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 0.6;
  list-style: none;
  color:  ${COLORS.LIGHT};
  b{
    color:  ${COLORS.LIGHTBLUE};
  }
`;

const NavigationList = styled.ul`
  list-style: none;
  display: flex;
`;

const NavigationListItem = styled.li`
  font-weight: 600;
  font-size: 50px;
  margin-left: 50px;
  letter-spacing: -5px;
  font-family: 'Anton', sans-serif;
  text-transform: uppercase;
  list-style: none;
  color:  ${COLORS.LIGHT};
  transition-duration: 500ms;
    transition: all .1s ease-in-out;
  &:hover{
      transform: scale(1.1); 
  }

  a{
    text-decoration: none;
    transition-duration: 500ms;
    transition: all .1s ease-in-out;
   
    color:  ${COLORS.LIGHT};
    &:hover{
      transform: scale(1.1); 
    color:  ${COLORS.LIGHTBLUE};
  }
  }

`;



const Navigation = () => (
  <NavigationWrapper>
    <Logo><Link to="/">PROTOTYPE<br/><b> ONE</b></Link></Logo>
    <NavigationList>
      <NavigationListItem>
        <Link to="/blog">blog</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/gallery">gallery</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/about">about</Link>
      </NavigationListItem>
    </NavigationList>
  </NavigationWrapper>
);

export default Navigation;