import React, { useEffect, useState } from "react";
import { useQuery } from "react-apollo-hooks";
import { toast } from "react-toastify";
import useInput from "../../../Hooks/useInput";
import MM01Presenter from "./MM01Presenter";
import { LOGIN_USER } from "./MM01Queries";

const MM01Container = ({ history }) => {
 const inputEmail = useInput("");
 const inputPassWord = useInput("");
 const [tryLogin, setTryLogin] = useState(true);

 const {
  data: loginBannerDatum,
  loading: loginBannerLoding,
  refetch: loginBannerRefetch,
 } = useQuery(LOGIN_USER, {
  skip: tryLogin,
  variables: { email: inputEmail.value, passWord: inputPassWord.value },
 });

 const loginHandler = () => {
  setTryLogin(false);
  if (loginBannerDatum && loginBannerDatum.loginUser.isLogin) {
   const userId = loginBannerDatum && loginBannerDatum.loginUser.userData._id;
   window.sessionStorage.setItem(
    `loginData`,
    JSON.stringify(loginBannerDatum.loginUser.userData),
   );
   history.push("/");
   toast.info("성공적으로 로그인이 되었습니다.");
  } else {
   toast.error("이메일 또는 비밀번호가 잘되었습니다.");
   return;
  }
 };

 return (
  <MM01Presenter
   loginHandler={loginHandler}
   inputEmail={inputEmail}
   inputPassWord={inputPassWord}
  />
 );
};

export default MM01Container;
