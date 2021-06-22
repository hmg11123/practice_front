import React from "react";
import { useMutation } from "react-apollo-hooks";
import { CRETAE_USER } from "./MM02Queries";
import MM02Presenter from "./MM02Presenter";
import useInput from "../../../Hooks/useInput";
import { toast } from "react-toastify";

const MM02Container = ({ history }) => {
 const newName = useInput("");
 const newNickName = useInput("");
 const newAffiliatedCompany = useInput("");
 const newPassWord = useInput("");
 const newRePassWord = useInput("");
 const newEmail = useInput("");

 const [CreateUserMutation] = useMutation(CRETAE_USER);

 const moveLinkHandler = (link) => {
  history.push(`/${link}`);
 };

 const createUserHandler = async () => {
  if (!newName.value) {
   toast.error("이름을 입력해주세요");
   return;
  }
  if (!newEmail.value) {
   toast.error("이메일을 입력해주세요");
   return;
  }
  if (!newNickName.value) {
   toast.error("닉네임을 입력해주세요");
   return;
  }
  if (!newAffiliatedCompany.value) {
   toast.error("회사를 입력해주세요");
   return;
  }
  if (!newPassWord.value) {
   toast.error("비밀번호를 입력해주세요");
   return;
  }
  if (!newRePassWord.value) {
   toast.error("비밀번호를 한번 더 입력해주세요");
   return;
  }
  if (newPassWord.value === newRePassWord.value) {
   const { data } = await CreateUserMutation({
    variables: {
     email: newEmail.value,
     name: newName.value,
     nickName: newNickName.value,
     affiliatedCompany: newAffiliatedCompany.value,
     passWord: newPassWord.value,
    },
   });
   if (data) {
    toast.info("성공적으로 생성되었습니다.");
    moveLinkHandler("");
   } else {
    toast.info("실패하였습니다.");
   }
  } else {
   toast.error("비밀번호가 같지 않습니다.");
   return;
  }
 };
 return (
  <MM02Presenter
   createUserHandler={createUserHandler}
   newName={newName}
   newEmail={newEmail}
   newNickName={newNickName}
   newAffiliatedCompany={newAffiliatedCompany}
   newPassWord={newPassWord}
   newRePassWord={newRePassWord}
  />
 );
};

export default MM02Container;
