import { gql } from "@apollo/client";

const ME_QUERY = gql`
  query me {
    me {
      username
      profileImage
      bio
    }
  }
`;

export default ME_QUERY;
