import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
import bg1 from "../assets/images/bg1.jpg";


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${theme.colors.textColor};
  }
  body{
    font-family: ${theme.fonts.primary};
    padding: 2rem;
    background-color: ${theme.colors.bgColor};
    background-image: url(${bg1});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`