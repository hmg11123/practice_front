import React from "react";
import {
 Wrapper,
 RsWrapper,
 CommonTitle,
 Ul,
 Li,
 PText,
 StyledInput,
 CheckBtn,
 DeleteBtn,
 SpanText,
} from "../../../Components/CommonComponents";
import Theme from "../../../Styles/Theme";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
const MM03Presenter = ({
 userBannerDatum,
 inputName,
 inputNickName,
 inputAffiliatedCompany,
 updateUserHandler,
 isDialogOpen,
 _isDialogOpenToggle,
 deleteUserHandler,
}) => {
 return (
  <Wrapper>
   <RsWrapper>
    <Wrapper margin={`40px 0 20px 0`}>
     <CommonTitle>마이페이지</CommonTitle>
    </Wrapper>
    <Wrapper dr={`row`}>
     <Ul width={`50%`} al={`flex-end`}>
      <Li
       width={`100px`}
       height={`50px`}
       al={`center`}
       border={`1px solid ${Theme.basicTheme_C}`}
      >
       이름
      </Li>
      <Li
       width={`100px`}
       height={`50px`}
       al={`center`}
       border={`1px solid ${Theme.basicTheme_C}`}
      >
       닉네임
      </Li>
      <Li
       width={`100px`}
       height={`50px`}
       al={`center`}
       border={`1px solid ${Theme.basicTheme_C}`}
      >
       이메일
      </Li>
      <Li
       width={`100px`}
       height={`50px`}
       al={`center`}
       border={`1px solid ${Theme.basicTheme_C}`}
      >
       소속회사
      </Li>
      <Li
       width={`100px`}
       height={`50px`}
       al={`center`}
       border={`1px solid ${Theme.basicTheme_C}`}
      >
       게정생성 날짜
      </Li>
     </Ul>
     <Ul width={`50%`} al={`flex-start`}>
      <Li
       width={`200px`}
       height={`50px`}
       al={`center`}
       border={`1px solid ${Theme.basicTheme_C}`}
      >
       {userBannerDatum && userBannerDatum.name}
      </Li>
      <Li
       width={`200px`}
       height={`50px`}
       al={`center`}
       border={`1px solid ${Theme.basicTheme_C}`}
      >
       {userBannerDatum && userBannerDatum.nickName}
      </Li>
      <Li
       width={`200px`}
       height={`50px`}
       al={`center`}
       border={`1px solid ${Theme.basicTheme_C}`}
      >
       {userBannerDatum && userBannerDatum.email}
      </Li>
      <Li
       width={`200px`}
       height={`50px`}
       al={`center`}
       border={`1px solid ${Theme.basicTheme_C}`}
      >
       {userBannerDatum && userBannerDatum.affiliatedCompany}
      </Li>
      <Li
       width={`200px`}
       height={`50px`}
       al={`center`}
       border={`1px solid ${Theme.basicTheme_C}`}
      >
       {userBannerDatum && userBannerDatum.createdAt}
      </Li>
     </Ul>
    </Wrapper>
    <Wrapper margin={`20px 0 0 0`}>
     <CheckBtn margin={`10px`} onClick={() => _isDialogOpenToggle()}>
      수정하기
     </CheckBtn>
     <DeleteBtn margin={`10px`} onClick={() => deleteUserHandler()}>
      탈퇴하기
     </DeleteBtn>
    </Wrapper>
    {/* Dialog Area */}
    {/**====================================================================== */}
    <Dialog
     onClose={_isDialogOpenToggle}
     aria-labelledby="customized-dialog-title"
     open={isDialogOpen}
     fullWidth={true}
    >
     <DialogTitle
      id="customized-dialog-title"
      onClose={_isDialogOpenToggle}
      // class="dialog_title"
     >
      게시글 수정
     </DialogTitle>
     <DialogContent>
      <Wrapper>
       <Wrapper al={`flex-start`}>이름 </Wrapper>
       <StyledInput
        {...inputName}
        placeholder="이름"
        margin={`0 0 50px 0`}
       ></StyledInput>
       <Wrapper al={`flex-start`}>닉네임</Wrapper>
       <StyledInput
        {...inputNickName}
        placeholder="닉네임"
        margin={`0 0 50px 0`}
       ></StyledInput>
       <Wrapper al={`flex-start`}>소속회사</Wrapper>
       <StyledInput
        {...inputAffiliatedCompany}
        placeholder="소속회사"
        margin={`0 0 50px 0`}
       ></StyledInput>
      </Wrapper>
     </DialogContent>
     <DialogActions>
      <Button color="primary" onClick={() => updateUserHandler()}>
       수정하기
      </Button>
      <Button color="secondary" onClick={() => _isDialogOpenToggle()}>
       취소
      </Button>
     </DialogActions>
    </Dialog>

    {/* Dialog Area */}
   </RsWrapper>
  </Wrapper>
 );
};

export default MM03Presenter;
