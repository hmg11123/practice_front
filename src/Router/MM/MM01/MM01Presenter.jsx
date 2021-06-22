import React from "react";
import {
 Wrapper,
 RsWrapper,
 CommonTitle,
 StyledInput,
 CheckBtn,
} from "../../../Components/CommonComponents";

const MM01Presenter = ({ inputEmail, inputPassWord, loginHandler }) => {
 return (
  <Wrapper>
   <RsWrapper>
    <Wrapper margin={`40px 0 20px 0`}>
     <CommonTitle>로그인</CommonTitle>
    </Wrapper>

    <Wrapper margin={`70px 0`}>
     <StyledInput {...inputEmail} placeholder="이메일" />
     <StyledInput {...inputPassWord} placeholder="비밀번호" />
    </Wrapper>

    <Wrapper>
     <CheckBtn onClick={() => loginHandler()}>로그인</CheckBtn>
    </Wrapper>
   </RsWrapper>
  </Wrapper>
 );
};

export default MM01Presenter;
