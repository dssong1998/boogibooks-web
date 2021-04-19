import styled from "styled-components";

const SInput = styled.input`
  box-sizing: border-box;
  margin-bottom: 10px;
  width: 100%;
  padding: 7px;
  background-color: #ffffff;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
`;

const Input = (props) => {
  return <SInput {...props} />;
};

export default Input;
