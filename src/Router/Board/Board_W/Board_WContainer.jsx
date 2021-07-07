import React from "React";
import { useMutation, useQuery } from "react-apollo-hooks";
import { toast } from "react-toastify";
import useInput from "../../../Hooks/useInput";
import Board_WPresenter from "./Board_WPresenter";
import { GET_USER, CREATE_BOARD } from "./Board_WQueries";

const Board_WContainer = ({ history }) => {
 const newTitle = useInput(``);
 const newDesc = useInput(``);
 const userId = JSON.parse(sessionStorage.getItem(`loginData`));

 const [CreateBoardMutation] = useMutation(CREATE_BOARD);

 console.log(userId.nickName);

 const createBoardHandler = async () => {
  const { data } = await CreateBoardMutation({
   variables: {
    title: newTitle.value,
    desc: newDesc.value,
    author: userId.nickName,
    detailAuthor: userId._id,
   },
  });

  console.log(data);

  if (data) {
   history.push(`/`);
   toast.info(`게시글 생성 성공`);
   newTitle.setValue(``);
   newDesc.setValue(``);
  } else {
   toast.error(`실패`);
   return;
  }
 };

 return (
  <Board_WPresenter
   newTitle={newTitle}
   newDesc={newDesc}
   createBoardHandler={createBoardHandler}
  />
 );
};

export default Board_WContainer;
