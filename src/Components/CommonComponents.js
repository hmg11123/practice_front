import Theme from "../Styles/Theme";
import styled from "styled-components";

export const WholeWrapper = styled.div`
 width: ${(props) => props.width || `100%`};
 height: ${(props) => props.height};
 color: ${(props) => props.color};
 display: ${(props) => props.display || `flex`};
 background: ${(props) => props.bgColor};
 flex-direction: ${(props) => props.dr || `column`};
 align-items: ${(props) => props.al || `center`};
 justify-content: ${(props) => props.ju || `center`};
 background-image: ${(props) => props.bgImg};
 background-size: cover;
 background-position: 50% 50%;
 background-repeat: no-repeat;
 border: ${(props) => props.border};
 box-shadow: ${(props) => props.boxShadow};
 z-index: ${(props) => props.index};
 position: ${(props) => (props.isRelative ? `relative` : ``)};
 position: ${(props) => (props.isFixed ? `fixed` : ``)};
 top: ${(props) => props.top};
 left: ${(props) => props.left};
 right: ${(props) => props.right};
 bottom: ${(props) => props.bottom};
 margin: ${(props) => props.margin};
 padding: ${(props) => props.padding};
 overflow-x: hidden;

 & .MuiCheckbox-root,
 & .MuiCheckbox-colorSecondary.Mui-checked {
  color: ${(props) => props.theme.black_c} !important;
 }
`;

/** Props List **
 * width        : width
 * height       : height
 * dr           : flex-direction
 * al           : align-items
 * ju           : justify-content
 * bgColor      : background
 * color        : color
 *
 *  */
export const Wrapper = styled.div`
 width: ${(props) => props.width || `100%`};
 min-width: ${(props) => props.minWidth};
 height: ${(props) => props.height};
 min-height: ${(props) => props.minHeight};
 display: ${(props) => props.display || `flex`};
 flex-direction: ${(props) => props.dr || `column`};
 align-items: ${(props) => props.al || `center`};
 justify-content: ${(props) => props.ju || `center`};
 flex-wrap: ${(props) => props.wrap || `wrap`};
 background: ${(props) => props.bgColor};
 color: ${(props) => props.color};
 position: ${(props) => (props.isAbsolute ? `absolute` : ``)};
 position: ${(props) => (props.isRelative ? `relative` : ``)};
 top: ${(props) => props.top};
 left: ${(props) => props.left};
 bottom: ${(props) => props.bottom};
 right: ${(props) => props.right};
 z-index: ${(props) => props.zIndex};
 border: ${(props) => props.border};
 border-bottom: ${(props) => props.borderBottom};
 border-top: ${(props) => props.borderTop};
 border-right: ${(props) => props.borderRight};
 border-left: ${(props) => props.borderLeft};
 border-radius: ${(props) => props.radius};
 box-shadow: ${(props) => props.shadow};
 font-size: ${(props) => props.fontSize};
 font-weight: ${(props) => props.fontWeight};
 margin: ${(props) => props.margin};
 padding: ${(props) => props.padding};
 overflow: ${(props) => (props.isOverflow ? `auto` : props.overflow || ``)};
 background-image: ${(props) => props.bgImg};
 background-size: cover;
 background-repeat: no-repeat;
 background-attachment: ${(props) => props.attachment || `fixed`};
 background-position: center;

 transition: 0.5s;
 cursor: ${(props) => props.cursor};
 line-height: ${(props) => props.lineHeight};
 text-align: ${(props) => props.textAlign};

 & pre {
  white-space: pre-wrap;
  line-height: 1.4;
  color: #6f6f6f;
  font-size: 14px;
 }

 @media (max-width: 700px) {
  font-size: 14px;

  & svg {
   font-size: 20px;
  }
 }
`;

/** Props List **
 * width        : width
 * height       : height
 * dr           : flex-direction
 * al           : align-items
 * ju           : justify-content
 * bgColor      : background
 * color        : color
 *
 *  */
