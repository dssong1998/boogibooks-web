import styled from "styled-components";
import PropTypes from "prop-types";

const SFormError = styled.div`
  margin: 3px 0px;
  display: flex;
  align-items: flex-start;
  justify-content: left;
  width: 100%;
  span {
    color: #c23616;
    font-weight: 600;
    font-size: 10px;
  }
  p {
    padding: 5px;
    width: 100%;
    font-size: 8px;
  }
`;

const FormError = ({ message, caption }) => {
  if (!message || message === "") {
    if (!caption || caption === "") {
      return null;
    }
    return (
      <SFormError>
        <p>{caption}</p>
      </SFormError>
    );
  }
  return (
    <SFormError>
      <span>{message}</span>
    </SFormError>
  );
};
FormError.propTypes = {
  message: PropTypes.string,
  caption: PropTypes.string,
};

export default FormError;
