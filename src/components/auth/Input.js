import styled from "styled-components";

const Input = styled.input`
  box-sizing: border-box;
  margin-top: 10px;
  width: 100%;
  padding: 7px;
  background-color: #ffffff;
  border-bottom: 1px solid
    ${(props) => {
      if (props.valid) {
        return props.theme.error;
      } else {
        return props.theme.borderColor;
      }
    }};
  text-transform: ${({ type }) => {
    if (type === "username") return "lowercase";
    else return "none";
  }};
  &::placeholder {
    font-size: 12px;
  }
  &:focus {
    border-color: ${(props) => props.theme.accent};
    border-width: 2px;
  }
`;

export default Input;
