import styled from "styled-components";

export const BaseBox = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  width: 100%;
  border-radius: 3px;
`;

export const FatText = styled.span`
  font-weight: 600;
`;
