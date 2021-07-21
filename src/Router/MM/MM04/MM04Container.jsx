import React, { useState } from "react";
import { useQuery } from "react-apollo-hooks";
import MM04Presenter from "./MM04Presenter";
import { GET_ALL_NOTICE } from "./MM04Queries";

const MM04Container = ({ history }) => {
 const [searchValue, setSearchValue] = useState("");
 const [pages, setPages] = useState(null);
 const [currentPage, setCurrentPage] = useState(0);
 const [limit, setLimit] = useState(10);

 const {
  data: noticeBannerDatum,
  loading: noticeBannerLoading,
  refetch: noticeBannerRefetch,
 } = useQuery(GET_ALL_NOTICE, {
  variables: {
   searchValue,
   limit,
   currentPage,
  },
 });

 const writeMoveLinkHandler = () => {
  history.push(`/write`);
 };

 console.log(noticeBannerDatum && noticeBannerDatum.getAllNotice);
 return (
  <MM04Presenter
   noticeBannerDatum={noticeBannerDatum && noticeBannerDatum.getAllNotice}
   writeMoveLinkHandler={writeMoveLinkHandler}
  />
 );
};

export default MM04Container;
