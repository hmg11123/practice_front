import { gql } from "apollo-boost";

export const GET_ALL_BOARD = gql`
 query getAllBoard {
  getAllBoard {
   _id
   title
   desc
   createdAt
   author {
    nickName
   }
   hit
  }
 }
`;

// export const LOGIN_USER_DATA = gql`
//  query idUserData($id: String!) {
//   idUserData(id: $id) {
//    name
//    email
//    createdAt
//   }
//  }
// `;
