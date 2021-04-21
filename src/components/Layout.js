import styled from "styled-components";
import Header from "./Header";

const Content = styled.div`
  margin: 0 auto;
  margin-top: 25px;
  max-width: 625px;
  width: 100%;
  padding: 0px 10px;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
};
export default Layout;
