import { gql } from "apollo-boost";

export const CRETAE_USER = gql`
 mutation createUser(
  $name: String!
  $nickName: String!
  $affiliatedCompany: String!
  $passWord: String!
  $email: String!
 ) {
  createUser(
   name: $name
   nickName: $nickName
   affiliatedCompany: $affiliatedCompany
   passWord: $passWord
   email: $email
  )
 }
`;
