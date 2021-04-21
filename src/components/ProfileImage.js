import styled from "styled-components";

const SProfileImage = styled.div`
  width: ${(props) => (props.lg ? "32px" : "25px")};
  height: ${(props) => (props.lg ? "32px" : "25px")};
  border-radius: 50%;
  background-color: #d2d2d2;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  max-width: 100%;
`;

const ProfileImage = ({ url = "", lg = false }) => {
  return (
    <SProfileImage lg={lg}>
      {url !== "" ? <Img alt="profile" src={url} /> : null}
    </SProfileImage>
  );
};

export default ProfileImage;
