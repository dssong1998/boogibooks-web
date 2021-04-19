import styled from "styled-components";

const Button = styled.input`
  border: none;
  margin-top: 10px;
  text-align: center;
  background-color: ${(props) => props.theme.accent};
  color: white;
  padding: 6px 0px;
  font-weight: 600;
  border-radius: 5px;
  box-sizing: border-box;
  margin-bottom: 10px;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`;
const SubmitButton = (props) => {
  return <Button {...props} />;
};
export default SubmitButton;
