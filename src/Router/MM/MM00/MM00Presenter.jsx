import React from "react";
import {
 CommonTitle,
 PText,
 CommonButton,
 RsWrapper,
 SpanText,
 Wrapper,
 CheckBtn,
 Pagenation,
 PagenationBtn,
 PagenationWrapper,
} from "../../../Components/CommonComponents";
import Theme from "../../../Styles/Theme";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const HoverText = styled(Wrapper)`
 &:hover {
  font-size: 25px;
 }
`;

const HoverInput = styled(CommonButton)`
 border: 1px solid ${Theme.basicTheme_C};
 &:hover {
  background-color: black;
  color: white;
  border: 1px solid ${Theme.subTheme_C};
 }
`;

const HoverWrapper = styled(Wrapper)`
 &:hover {
  background-color: ${Theme.darkGrey_C};
  color: ${Theme.subTheme_C};
  border-bottom: 1px solid ${Theme.subTheme_C};
 }
`;

const MM00Presenter = ({
 boardBannerDatum,
 moveLinkHandler,
 logout,
 writeMoveLinkHandler,
 limit,
 searchValue,
 setSearchValue,
 currentPage,
 setCurrentPage,
 pages,
 changePageHandler,
 totalCnt,
 prevAndNextPageChangeNoticeHandler,
}) => {
 return (
  <Wrapper padding={`0`}>
   <Wrapper
    bgColor={Theme.lightGrey_C}
    height={`600px`}
    margin={`0 0 100px 0`}
   ></Wrapper>

   {/** ============================Boarder1================================ */}
   <RsWrapper>
    <Wrapper
     dr={`row`}
     height={`800px`}
     ju={`space-around`}
     al={`flex-start`}
     margin={`0 0 50px 0`}
    >
     <Wrapper width={`850px`}>
      <Wrapper dr={`row`} bgColor={Theme.lightGrey_C}>
       <SpanText width={`7%`}>번호</SpanText>
       <SpanText width={`13%`} padding={`10px`}>
        제목
       </SpanText>
       <SpanText width={`50%`} padding={`10px`}>
        내용
       </SpanText>
       <SpanText width={`8%`} padding={`10px`}>
        작성자
       </SpanText>
       <SpanText width={`8%`} padding={`10px`}>
        조회수
       </SpanText>
       <SpanText width={`14%`} padding={`10px`}>
        생성날자
       </SpanText>
      </Wrapper>
      {boardBannerDatum ? (
       boardBannerDatum.length === 0 ? (
        <Wrapper>게시글이 없습니다.</Wrapper>
       ) : (
        boardBannerDatum.map((data, idx) => {
         return (
          <HoverWrapper
           key={idx}
           dr={`row`}
           borderBottom={`1px solid ${Theme.basicTheme_C}`}
           onClick={() => moveLinkHandler(`board_D/${data._id}`)}
          >
           <SpanText width={`7%`}>
            {totalCnt - (currentPage * limit + idx) + ""}
           </SpanText>
           <SpanText width={`13%`} padding={`10px`}>
            {data.title.substring(0, 6)}
           </SpanText>
           <SpanText width={`50%`} padding={`10px`}>
            {data.desc.substring(0, 50)}
           </SpanText>
           <SpanText width={`8%`} padding={`10px`}>
            {data.author}
           </SpanText>
           <SpanText width={`8%`} padding={`10px`}>
            {data.hit}
           </SpanText>
           <SpanText width={`14%`} padding={`10px`}>
            {data.createdAt.substring(0, 10)}
           </SpanText>
          </HoverWrapper>
         );
        })
       )
      ) : (
       "데이터를 불러오지 못했습니다."
      )}
      <Wrapper dr={`row`} ju={`flex-end`} margin={`10px 0`}>
       {/* *페이지 네이션 */}
       <Wrapper ju={`flex-end`} dr={`row`}>
        {pages && pages.length > 0 && (
         <PagenationWrapper width={`auto`}>
          <PagenationBtn
           onClick={() =>
            boardBannerDatum &&
            prevAndNextPageChangeNoticeHandler(currentPage - 1)
           }
          >
           <IoIosArrowBack />
          </PagenationBtn>
          {pages.map((data) => {
           return (
            <Pagenation
             className={data === currentPage ? `active` : ``}
             key={data}
             onClick={() => changePageHandler(data)}
            >
             {data + 1}
            </Pagenation>
           );
          })}
          <PagenationBtn
           onClick={() =>
            boardBannerDatum &&
            prevAndNextPageChangeNoticeHandler(currentPage + 1)
           }
          >
           <IoIosArrowForward />
          </PagenationBtn>
         </PagenationWrapper>
        )}
       </Wrapper>

       <CheckBtn onClick={() => writeMoveLinkHandler()}>게시글생성</CheckBtn>
      </Wrapper>
     </Wrapper>

     <Wrapper
      width={`200px`}
      height={`100px`}
      ju={`center`}
      al={`center`}
      bgColor={Theme.basicTheme_C}
      border={`1px solid ${Theme.basicTheme_C}`}
     >
      {sessionStorage.getItem("loginData") ? (
       <Wrapper>
        <HoverInput
         type={`button`}
         width={`100px`}
         height={`30px`}
         padding={`10px`}
         margin={`5px 0`}
         bgColor={Theme.subTheme_C}
         color={Theme.basicTheme_C}
         onClick={() => moveLinkHandler(`myPage`)}
        >
         마이페이지
        </HoverInput>
        <HoverInput
         type={`button`}
         width={`100px`}
         height={`30px`}
         padding={`10px`}
         margin={`5px 0`}
         bgColor={Theme.subTheme_C}
         color={Theme.basicTheme_C}
         onClick={() => logout()}
        >
         로그아웃
        </HoverInput>
       </Wrapper>
      ) : (
       <Wrapper>
        <HoverInput
         type={`button`}
         width={`100px`}
         height={`30px`}
         padding={`10px`}
         margin={`5px 0`}
         bgColor={Theme.subTheme_C}
         color={Theme.basicTheme_C}
         onClick={() => moveLinkHandler(`signIn`)}
        >
         로그인
        </HoverInput>
        <HoverInput
         type={`button`}
         width={`100px`}
         height={`30px`}
         padding={`10px`}
         margin={`5px 0`}
         bgColor={Theme.subTheme_C}
         color={Theme.basicTheme_C}
         onClick={() => moveLinkHandler(`signUp`)}
        >
         회원가입
        </HoverInput>
       </Wrapper>
      )}
     </Wrapper>
    </Wrapper>
   </RsWrapper>
  </Wrapper>
 );
};

export default withResizeDetector(MM00Presenter);
