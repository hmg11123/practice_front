import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import MM00 from "../../Router/MM/MM00";
import MM01 from "../../Router/MM/MM01";
import MM02 from "../../Router/MM/MM02";
import MM03 from "../../Router/MM/MM03";
import MM04 from "../../Router/MM/MM04";
import Theme from "../../Styles/Theme";
import Board_W from "../../Router/Board/Board_W";
import Board_D from "../../Router/Board/Board_D";

const WholeWrapper = styled.div`
 width: 100%;
 background-color: ${(props) => props.bc};
 color: ${(props) => props.color};
`;

const Content = () => {
 return (
  <WholeWrapper>
   <Route exact path="/" component={MM00}></Route>
   <Route exact path="/signIn" component={MM01}></Route>
   <Route exact path="/signUp" component={MM02}></Route>
   <Route exact path="/myPage" component={MM03}></Route>
   <Route exact path="/notice" component={MM04}></Route>
   <Route exact path="/write" component={Board_W}></Route>
   <Route exact path="/board_D/:key" component={Board_D}></Route>
  </WholeWrapper>
 );
};

export default Content;
