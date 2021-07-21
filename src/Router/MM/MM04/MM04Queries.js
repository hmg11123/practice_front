import { gql } from "apollo-boost";

export const GET_ALL_NOTICE = gql`
 query getAllNotice($searchValue: String!, $limit: Int!, $currentPage: Int!) {
  getAllNotice(
   searchValue: $searchValue
   limit: $limit
   currentPage: $currentPage
  ) {
   _id
   title
   desc
   createdAt
   author
   detailAuthor
  }
 }
`;
