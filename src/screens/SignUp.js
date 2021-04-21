import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
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
import SIGNUP_MUTATION from "../components/mutations/SignupMutation";
import routes from "../routes";

const Subtitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  h3 {
    font-size: 18px;
    text-align: center;
    font-weight: 700;
    color: ${(props) => props.theme.accent};
  }
`;

const SignUp = () => {
  const history = useHistory();
  const {
    register,
    formState,
    handleSubmit,
    getValues,
    setError,
    setValue,
    trigger,
  } = useForm({
    mode: "onChange",
  });
  const signUpCompleted = (data) => {
    const {
      createAccount: { ok, error },
    } = data;
    if (!ok) {
      if (error.includes("사용자")) {
        setError("username", { message: error });
      } else if (error.includes("이메일")) {
        setError("email", { message: error });
      } else {
        setError("result", { message: error });
      }
      return;
    }
    const { username, password } = getValues();
    login({
      variables: {
        username,
        password,
      },
    });
  };
  const [createAccount, { loading }] = useMutation(SIGNUP_MUTATION, {
    onCompleted: signUpCompleted,
  });
  const loginCompleted = (data) => {
    const {
      login: { ok, error, token },
    } = data;
    if (!ok) {
      setError("result", { message: error });
    }
    logUserIn(token);
    history.push(routes.home);
  };
  const [login] = useMutation(LOGIN_MUTATION, {
    onCompleted: loginCompleted,
  });
  const onSubmitValid = (data) => {
    if (loading) {
      return;
    }
    createAccount({
      variables: {
        ...data,
      },
    });
  };
  const onSubmitInvalid = () => {};

  return (
    <AuthLayout>
      <PageTitle title="가입하기" />
      <FormBox>
        <Subtitle>
          <h3>부기와 함께 책읽기 여행을 시작해볼까요?</h3>
        </Subtitle>
        <form onSubmit={handleSubmit(onSubmitValid, onSubmitInvalid)}>
          <Input
            {...register("username", {
              required: "사용자 이름을 입력해야합니다.",
              pattern: {
                value: /^[a-z]+[a-z0-9_.|-]{5,20}$/g,
                message:
                  "영어 소문자, 숫자, -, |, _, . 기호만 사용 가능합니다.",
              },
              maxLength: {
                value: 20,
                message: "20자 이내의 이름이어야 합니다.",
              },
              minLength: {
                value: 6,
                message: "6자 이상의 이름이어야 합니다.",
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
          <FormError
            message={formState.errors?.username?.message}
            caption="(app 내 자신의 이름, 가입 후 변경 가능)"
          />
          <Input
            {...register("email", {
              required: "이메일을 입력해야합니다.",
              pattern: {
                value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                message: "제대로 된 이메일 형식이어야합니다.",
              },
            })}
            type="text"
            placeholder="이메일"
            valid={formState.errors.email}
          />
          <FormError
            message={formState.errors?.email?.message}
            caption="(부기의 알림을 받아볼 이메일을 알려주세요)"
          />
          <Input
            {...register("password", {
              required: "비밀번호를 입력해야합니다.",
              pattern: {
                value: /^.*(?=^.{8,}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/,
                message: "비밀번호는 문자/숫자/특수문자를 포함해야합니다.",
              },
              minLength: {
                value: 8,
                message: "비밀번호는 8자를 넘어야합니다.",
              },
            })}
            type="password"
            placeholder="비밀번호"
            valid={formState.errors.password}
          />
          <FormError
            message={formState.errors?.password?.message}
            caption="(문자, 숫자, 특수문자를 포함한 8자 이상)"
          />
          <SubmitButton
            type="submit"
            value={loading ? "시작하는 중..." : "시작하기"}
            disabled={
              !objIsEmpty(formState.errors) || !formState.isValid || loading
            }
          />
          <FormError message={formState.errors?.result?.message} />
        </form>
        <Seperator>
          <div></div>
          <span>가입했다면</span>
          <div></div>
        </Seperator>
        <LinkButton to={routes.home}>로그인</LinkButton>
      </FormBox>
      <FooterTitle title="Boogibooks" />
    </AuthLayout>
  );
};
export default SignUp;
