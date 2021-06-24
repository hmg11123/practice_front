import { gql } from "apollo-boost";

export const GET_BOARD = gql`
 query getBoard($id: String!) {
  getBoard(id: $id) {
   title
   desc
   author {
    _id
    nickName
   }
   createdAt
   hit
  }
 }
`;

export const UPDATE_BOARD = gql`
 mutation updateBoard($id: String!, $title: String!, $desc: String!) {
  updateBoard(id: $id, title: $title, desc: $desc)
 }
`;

export const DELETE_BOARD = gql`
 mutation deleteBoard($id: String!) {
  deleteBoard(id: $id)
 }
`;
