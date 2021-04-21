import styled from "styled-components";
import { FatText } from "../commonStyles";
import ProfileImage from "../ProfileImage";
import PropTypes from "prop-types";
import { timeToString } from "../common";

const PostContainer = styled.div`
  background-color: white;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 5px;
  margin-bottom: 20px;
`;
const PostHeader = styled.div`
  padding: 5px 10px;
  display: flex;
  align-items: center;
`;

const Username = styled(FatText)`
  margin-left: 15px;
`;

const PostLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
`;

const PhotoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 311.5px;
  overflow: hidden;
  border-radius: 5px;
  min-width: 50%;
`;

const Photo = styled.img`
  width: 100%;
  object-fit: cover;
`;

const PostData = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 50%;
  padding: 15px;
  justify-content: space-between;
`;
const DataBox = styled.div``;
const ActionBox = styled.div``;

const PhotoActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }
`;

const Payload = styled.div`
  padding: 10px 0px;
`;

const Likes = styled(FatText)`
  margin-top: 15px;
  display: block;
`;

const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 3px 10px;
`;
const BookInfo = styled.span`
  color: ${(props) => props.theme.fontColor};
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 3px;
`;
const ReadingInfo = styled.span`
  color: ${(props) => props.theme.lightGray};
  font-size: 12px;
  font-weight: 400;
  text-align: right;
`;
const TimeInfo = styled.span`
  color: ${(props) => props.theme.lightGray};
  font-size: 12px;
  font-weight: 400;
  text-align: right;
  margin-bottom: 3px;
`;

const Post = ({
  id,
  postImage,
  creator,
  comment,
  likes,
  book,
  readingPages,
  createdAt,
}) => {
  return (
    <PostContainer key={id}>
      <PostLayout>
        <PhotoBox>
          <Photo src={postImage} />
        </PhotoBox>
        <PostData>
          <DataBox>
            <PostHeader>
              <ProfileImage url={creator.profileImage || ""} lg />
              <Username>{creator.username}</Username>
            </PostHeader>
            <InfoArea>
              <BookInfo>{`${book.title} / ${book.author}`}</BookInfo>
              <TimeInfo>{timeToString(createdAt)}</TimeInfo>
              <ReadingInfo>{`${readingPages}p`}</ReadingInfo>
            </InfoArea>
            <Payload>
              <br />
              <p>{comment}</p>
            </Payload>
          </DataBox>
          <ActionBox>
            <PhotoActions></PhotoActions>
            <Likes>{likes === 1 ? "1 like" : `${likes} likes`}</Likes>
          </ActionBox>
        </PostData>
      </PostLayout>
    </PostContainer>
  );
};

Post.propTypes = {
  id: PropTypes.number.isRequired,
  creator: PropTypes.shape({
    profileImage: PropTypes.string,
    username: PropTypes.string.isRequired,
  }),
  postImage: PropTypes.string.isRequired,
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }),
  comment: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  readingPages: PropTypes.number,
  createdAt: PropTypes.string.isRequired,
};

export default Post;
