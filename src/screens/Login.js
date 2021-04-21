import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { logUserIn } from "../apollo";
import AuthLayout from "../components/auth/AuthLayout";
import FooterTitle from "../components/auth/FooterTitle";
import FormBox from "../components/auth/FormBox";
import FormError from "../components/auth/FormError";
import Input from "../components/auth/Input";
import LinkButton from "../components/auth/LinkButton";
import Seperator from "../components/auth/Seperator";
import SubmitButton from "../components/auth/SubmitButton";
import { objIsEmpty, PageTitle } from "../components/common";
import LOGIN_MUTATION from "../components/mutations/LoginMutation";
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
  const {
    register,
    handleSubmit,
    formState,
    getValues,
    setError,
    setValue,
    trigger,
  } = useForm({
    mode: "onChange",
  });
  const onCompleted = (data) => {
    const {
      login: { ok, error, token },
    } = data;
    if (!ok) {
      if (error.includes("사용자 이름")) {
        return setError("username", { message: error });
      } else {
        return setError("password", { message: error });
      }
    }
    if (token) {
      logUserIn(token);
      return;
    }
  };
  const [login, { loading }] = useMutation(LOGIN_MUTATION, { onCompleted });
  const onSubmitValid = (data) => {
    const { username, password } = getValues();
    if (loading) {
      return;
    }
    login({
      variables: {
        username,
        password,
      },
    });
  };
  const onSubmitInvalid = (data) => {};
  return (
    <AuthLayout>
      <PageTitle title="로그인" />
      <FormBox>
        <Title>
          <img src={process.env.PUBLIC_URL + "/logo.png"} alt="부기" />
          <h1>부기 북스</h1>
        </Title>
        <form onSubmit={handleSubmit(onSubmitValid, onSubmitInvalid)}>
          <Input
            {...register("username", {
              required: "사용자 이름을 입력해주세요.",
              pattern: {
                value: /^[a-z]+[a-z0-9_.|-]{5,20}$/g,
                message: "잘못된 사용자 이름입니다.",
              },
              maxLength: {
                value: 20,
                message: "너무 긴 사용자 이름입니다.",
              },
              minLength: {
                value: 6,
                message: "너무 짧은 사용자 이름입니다.",
              },
            })}
            onChange={({ target: { value } }) => {
              setValue("username", value.toLowerCase());
              trigger("username");
            }}
            type="text"
            placeholder="사용자 이름"
            valid={formState.errors.username}
          />
          <FormError message={formState.errors?.username?.message} />
          <Input
            {...register("password", {
              required: "비밀번호를 입력해주세요",
              minLength: {
                value: 8,
                message: "너무 짧은 비밀번호입니다.",
              },
            })}
            type="password"
            placeholder="비밀번호"
            valid={formState.errors.password}
          />
          <FormError message={formState.errors?.password?.message} />
          <SubmitButton
            type="submit"
            value={loading ? "로그인 중..." : "로그인"}
            disabled={
              !objIsEmpty(formState.errors) || !formState.isValid || loading
            }
          />
        </form>
        <Seperator>
          <div></div>
          <span>처음이라면</span>
          <div></div>
        </Seperator>
        <LinkButton to={routes.signUp}>회원 가입</LinkButton>
      </FormBox>
      <FooterTitle title="Boogibooks" />
    </AuthLayout>
  );
};
export default Login;
