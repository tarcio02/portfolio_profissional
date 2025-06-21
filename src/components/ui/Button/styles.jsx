import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const ButtonStyled = styled.button`
    width: 272px;
    padding: 16px;

    background-color: ${({ props }) => 
        (props ? theme.colors.textColor : theme.colors.accent)};
    
    color: ${({ props }) => 
        (props ? theme.colors.accent : theme.colors.bgColor)};
    border-radius: 20px;
    border: 1px solid ${theme.colors.bgColor};
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    font-family: ${theme.fonts.primary};
    border: 1px solid ${theme.colors.textColor};
`