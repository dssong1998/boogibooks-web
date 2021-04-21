import { gql } from "@apollo/client";

export const SEARCH_USER_QUERY = gql`
  query searchUsers($keyword: String!, $lastId: Int) {
    searchUsers(keyword: $keyword, lastId: $lastId) {
      id
      username
      bio
      profileImage
    }
  }
`;
