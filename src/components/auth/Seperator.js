import styled from "styled-components";

const StyledSeperator = styled.div`
  width: 100%;
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  div {
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.lightGray};
  }
  span {
    display: inline-table;
    width: 66px;
    margin: 0px 10px;
    color: ${(props) => props.theme.lightGray};
    font-weight: 700;
    text-transform: uppercase;
  }
`;
const Seperator = ({ children }) => {
  return <StyledSeperator>{children}</StyledSeperator>;
};
export default Seperator;
