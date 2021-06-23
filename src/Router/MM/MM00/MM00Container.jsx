import React, { useEffect } from "react";
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

 const moveLinkHandler = (link) => {
  history.push(`/${link}`);
 };

 const writeMoveLinkHandler = () => {
  if (sessionStorage.getItem(`loginData`)) {
   history.push(`/write`);
  } else {
   toast.error("로그인 후 이용해주세요.");
   history.push(`/signIn`);
  }
 };

 const logout = () => {
  window.sessionStorage.removeItem(`loginData`);
  if (!sessionStorage.getItem(`loginData`)) {
   toast.info(`로그아웃 되었습니다.`);
   history.push(`/`);
  }
 };

 useEffect(() => {
  boardBannerRefetch();
 }, []);

 return (
  <MM00Presenter
   boardBannerDatum={boardBannerDatum && boardBannerDatum.getAllBoard}
   moveLinkHandler={moveLinkHandler}
   logout={logout}
   writeMoveLinkHandler={writeMoveLinkHandler}
  />
 );
};

export default MM00Container;
