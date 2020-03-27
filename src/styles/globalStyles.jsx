import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../viables/viables';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Oswald:300,600&display=swap');
@import url('https://fonts.googleapis.com/css?family=Anton&display=swap');

  html {
    box-sizing: border-box;
    
  },
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  h1{
    font-family: 'Anton', sans-serif;
    font-weight: '600'
  }
  h2{
    font-family: 'Anton', sans-serif;
    font-weight: '600'
  }
  body {
    margin: 0;
    padding: 80px 65px 0;
    color: white;
    background-color: ${COLORS.STEELGREY};
  }
  button {
    padding: 0;
    cursor: pointer;
  }
  p {
    font-size: 16px;
    font-family: 'Oswald', sans-serif;
    font-weight: '400'
    
  }
  ul {
    padding: 0;
    margin: 0;
  }
  li{
    text-decoration: none;
  }
  a{
  list-style: none;
  text-decoration: none;
  color:  ${COLORS.LIGHT};
  }

`;

export default GlobalStyle;
