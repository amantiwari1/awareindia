import styled, { createGlobalStyle } from "styled-components";
import { buttonInterface } from "./styled";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Source Sans Pro', sans-serif;
    }

    body {
      background-color: ${(props) => props.theme.background};
       color: ${(props) => props.theme.textColor};
    }
`;

export const lightTheme = {
  background: "#ffffff",
  textColor: "#000",
  textSecondary: "#37364d",
  buttonPrimary: "#5a4fff",
  buttonGhost: "transparent",
  cardBackground: "#ffffff",
};
export const darkTheme = {
  background: "#2C3A47",
  textColor: "#fff",
  textSecondary: "#37364d",
  buttonPrimary: "#fff",
  buttonGhost: "transparent",
  cardBackground: "#403C5B",
};

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 50px;
  padding-right: 50px;
  @media screen and (max-width: 991px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const Button = styled.button<buttonInterface>`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#4B59F7" : "#0467FB")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? "#0467FB" : "#4B59F7")};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
export default GlobalStyle;
