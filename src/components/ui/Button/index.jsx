import { ButtonStyled } from "./styles";

function Button({ props, children }) {
    return (
        <ButtonStyled props={props}>
            {children}
        </ButtonStyled>
    );
}

export default Button;