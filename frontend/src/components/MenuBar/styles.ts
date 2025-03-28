import { IconButton } from "@mui/material";
import styled from "styled-components";

interface HomeProps {
  isHome: boolean;
}

export const MainContainer = styled.main`
  height: 100vh;
  width: 100%;

  background-color: #f8fbfd;
  position: relative;
`;

export const NavStyled = styled.section({
  height: "5rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  alignContent: "center",
  borderBottom: "2px solid #F8F8F8",
  width: "100%",
  backgroundColor: "#ffffff",
  boxShadow: "0px 1px 4px #00000029",
  paddingRight: "20px",
  position: "sticky",

  "@media (max-width: 768px)": {
    justifyContent: "flex-end",
  },
});
export const NavContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 18px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuIcon = styled.div`
  @media (min-width: 767px) {
    display: none;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MenuPopover = styled.div`
  background-color: #ffffff;
  flex-direction: column;
  display: flex;
  width: 100%;
`;
export const OptionsContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  overflow-x: auto;
  //background-color: red;
  width: 100%;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const ItemMenu = styled(IconButton)<{ isSelected: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  border-radius: 6px !important;
  padding: 1.2% 2% !important;

  cursor: pointer;
  background-color: ${({ isSelected }) =>
    isSelected ? "#9FBCA0" : "transparent"} !important;

  &:hover {
    background-color: #9fbca0 !important;
    svg {
      color: #1e325f;
    }
    h2 {
      color: #1e325f;
    }
  }

  h2 {
    color: ${({ isSelected }) => (isSelected ? " #1e325f" : "#1E1E1E")};
    font-weight: 500;
    font-size: 16px;
  }
  svg {
    color: ${({ isSelected }) => (isSelected ? " #1e325f" : "#1E1E1E")};
    height: 24px;
    width: 24px;
    flex-shrink: 0;
  }
`;

export const OutletContainer = styled.section<HomeProps>`
  height: calc(100% - 5rem);
  background-color: #ffffff;
  // margin-top: 6px;
  padding-top: 24px;
  padding-left: 4vw;
  padding-right: 4vw;
  position: relative;
  overflow-y: auto;
  ::-webkit-scrollbar {
    scrollbar-width: thin;
    height: 4px;
    width: 4px;
  }
`;

export const DividerContainer = styled.div<HomeProps>`
  ${(props) =>
    props.isHome
      ? `
  display:none;
  overflow: hidden;
  `
      : `
   position: absolute;
  bottom: 0px;
  width: 100%;
  background-color: rgb(255, 255, 255);
  height: 3.5%;
  padding-left: 4vw;
  padding-right: 4vw;
  
  `}
`;

export const LogoType = styled.img`
  height: 100%;
  width: 15%;
  background-color: white;
  border-top-right-radius: 8px;
`;

export const SubItemContent = styled.div`
  background-color: #1e325fc9;
  padding: 20px;
  gap: 4px;
  display: flex;
  flex-direction: column;
`;
export const SubItem = styled(IconButton)`
  background-color: #1e325f !important;
  display: flex;
  flex-direction: row;
  justify-content: flex-start !important;
  gap: 10px;
  border-radius: 4px !important;
  padding: 24px 32px !important;
  cursor: pointer;
  h2 {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: white;
    font-weight: 500;
  }

  svg {
    color: #84a985;
    height: 24px;
    width: 24px;
    flex-shrink: 0;
  }
`;

export const NavOptions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const AvatarContent = styled.div`
  background-color: #172647;
  padding: 16px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  .rowName {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    h2 {
      color: white;

      font-weight: 400;
      font-size: 22px;
      line-height: 24px;
      letter-spacing: 0%;
      text-align: center;
      text-transform: capitalize;
    }
    h3 {
      color: white;

      font-weight: 800;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0%;
    }
  }
`;
