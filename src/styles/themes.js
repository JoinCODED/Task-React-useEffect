import styled from "styled-components";

export const Body = styled.body`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: url("../assets/farm.jpg");
  justify-content: space-between;
`;
export const EdgeSection = styled.div`
  width: 30%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CenterSection = styled.div`
  width: 40%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Img = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  width: 300px;
  height: 300px;

  &.cookieHover:hover {
    transform: scale(1.1);
    transition: 150ms;
    /* opacity: 0.9; */
    /* transform: translateY(4px); */
  }
  &:active {
    transform: scale(1.2) !important;
    opacity: 0.9;
  }
  transition: 150ms;
`;
