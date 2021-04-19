import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing:border-box;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    input{
        all:unset;
    }
   body {
        background-color: ${(props) => props.theme.bgColor};
        font-size: 14px;
        font-family: 'Nanum Gothic', 'Do Hyeon', 'Open Sans', sans-serif;
    }
`;

export default GlobalStyles;
