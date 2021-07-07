import { gql } from "apollo-boost";

export const LOGIN_USER = gql`
 query loginUser($email: String!, $passWord: String!) {
  loginUser(email: $email, passWord: $passWord) {
   isLogin
   userData {
    _id
    nickName
    email
   }
  }
 }
`;
