import React from "react";
import {
 RsWrapper,
 Wrapper,
 CommonTitle,
 StyledInput,
 DescArea,
 PText,
 CheckBtn,
 DeleteBtn,
} from "../../../Components/CommonComponents";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

const Board_DPresenter = ({
 boardBannerDatum,
 _isDialogOpenToggle,
 isDialogOpen,
 updateBoardHandler,
 inputTitle,
 inputDesc,
 deleteBoardHandler,
}) => {
 return (
  <Wrapper>
   <RsWrapper margin={` 0 0 100px 0`}>
    <Wrapper margin={`10px 0 40px 0`}>
     <CommonTitle>{boardBannerDatum && boardBannerDatum.title}</CommonTitle>
    </Wrapper>

    <Wrapper>
     <Wrapper width={`1000px`}>
      <Wrapper dr={`row`} ju={`flex-start`} margin={`50px 0`}>
       <Wrapper width={`300px`} dr={`row`}>
        <PText width={`80px`}>이름 : </PText>
        <StyledInput
         margin={`0`}
         width={`130px`}
         value={boardBannerDatum && boardBannerDatum.author}
         readOnly
        />
       </Wrapper>
       <Wrapper width={`300px`} dr={`row`}>
        <PText width={`80px`}>게시날짜 : </PText>
        <StyledInput
         margin={`0`}
         width={`130px`}
         value={boardBannerDatum && boardBannerDatum.createdAt.substring(0, 10)}
         readOnly
        />
       </Wrapper>
       <Wrapper width={`300px`} dr={`row`}>
        <PText width={`80px`}>조회수 : </PText>
        <StyledInput
         margin={`0`}
         width={`80px`}
         value={boardBannerDatum && boardBannerDatum.hit}
         readOnly
        />
       </Wrapper>
      </Wrapper>

      <DescArea value={boardBannerDatum && boardBannerDatum.desc} readOnly />
     </Wrapper>
    </Wrapper>

    <Wrapper dr={`row`} width={`1000px`} ju={`flex-end`} margin={`20px`}>
     <CheckBtn margin={`10px`} onClick={() => _isDialogOpenToggle()}>
      수정하기
     </CheckBtn>
     <DeleteBtn margin={`10px`} onClick={() => deleteBoardHandler()}>
      삭제하기
     </DeleteBtn>
    </Wrapper>
   </RsWrapper>

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
      <StyledInput
       {...inputTitle}
       placeholder="제목"
       margin={`0 0 50px 0`}
      ></StyledInput>
      <DescArea width={`400px`} {...inputDesc} placeholder="게시글"></DescArea>
     </Wrapper>
    </DialogContent>
    <DialogActions>
     <Button color="primary" onClick={() => updateBoardHandler()}>
      수정하기
     </Button>
     <Button color="secondary" onClick={() => _isDialogOpenToggle()}>
      취소
     </Button>
    </DialogActions>
   </Dialog>

   {/* Dialog Area */}
  </Wrapper>
 );
};

export default Board_DPresenter;
