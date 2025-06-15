import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyled = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
        background-color: ${theme.colors.bgColor};
        color: ${theme.colors.textColor};
        font-family: ${theme.fonts.primary};
        padding: 2rem;
    }
`