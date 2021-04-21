import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkButton = styled(Link)`
  text-align: center;
  width: 100%;
  background-color: ${(props) => props.theme.lightGray};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px;
`;
export default LinkButton;