export const RsWrapper = styled.div`
 width: 1350px;
 height: ${(props) => props.height || `100%`};
 ${(props) => props.minHeight && `min-height: ${props.minHeight};`}
 color: ${(props) => props.color};
 display: flex;
 background: ${(props) => props.bgColor};
 color: ${(props) => props.color};
 flex-direction: ${(props) => props.dr || `column`};
 align-items: ${(props) => props.al || `center`};
 justify-content: ${(props) => props.ju || `center`};
 flex-wrap: ${(props) => props.wrap || `wrap`};
 backdrop-filter: ${(props) => props.filter};
 margin: ${(props) => props.margin};
 padding: ${(props) => props.padding};
 overflow: ${(props) => props.overflow};
 border-bottom: ${(props) => props.borderBottom};
 border: ${(props) => props.border};
 font-size: ${(props) => props.fontSize};
 position: ${(props) => (props.isRelative ? `relative` : ``)};

 @media (max-width: 1500px) {
  width: 1350px;
 }
 @media (max-width: 1350px) {
  width: 1280px;
 }
 @media (max-width: 1350px) {
  width: 1100px;
 }
 @media (max-width: 1100px) {
  width: 900px;
 }
 @media (max-width: 900px) {
  width: 800px;
 }
 @media (max-width: 800px) {
  width: 700px;
 }
 @media (max-width: 700px) {
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
 }
`;

export const SeachBox = styled.input`
 width: ${(props) => props.width || `100%`};
 height: ${(props) => props.height || `100%`};
 outline: none;
 padding: 20px;
 font-size: 18px;
 border-radius: 50px;
 border: none;
`;

export const CommonButton = styled.button`
 outline: none;
 background: none;
 border: ${(props) => props.border || `none`};
 width: ${(props) => props.width || `100%`};
 height: ${(props) => props.height || `100%`};
 color: ${(props) => props.color};
 background-color: ${(props) => props.bgColor || `none`};
 font-size: ${(props) => props.fontSize};
 display: flex;
 align-items: ${(props) => props.al || `center`};
 justify-content: ${(props) => props.ju || `center`};
 cursor: pointer;
 margin: ${(props) => props.margin};
 padding: ${(props) => props.padding};
`;

export const CommonTitle = styled.h2`
 width: ${(props) => props.width};
 height: ${(props) => props.height};
 font-size: ${(props) => props.fontSize || `30px`};
 font-weight: ${(props) => props.fontWeight || `600`};
 color: ${(props) => props.color};
 margin: ${(props) => props.margin};
 border: ${(props) => props.border};
 border-top: ${(props) => props.borderTop};
 border-bottom: ${(props) => props.borderBottom};
 border-left: ${(props) => props.borderLeft};
 border-right: ${(props) => props.borderRight};
`;

export const PText = styled.p`
 width: ${(props) => props.width};
 height: ${(props) => props.height};
 font-size: ${(props) => props.fontSize || `16px`};
 font-weight: ${(props) => props.fontWeight};
 margin: ${(props) => props.margin};
 padding: ${(props) => props.padding};
 color: ${(props) => props.color};
 display: flex;
 flex-direction: ${(props) => props.dr || `column`};
 align-items: ${(props) => props.al || `center`};
 justify-content: ${(props) => props.ju || `center`};
`;

export const SpanText = styled.span`
 width: ${(props) => props.width};
 height: ${(props) => props.height};
 font-size: ${(props) => props.fontSize || `16px`};
 font-weight: ${(props) => props.fontWeight};
 margin: ${(props) => props.margin};
 padding: ${(props) => props.padding};
 display: flex;
 flex-direction: ${(props) => props.dr || `column`};
 align-items: ${(props) => props.al || `center`};
 justify-content: ${(props) => props.ju || `center`};
 color: ${(props) => props.color};
`;

export const Ul = styled.ul`
 width: ${(props) => props.width || `100%`};
 height: ${(props) => props.height};
 display: flex;
 flex-direction: ${(props) => props.dr || `column`};
 align-items: ${(props) => props.al || `center`};
 justify-content: ${(props) => props.ju || `center`};
 background: ${(props) => props.bgColor};
`;

