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
          <MobileLink smooth={true} onClick={toggle} to="about">
            About
          </MobileLink>
          <MobileLink smooth={true} onClick={toggle} to="discovery">
            Discovery
          </MobileLink>
          <MobileLink smooth={true} onClick={toggle} to="services">
            Services
          </MobileLink>
          <MobileLink smooth={true} onClick={toggle} to="signin">
            Sign In
          </MobileLink>
        </MobileMenuWrapper>
        <NavBtnWrapper>
          <NavBtn>Sign In</NavBtn>
        </NavBtnWrapper>
      </SideBarContainer>
    </>
  );
};

export default SideBar;
