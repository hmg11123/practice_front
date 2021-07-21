import React from "react";
import {
 Wrapper,
 SpanText,
 RsWrapper,
 CommonTitle,
 CheckBtn,
} from "../../../Components/CommonComponents";
import styled from "styled-components";
import Theme from "../../../Styles/Theme";

const HoverWrapper = styled(Wrapper)`
 &:hover {
  background-color: ${Theme.darkGrey_C};
  color: ${Theme.subTheme_C};
  border-bottom: 1px solid ${Theme.subTheme_C};
 }
`;

const MM04Presenter = ({ noticeBannerDatum, writeMoveLinkHandler }) => {
 return (
  <Wrapper>
   <RsWrapper>
    <Wrapper margin={`40px 0 20px 0`}>
     <CommonTitle>공지사항</CommonTitle>
    </Wrapper>
    <Wrapper width={`650px`} margin={`70px 0`}>
     {noticeBannerDatum
      ? noticeBannerDatum.length === 0
        ? "sd"
        : noticeBannerDatum.map((data, idx) => {
           return (
            <HoverWrapper
             padding={`10px`}
             key={idx}
             dr={`row`}
             borderBottom={`1px solid ${Theme.basicTheme_C}`}
            >
             <SpanText width={`7%`}>{data.title}</SpanText>
             <SpanText width={`13%`}>{data.desc}</SpanText>
             <SpanText width={`60%`}>{data.author}</SpanText>
             <SpanText width={`20%`}>{data.createdAt}</SpanText>
            </HoverWrapper>
           );
          })
      : "sds"}
     <CheckBtn onClick={() => writeMoveLinkHandler()}>게시글생성</CheckBtn>
    </Wrapper>
   </RsWrapper>
  </Wrapper>
 );
};

export default MM04Presenter;
