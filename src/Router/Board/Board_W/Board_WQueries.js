import { gql } from "apollo-boost";

export const GET_USER = gql`
 query getUser($id: String!) {
  getUser(id: $id) {
   name
   nickName
   email
  }
 }
`;

export const CREATE_BOARD = gql`
 mutation createBoard(
  $title: String!
  $desc: String!
  $author: String!
  $detailAuthor: String!
 ) {
  createBoard(
   title: $title
   desc: $desc
   author: $author
   detailAuthor: $detailAuthor
  )
 }
`;
