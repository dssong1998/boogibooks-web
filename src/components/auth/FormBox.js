import styled from "styled-components";
import { BaseBox } from "../commonStyles";

const SFormBox = styled(BaseBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 35px 40px 25px 40px;
  margin-bottom: 10px;
  form {
    margin-top: 20px;
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
