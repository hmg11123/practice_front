import { gql } from "apollo-boost";

export const GET_ALL_BOARD = gql`
 query getAllBoard($searchValue: String!, $limit: Int!, $currentPage: Int!) {
  getAllBoard(
   searchValue: $searchValue
   limit: $limit
   currentPage: $currentPage
  ) {
   _id
   title
   desc
   createdAt
   author
   hit
  }
 }
`;

export const GET_ALL_BOARD_LENGTH = gql`
 query getAllBoardlength($searchValue: String!) {
  getAllBoardlength(searchValue: $searchValue)
 }
`;

export const GET_BOARD_TOTAL_PAGE = gql`
 query getBoardTotalPage($limit: Int!, $searchValue: String!) {
  getBoardTotalPage(limit: $limit, searchValue: $searchValue)
 }
`;

export const GET_USER = gql`
 query getUser($id: String!) {
  getUser(id: $id) {
   name
  }
 }
`;
