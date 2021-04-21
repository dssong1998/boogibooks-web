import styled from "styled-components";

const SubmitButton = styled.input`
  border: none;
  margin-top: 20px;
  text-align: center;
  background-color: ${(props) => props.theme.accent};
  color: white;
  padding: 6px 0px;
  font-weight: 600;
  border-radius: 5px;
  box-sizing: border-box;
  margin-bottom: 10px;
  width: 100%;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  &:hover {
    cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  }
`;
export default SubmitButton;
