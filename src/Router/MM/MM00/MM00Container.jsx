import React, { useEffect, useState } from "react";
import MM00Presenter from "./MM00Presenter";
import { useQuery } from "react-apollo-hooks";
import {
 GET_ALL_BOARD,
 GET_USER,
 GET_ALL_BOARD_LENGTH,
 GET_BOARD_TOTAL_PAGE,
} from "./MM00Queries";
import { toast } from "react-toastify";

const MM00Container = ({ history }) => {
 const [searchValue, setSearchValue] = useState("");
 const [pages, setPages] = useState(null);
 const [currentPage, setCurrentPage] = useState(0);
 const [limit, setLimit] = useState(10);

 const {
  data: boardBannerDatum,
  loading: boardBannerLoding,
  refetch: boardBannerRefetch,
 } = useQuery(GET_ALL_BOARD, {
  variables: {
   searchValue,
   limit,
   currentPage,
  },
 });

 const {
  data: userBannerDatum,
  loading: userBannerLoding,
  refetch: userBannerRefetch,
 } = useQuery(GET_USER, {
  skip: true,
  variables: { id: boardBannerDatum && boardBannerDatum.getAllBoard.author },
 });

 const {
  data: boardAll,
  loading: boardAllLoading,
  refetch: boardAllRefetch,
 } = useQuery(GET_ALL_BOARD_LENGTH, {
  variables: {
   searchValue,
  },
 });

 const {
  data: boardTotalPage,
  loading: boardTotalLoading,
  refetch: boardTotalPageRefetch,
 } = useQuery(GET_BOARD_TOTAL_PAGE, {
  variables: {
   searchValue,
   limit,
  },
 });

 console.log(userBannerDatum);

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
  if (boardTotalPage && !pages) {
   const temp = [];

   for (let i = 0; i < boardTotalPage.getBoardTotalPage; i++) {
    temp.push(i);
   }
   setPages(temp);
  }
 }, [boardTotalPage]);
 useEffect(() => {
  boardAllRefetch();
  boardBannerRefetch();
 }, []);

 useEffect(() => {
  // noticeDatumRefetch();

  boardBannerRefetch();
  if (boardTotalPage && !pages) {
   const temp = [];

   for (let i = 0; i < boardTotalPage.getBoardTotalPage; i++) {
    temp.push(i);
   }
   setPages(temp);
  }
 }, [boardTotalPage]);

 const prevAndNextPageChangeNoticeHandler = (page) => {
  if (page < 0) {
   toast.error("첫 페이지 입니다.");
   return;
  }

  if (page > boardTotalPage.getBoardTotalPage - 1) {
   toast.error("마지막 페이지 입니다.");
   return;
  }

  setCurrentPage(page);
 };

 useEffect(() => {
  boardBannerRefetch();
 }, []);

 const changePageHandler = (page) => {
  setCurrentPage(page);
 };

 return (
  <MM00Presenter
   boardBannerDatum={boardBannerDatum && boardBannerDatum.getAllBoard}
   moveLinkHandler={moveLinkHandler}
   logout={logout}
   prevAndNextPageChangeNoticeHandler={prevAndNextPageChangeNoticeHandler}
   writeMoveLinkHandler={writeMoveLinkHandler}
   limit={limit}
   searchValue={searchValue}
   setSearchValue={setSearchValue}
   currentPage={currentPage}
   totalCnt={boardAll && boardAll.getAllBoardlength}
   setCurrentPage={setCurrentPage}
   pages={pages}
   changePageHandler={changePageHandler}
  />
 );
};

export default MM00Container;
