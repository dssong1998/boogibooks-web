import { gql } from "@apollo/client";

const FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      id
      creator {
        username
        profileImage
      }
      book {
        title
        author
      }
      postImage
      comment
      likes
      reply {
        payload
        user {
          username
          profileImage
        }
      }
      readingPages
      createdAt
      isMine
    }
  }
`;

export default FEED_QUERY;