export const Li = styled.li`
 width: ${(props) => props.width || `100%`};
 height: ${(props) => props.height};
 display: flex;
 flex-direction: ${(props) => props.dr || `column`};
 align-items: ${(props) => props.al || `center`};
 justify-content: ${(props) => props.ju || `center`};
 background: ${(props) => props.bgColor};
 border: ${(props) => props.border};
`;

export const CommonInput = styled.input`
 width: ${(props) => props.width};
 height: ${(props) => props.height};
 margin: ${(props) => props.margin};
 padding: ${(props) => props.padding};
`;

export const StyledInput = styled(CommonInput)`
 outline: none;
 border: none;
 width: ${(props) => props.width || `400px`};
 height: 50px;
 background-color: none;
 box-shadow: 1px 2px 0px ${Theme.lightGrey_C};
 margin: ${(props) => props.margin || `50px 0 0 0`};
 padding: 10px;
 border-bottom: 4px solid ${Theme.basicTheme_C};
 &:focus {
  box-shadow: 3px 6px 0px ${Theme.lightGrey_C};
 }
`;

export const CheckBtn = styled(CommonButton)`
 width: ${(props) => props.width || `200px`};
 height: ${(props) => props.height || `40px`};
 background-color: ${(props) => props.bgColor || Theme.check_B_C};
 color: ${(props) => props.color || Theme.subTheme_C};
 margin: ${(props) => props.margin};
 &:hover {
  border: 1px solid ${Theme.check_B_C};
  background: ${Theme.subTheme_C};
  color: ${Theme.check_B_C};
 }
`;

export const DeleteBtn = styled(CommonButton)`
 width: ${(props) => props.width || `200px`};
 height: ${(props) => props.height || `40px`};
 background-color: ${(props) => props.bgColor || Theme.delete_B_c};
 color: ${(props) => props.color || Theme.subTheme_C};
 margin: ${(props) => props.margin};
 &:hover {
  border: 1px solid ${Theme.delete_B_c};
  background: ${Theme.subTheme_C};
  color: ${Theme.delete_B_c};
 }
`;

export const DescArea = styled.textarea`
 width: ${(props) => props.width || `1000px`};
 height: ${(props) => props.height || `500px`};
 resize: none;
`;

export const Pagenation = styled.div`
 width: 25px;
 height: 25px;
 display: flex;
 flex-direction: ${(props) => props.dr || `row`};
 align-items: ${(props) => props.al || `center`};
 justify-content: ${(props) => props.ju || `center`};
 cursor: pointer;
 padding-top: 3px;

 &.active {
  background-color: ${(props) => props.theme.subTheme_C};
  color: ${(props) => props.theme.basicTheme_C};
  border-radius: 25px;
  box-shadow: 0px 10px 15px rgba(220, 220, 220, 1);
 }
`;

export const PagenationBtn = styled.div`
 text-align: center;
 font-size: 18px;
 width: 25px;
 height: 25px;
 color: ${(props) => props.color || `#eee`};
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 border-radius: 25px;
 margin: 0px 3px;

 &:first-child,
 &:last-child {
  background-color: ${(props) => props.theme.grey_C};
  color: ${(props) => props.theme.black_C};
 }

 &:hover {
  box-shadow: 0px 10px 15px rgba(220, 220, 220, 1);
 }
`;

export const PagenationWrapper = styled.div`
 width: ${(props) => props.width || `100%`};
 min-width: ${(props) => props.minWidth};
 height: ${(props) => props.height};
 color: ${(props) => props.color};
 display: flex;
 flex-direction: ${(props) => props.dr || `row`};
 align-items: ${(props) => props.al || `center`};
 justify-content: ${(props) => props.ju || `center`};
 background: ${(props) => props.bgColor};
 color: ${(props) => props.color};
 border: ${(props) => props.border};
 border-bottom: ${(props) => props.borderBottom};
 border-radius: ${(props) => props.radius};
 box-shadow: ${(props) => props.shadow};
 font-size: ${(props) => props.fontSize};
 font-weight: ${(props) => props.fontWeight};
 margin: ${(props) => props.margin || `20px 0px 20px`};
 padding: ${(props) => props.padding};
`;
