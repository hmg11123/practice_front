import styled from "styled-components";
import React from "react";
import {
 CommonTitle,
 RsWrapper,
 Wrapper,
 StyledInput,
 DescArea,
 CheckBtn,
 CommonButton,
 PText,
} from "../../../Components/CommonComponents";
import Theme from "../../../Styles/Theme";

const BoardName = styled(CommonButton)`
 width: "100px";
 background-color: ${Theme.lightGrey_C};
`;

const Board_WPresenter = ({
 userData,
 createBoardHandler,
 newTitle,
 newDesc,
}) => {
 return (
  <Wrapper>
   <RsWrapper>
    <Wrapper margin={`40px 0`}>
     <CommonTitle>게시글 생성</CommonTitle>
    </Wrapper>

    <Wrapper width={`1000px`} al={`flex-start`} margin={`50px 0`}>
     <StyledInput
      {...newTitle}
      placeholder="제목"
      margin={`10px 0 40px 0`}
     ></StyledInput>
     <Wrapper
      dr={`row`}
      bgColor={Theme.lightGrey_C}
      width={`100px`}
      ju={`space-around`}
     >
      <PText fontSize={`18px`}>게시자 : </PText>
      <PText fontSize={`18px`}>{userData && userData.nickName}</PText>
     </Wrapper>
     <DescArea {...newDesc} placeholder="게시글"></DescArea>
    </Wrapper>

    <Wrapper margin={`0 0 100px 0`}>
     <CheckBtn onClick={() => createBoardHandler()}>게시글 등록</CheckBtn>
    </Wrapper>
   </RsWrapper>
  </Wrapper>
 );
};

export default Board_WPresenter;
