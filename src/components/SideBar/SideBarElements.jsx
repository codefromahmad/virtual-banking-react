import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const SideBarContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  left: 0;
  transition: 0.3s all ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "1" : "-100%")};
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const CloseWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0px 24px;
`;

export const NavLogo = styled.div`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-self: flex-start;
`;

export const CloseIcon = styled.div`
  display: none;
  padding: 10px 10px;
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

export const Icon = styled(FaTimes)`
  font-size: 2rem;
  color: #fff;
`;

export const MobileMenuWrapper = styled.div`
  color: #fff;
  display: ${({ isOpen }) => (isOpen ? "none" : "grid")};
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 80px);

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(5, 60px);
  }
`;

export const MobileLink = styled.div`
  font-size: 1.3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #464646;
  }
`;

export const NavBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavBtn = styled.div`
  color: #fff;
  background: #01bf71;
  border-radius: 50px;
  padding: 15px 35px;
  cursor: pointer;
  font-size: 1.2rem;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
