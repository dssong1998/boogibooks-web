import styled from "styled-components";
import AuthLayout from "../components/auth/AuthLayout";
import FormBox from "../components/auth/FormBox";
import Input from "../components/auth/Input";
import LinkButton from "../components/auth/LinkButton";
import Seperator from "../components/auth/Seperator";
import SubmitButton from "../components/auth/SubmitButton";
import routes from "../routes";
// import ArcText from "../components/ArcText";

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin-top: 20px;
    font-size: 48px;
    font-family: "Do Hyeon", sans-serif;
    color: ${(props) => props.theme.accent};
  }
  img {
    max-width: 150px;
  }
`;

const Login = () => {
  return (
    <AuthLayout>
      <FormBox>
        <Title>
          <img src={process.env.PUBLIC_URL + "/logo.png"} alt="부기 북스" />
          <h1>부기 북스</h1>
        </Title>
        <form>
          <Input type="text" placeholder="이름" />
          <Input type="password" placeholder="비밀번호" />
          <SubmitButton type="submit" value="로그인" />
        </form>
        <Seperator>
          <div></div>
          <span>처음이라면</span>
          <div></div>
        </Seperator>
        <LinkButton to={routes.signUp}>회원 가입</LinkButton>
      </FormBox>
      {/* <BottomBox>
        <span>아직 부기를 만나본 적이 없나요?</span>
        <Link to="/signup">가입하기</Link>
      </BottomBox> */}
    </AuthLayout>
  );
};
export default Login;
