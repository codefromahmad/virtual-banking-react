import React from "react";
import {
  SideBarContainer,
  CloseWrapper,
  CloseIcon,
  Icon,
  MobileMenuWrapper,
  MobileLink,
  NavBtnWrapper,
  NavBtn,
  NavLogo,
} from "./SideBarElements";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <>
      <SideBarContainer isOpen={isOpen}>
        <CloseWrapper>
          <NavLogo>dalla</NavLogo>
          <CloseIcon onClick={toggle}>
            <Icon />
          </CloseIcon>
        </CloseWrapper>
        <MobileMenuWrapper>
          <MobileLink to="about">About</MobileLink>
          <MobileLink to="discovery">Discovery</MobileLink>
          <MobileLink to="services">Services</MobileLink>
          <MobileLink to="signin">Sign In</MobileLink>
        </MobileMenuWrapper>
        <NavBtnWrapper>
          <NavBtn>Sign In</NavBtn>
        </NavBtnWrapper>
      </SideBarContainer>
    </>
  );
};

export default SideBar;
