import { gql } from "apollo-boost";

export const GET_ALL_BOARD = gql`
 query getAllBoard {
  getAllBoard {
   _id
   title
   desc
   createdAt
   author
   hit
  }
 }
`;

export const GET_USER = gql`
 query getUser($id: String!) {
  getUser(id: $id) {
   name
  }
 }
`;
