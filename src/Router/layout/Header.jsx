import React from "react";
import {
 CommonButton,
 RsWrapper,
 SeachBox,
 WholeWrapper,
 Wrapper,
} from "../../Components/CommonComponents";
import styled from "styled-components";
import Theme from "../../Styles/Theme";

const Header = ({ history }) => {
 const moveLinkHandler = (link) => {
  history.push(`/${link}`);
 };
 return (
  <WholeWrapper height={`120px`}>
   <RsWrapper dr={`row`}>
    <Wrapper dr={`row`} ju={`space-around`}>
     <Wrapper
      width={`200px`}
      height={`70px`}
      bgColor={Theme.lightGrey_C}
      onClick={() => moveLinkHandler("")}
     >
      LOGO
     </Wrapper>
     {window.location.href.substring(23) === "/" ? (
      <Wrapper
       width={`500px`}
       border={`1px solid ${Theme.black_c}`}
       radius={`50px`}
       dr={`row`}
      >
       <SeachBox width={`400px`} />
       <CommonButton width={`50px`} height={`50px`}>
        검색
       </CommonButton>
      </Wrapper>
     ) : (
      <Wrapper width={`500px`}></Wrapper>
     )}
     <Wrapper
      width={`100px`}
      height={`50px`}
      borderBottom={`1px solid ${Theme.basicTheme_C}`}
      onClick={() => moveLinkHandler("notice")}
     >
      notice
     </Wrapper>
    </Wrapper>
   </RsWrapper>
  </WholeWrapper>
 );
};

export default Header;
