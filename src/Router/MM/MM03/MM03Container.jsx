import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-apollo-hooks";
import { toast } from "react-toastify";
import useInput from "../../../Hooks/useInput";
import MM03Presenter from "./MM03Presenter";
import { GET_USER, UPDATE_USER, DELETE_USER } from "./MM03Queries";

const MM03Container = ({ history }) => {
 const inputName = useInput("");
 const inputNickName = useInput("");
 const inputAffiliatedCompany = useInput("");
 const userId = JSON.parse(sessionStorage.getItem(`loginData`));
 const [isDialogOpen, setIsDialogOpen] = useState(false);

 const {
  data: userBannerDatum,
  loading: userBannerLoading,
  refetch: userBannerRefetch,
 } = useQuery(GET_USER, {
  variables: {
   id: userId._id,
  },
 });

 const [updateUserMutation] = useMutation(UPDATE_USER);
 const [deleteUserMutation] = useMutation(DELETE_USER);

 const _isDialogOpenToggle = () => {
  if (userBannerDatum && userBannerDatum.getUser._id === userId._id) {
   setIsDialogOpen(!isDialogOpen);
  } else {
   toast.error("작성자가 아닙니다.");
   return;
  }
 };

 const updateUserHandler = async () => {
  const { data } = await updateUserMutation({
   variables: {
    id: userId._id,
    name: inputName.value,
    nickName: inputNickName.value,
    affiliatedCompany: inputAffiliatedCompany.value,
   },
  });

  console.log(data);
  if (data) {
   toast.info("성공");
   setIsDialogOpen(!isDialogOpen);
  } else {
   toast.error("실패");
  }
 };

 const deleteUserHandler = async () => {
  if (confirm("정말로 탈퇴하실 겁니까?")) {
   const { data } = await deleteUserMutation({
    variables: {
     id: userId._id,
    },
   });
   if (data) {
    toast.info("탈퇴도었습니다.");
    history.push("/");
    sessionStorage.removeItem("loginData");
   } else {
    toast.error("실패하셧습니다.");
   }
  } else {
   toast.error("취소하셧습니디.");
  }
 };

 useEffect(() => {
  inputName.setValue(userBannerDatum && userBannerDatum.getUser.name);
  inputNickName.setValue(userBannerDatum && userBannerDatum.getUser.nickName);
  inputAffiliatedCompany.setValue(
   userBannerDatum && userBannerDatum.getUser.affiliatedCompany,
  );
 }, [userBannerDatum]);

 useEffect(() => {
  userBannerRefetch();
 }, [isDialogOpen]);

 console.log(userBannerDatum && userBannerDatum.getUser);
 return (
  <MM03Presenter
   userBannerDatum={userBannerDatum && userBannerDatum.getUser}
   updateUserHandler={updateUserHandler}
   inputName={inputName}
   inputNickName={inputNickName}
   inputAffiliatedCompany={inputAffiliatedCompany}
   _isDialogOpenToggle={_isDialogOpenToggle}
   isDialogOpen={isDialogOpen}
   deleteUserHandler={deleteUserHandler}
  ></MM03Presenter>
 );
};

export default MM03Container;
