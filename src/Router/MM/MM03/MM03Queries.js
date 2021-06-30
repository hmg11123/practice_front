import { gql } from "apollo-boost";

export const GET_USER = gql`
 query getUser($id: String!) {
  getUser(id: $id) {
   _id
   name
   nickName
   createdAt
   email
   affiliatedCompany
  }
 }
`;

export const UPDATE_USER = gql`
 mutation updateUser(
  $id: String!
  $name: String!
  $nickName: String!
  $affiliatedCompany: String!
 ) {
  updateUser(
   id: $id
   name: $name
   nickName: $nickName
   affiliatedCompany: $affiliatedCompany
  )
 }
`;

export const DELETE_USER = gql`
 mutation deleteUser($id: String!) {
  deleteUser(id: $id)
 }
`;
