import styled, {keyframes} from "styled-components";
import { theme } from "../../styles/theme"

const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px); /* Move 10px para cima */
  }
  100% {
    transform: translateY(0);
  }
`;

export const LinksStyles = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .container{
        width: 360px;
        
        .logo{
          display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
            
            .image{
                img{
                    width: 160px;
                    height: auto;
                    border-radius: 50%;
                    border: 2px solid ${theme.colors.textColor};   
                    animation: ${floatAnimation} 3s ease-in-out infinite; /* Animação de flutuação */
                    background-color: rgba(255, 255, 255, 0.3);

                    }
            }
            .nick{
                text-align: center;
                border: 1px solid ${theme.colors.textColor};
                border-radius: 32px;
                padding: 8px;
                width: 360px;
                background-color: rgba(255, 255, 255, 0.3);
            
                h1{
                    font-size: 18px;
                    font-weight: bold;
                    margin-bottom: 8px;
                    
                }
                .p{
                    font-size:16px;
                    font-weight: 100;
                    font-family: 'Source Code Pro', monospace;
                }
            }
        }
    }
    .buttons{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
        margin-top: 48px;
        border-radius: 32px;
        }

        button{
            width: 360px;}
    }
`;