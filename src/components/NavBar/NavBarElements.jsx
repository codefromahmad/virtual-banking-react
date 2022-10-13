import styled from "styled-components";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ scroll }) => (scroll ? "black" : "transparent")};
  position: sticky;
  top: 0;
  color: #fff;
  height: 80px;
  margin-top: ${({ isOpen }) => (isOpen ? "0px" : "-80px")};
  width: 100%;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.5s all ease;
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  align-items: center;
  max-width: 1100px;
  padding: 0px 24px;
`;

export const NavLogo = styled.div`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  justify-self: flex-start;
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    border-radius: 5px;
    background: #464646;
  }
`;

export const NavBtnWrapper = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.div`
  color: #fff;
  background: #01bf71;
  border-radius: 50px;
  padding: 10px 20px;
  cursor: pointer;
  /* transition: all 0.2s ease-in-out; */

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const MobileMenuWrapper = styled.div`
  display: none;
  padding: 9px 11px;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    border-radius: 50%;
    background: #464646;
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled(FaBars)`
  font-size: 2rem;
  color: #fff;
`;
