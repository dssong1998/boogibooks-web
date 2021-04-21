import PropTypes from "prop-types";
import styled from "styled-components";

const SFooterTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin-top: 25px;
    font-size: 18px;
    font-family: "Do Hyeon", sans-serif;
    color: ${(props) => props.theme.accent};
  }
`;
const FooterTitle = ({ title }) => {
  return (
    <SFooterTitle>
      <h1>{title}</h1>
    </SFooterTitle>
  );
};
FooterTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
export default FooterTitle;
