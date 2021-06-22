import React from "react";
import {
 CommonTitle,
 RsWrapper,
 Wrapper,
 StyledInput,
 DescArea,
 CheckBtn,
} from "../../../Components/CommonComponents";
import Theme from "../../../Styles/Theme";

const Board_WPresenter = ({}) => {
 return (
  <Wrapper>
   <RsWrapper>
    <Wrapper margin={`40px 0`}>
     <CommonTitle>게시글 생성</CommonTitle>
    </Wrapper>

    <Wrapper width={`1000px`} al={`flex-start`} margin={`50px 0`}>
     <StyledInput placeholder="제목" margin={`10px 0 40px 0`}></StyledInput>
     <DescArea placeholder="게시글"></DescArea>
    </Wrapper>

    <Wrapper>
     <CheckBtn>게시글 등록</CheckBtn>
    </Wrapper>
   </RsWrapper>
  </Wrapper>
 );
};

export default Board_WPresenter;
