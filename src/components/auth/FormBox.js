import styled from "styled-components";
import { BaseBox } from "../common";

const SFormBox = styled(BaseBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px 25px 40px;
  margin-bottom: 10px;
  form {
    margin-top: 50px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const FormBox = ({ children }) => {
  return <SFormBox>{children}</SFormBox>;
};
export default FormBox;
