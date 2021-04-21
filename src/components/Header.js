import { useReactiveVar } from "@apollo/client";
import {
  faBookOpen,
  faMapSigns,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { isLoggedInVar } from "../apollo";
import routes from "../routes";
import useUser from "./hooks/useUser";
import ProfileImage from "./ProfileImage";

const SHeader = styled.header`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 10px;
`;

const Wrapper = styled.div`
  max-width: 950px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Column = styled.div``;

const Title = styled.h1`
  color: ${(props) => props.theme.accent};
  font-size: 24px;
  font-family: "Do Hyeon", sans-serif;
`;
const Search = styled.input`
  width: 120px;
  padding: 7px 20px;
  text-align: center;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.fontColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 5px;
  font-size: 14px;
  margin-left: 10px;
`;
const IconContainer = styled.div`
  display: flex;
`;

const Icon = styled.span``;

const RightIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
`;

const Button = styled.span`
  background-color: ${(props) => {
    if (props.name === "signup") {
      return props.theme.lightGray;
    } else {
      return props.theme.accent;
    }
  }};
  border-radius: 5px;
  padding: 5px 15px;
  color: white;
  font-weight: 500;
  margin-right: ${(props) => {
    if (props.name === "signup") {
      return "0px";
    } else {
      return "15px";
    }
  }};
  border: 1px solid ${(props) => props.theme.lightGray};
`;

const Header = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const loggedInUser = useUser();
  const history = useHistory();
  const handleSubmit = ({
    target: {
      lastChild: { value },
    },
  }) => {
    history.push(routes.search, { keyword: value });
  };
  return (
    <SHeader>
      <Wrapper>
        <Column>
          <Link to={routes.home}>
            <Title>Boogi</Title>
          </Link>
        </Column>
        <Column>
          <form onSubmit={handleSubmit}>
            <Icon>
              <FontAwesomeIcon icon={faSearch} color="#85a977" size="lg" />
            </Icon>
            <Search placeholder="검색" />
          </form>
        </Column>
        <Column>
          {isLoggedIn ? (
            <IconContainer>
              {/* <Link to={routes.profile(loggedInUser?.me?.username)}> */}
              <ProfileImage url={loggedInUser?.me?.profileImage || ""} />
              {/* </Link> */}
              {/* <Link to={routes.schedules(loggedInUser?.me?.username)}> */}
              <RightIcon>
                <FontAwesomeIcon icon={faBookOpen} size="lg" />
              </RightIcon>
              {/* </Link> */}
              {/* <Link to={routes.config}> */}
              <RightIcon>
                <FontAwesomeIcon icon={faMapSigns} size="lg" />
              </RightIcon>
              {/* </Link> */}
            </IconContainer>
          ) : (
            <>
              <Link to={routes.home}>
                <Button name="login">로그인</Button>
              </Link>
              <Link to={routes.signUp}>
                <Button name="signup">가입하기</Button>
              </Link>
            </>
          )}
        </Column>
      </Wrapper>
    </SHeader>
  );
};

export default Header;
