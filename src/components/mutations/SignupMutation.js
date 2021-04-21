import { gql } from "@apollo/client";

const SIGNUP_MUTATION = gql`
  mutation createAccount(
    $username: String!
    $password: String!
    $email: String!
  ) {
    createAccount(username: $username, password: $password, email: $email) {
      ok
      error
      user {
        id
        username
        password
      }
    }
  }
`;

export default SIGNUP_MUTATION;
