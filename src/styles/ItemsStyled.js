import styled from "styled-components";

export const ItemStyled = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  background: #fff;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.12);
  border-radius: 90px;
  opacity: ${(props) => (props.enabled ? 1 : 0.2)};
  margin: 30px;
  width: 180px;
  height: 180px;
  transition: 150ms all;
  transition-timing-function: ease-in-out;

  &:hover {
    width: 490px;
    transition: 150ms all;
    transition-timing-function: ease-in-out;
    cursor: pointer;
  }
  /* Disable selection, didn't work though*/
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const Badge = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: flex-end;
  top: 0pc;
  right: 0;
  width: 60px !important;
  height: 60px !important;
  background-color: red;
  border-radius: 30px;
  color: white;
  font-weight: 900;
`;

export const ItemImage = styled.img`
  margin-left: 44px;
  width: 88px;
`;

export const ItemDescription = styled.div`
  opacity: ${(props) => (props.hovered ? "1" : "0")};
  flex-direction: column;
  transition-timing-function: ease-in-out;
  transition: 100ms all;
  margin-left: 10px;
`;

export const ItemsListStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;
