import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-apollo-hooks";
import Board_DPresenter from "./Board_DPresenter";
import useInput from "../../../Hooks/useInput";
import { GET_BOARD, UPDATE_BOARD, DELETE_BOARD } from "./Board_DQueries";
import { toast } from "react-toastify";

const Board_DContainer = ({ match, history }) => {
 const inputTitle = useInput("");
 const inputDesc = useInput("");
 const [isDialogOpen, setIsDialogOpen] = useState(false);
 const boardKey = match.params.key;
 const userId = sessionStorage.getItem("loginData");
 const {
  data: boardBannerDatum,
  loading: boardBannerLoading,
  refetch: boardBannerRefetch,
 } = useQuery(GET_BOARD, {
  variables: { id: boardKey },
 });

 const [updateBoardMutation] = useMutation(UPDATE_BOARD);
 const [deleteBoardMutation] = useMutation(DELETE_BOARD);

 const _isDialogOpenToggle = () => {
  setIsDialogOpen(!isDialogOpen);
  inputTitle.setValue(`${boardBannerDatum && boardBannerDatum.getBoard.title}`);
  inputDesc.setValue(`${boardBannerDatum && boardBannerDatum.getBoard.desc}`);
 };

 const updateBoardHandler = () => {
  if (!inputTitle.value) {
   toast.error("제목을 입력해주세요");
   return;
  }
  if (!inputDesc.value) {
   toast.error("게시글을 입력해주세요");
   return;
  }
  const data = updateBoardMutation({
   variables: {
    id: boardKey,
    title: inputTitle.value,
    desc: inputDesc.value,
   },
  });

  if (data) {
   toast.info(`성공`);

   setIsDialogOpen(!isDialogOpen);
  } else {
   toast.error(`애러`);
   return;
  }
 };

 const deleteBoardHandler = () => {
  if (boardBannerDatum && boardBannerDatum.getBoard.author._id === userId) {
   if (confirm("이 계시글을 지울꺼임?")) {
    const data = deleteBoardMutation({
     variables: {
      id: boardKey,
     },
    });

    if (data) {
     toast.info("게시글이 성공적으로 삭제되었습니다.");
     history.push("/");
    } else {
     toast.error("애러!!");
    }
   } else {
    toast.error("취소하셧습니다.");
   }
  } else {
   toast.error("작성자가 아닙니다.");
   return;
  }
 };

 useEffect(() => {
  boardBannerRefetch();
 }, []);

 return (
  <Board_DPresenter
   boardBannerDatum={boardBannerDatum && boardBannerDatum.getBoard}
   _isDialogOpenToggle={_isDialogOpenToggle}
   isDialogOpen={isDialogOpen}
   updateBoardHandler={updateBoardHandler}
   inputTitle={inputTitle}
   inputDesc={inputDesc}
   deleteBoardHandler={deleteBoardHandler}
  />
 );
};

export default Board_DContainer;
