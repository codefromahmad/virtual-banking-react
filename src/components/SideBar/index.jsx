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
          <MobileLink smooth={true} onClick={toggle} to="signup">
            Sign up
          </MobileLink>
        </MobileMenuWrapper>
        <NavBtnWrapper>
          <NavBtn to="signin">Sign In</NavBtn>
        </NavBtnWrapper>
      </SideBarContainer>
    </>
  );
};

export default SideBar;
