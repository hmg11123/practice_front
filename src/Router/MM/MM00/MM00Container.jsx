import React from "react";
import MM00Presenter from "./MM00Presenter";
import { useQuery } from "react-apollo-hooks";
import { GET_ALL_BOARD } from "./MM00Queries";
import { toast } from "react-toastify";

const MM00Container = ({ history }) => {
 const {
  data: boardBannerDatum,
  loading: boardBannerLoding,
  refetch: boardBannerRefetch,
 } = useQuery(GET_ALL_BOARD);

 console.log(boardBannerDatum && boardBannerDatum.getAllBoard);

 const moveLinkHandler = (link) => {
  history.push(`/${link}`);
 };

 const logout = () => {
  window.sessionStorage.removeItem(`loginData`);
  if (!sessionStorage.getItem(`loginData`)) {
   alert(`로그아웃 되었습니다.`);
   location.reload();
  }
 };

 console.log(boardBannerDatum && boardBannerDatum.getAllBoard);
 return (
  <MM00Presenter
   boardBannerDatum={boardBannerDatum && boardBannerDatum.getAllBoard}
   moveLinkHandler={moveLinkHandler}
   logout={logout}
  />
 );
};

export default MM00Container;
