import React from "react";
import {
 Wrapper,
 CommonInput,
 RsWrapper,
 CommonTitle,
 CommonButton,
 StyledInput,
 PText,
 CheckBtn,
} from "../../../Components/CommonComponents";
import Theme from "../../../Styles/Theme";
import { withResizeDetector } from "react-resize-detector";

const MM02Presenter = ({
 createUserHandler,
 newName,
 newNickName,
 newAffiliatedCompany,
 newPassWord,
 newRePassWord,
 newEmail,
}) => {
 return (
  <Wrapper>
   <RsWrapper>
    <Wrapper margin={`40px 0 20px 0`}>
     <CommonTitle>회원가입</CommonTitle>
    </Wrapper>
    {/** -------------------------------------------------------- */}
    <Wrapper margin={`70px 0`}>
     <StyledInput placeholder="EMAIL" {...newEmail} />
     <StyledInput placeholder="NAME" {...newName} />
     <StyledInput placeholder="NICKNAME" {...newNickName} />
     <StyledInput placeholder="COMPANY" {...newAffiliatedCompany} />
     <StyledInput type="password" placeholder="PASSWORD" {...newPassWord} />
     <StyledInput type="password" placeholder="REPASSWORD" {...newRePassWord} />
     <Wrapper dr={`row`} margin={`10px 0 0 0`}>
      <PText color={Theme.delete_B_c}>※</PText>
      <PText>추후 로그인 시 이메일과 비밀번호로 로그인 하실수 있습니다.</PText>
     </Wrapper>
    </Wrapper>
    {/** -------------------------------------------------------- */}
    <Wrapper>
     <CheckBtn onClick={() => createUserHandler()}>계정생성</CheckBtn>
    </Wrapper>
   </RsWrapper>
  </Wrapper>
 );
};

export default withResizeDetector(MM02Presenter);
