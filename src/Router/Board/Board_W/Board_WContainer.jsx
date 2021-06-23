import React from "React";
import { useMutation, useQuery } from "react-apollo-hooks";
import { toast } from "react-toastify";
import useInput from "../../../Hooks/useInput";
import Board_WPresenter from "./Board_WPresenter";
import { GET_USER, CREATE_BOARD } from "./Board_WQueries";

const Board_WContainer = ({ history }) => {
 const newTitle = useInput(``);
 const newDesc = useInput(``);
 const userId = sessionStorage.getItem(`loginData`);
 const {
  data: userBannerDatum,
  loading: userBannerLoading,
  refetch: userBannerRefetch,
 } = useQuery(GET_USER, {
  variables: { id: userId },
 });

 const [CreateBoardMutation] = useMutation(CREATE_BOARD);

 const createBoardHandler = async () => {
  console.log(newTitle.value);
  console.log(newDesc.value);
  console.log(userId);
  const { data } = await CreateBoardMutation({
   variables: {
    title: newTitle.value,
    desc: newDesc.value,
    author: userId,
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

 const userData = userBannerDatum && userBannerDatum.getUser;
 return (
  <Board_WPresenter
   newTitle={newTitle}
   newDesc={newDesc}
   userData={userData}
   createBoardHandler={createBoardHandler}
  />
 );
};

export default Board_WContainer;
