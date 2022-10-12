import React from "react";
import {
  Nav,
  NavBarContainer,
  NavBtn,
  NavLogo,
  NavMenu,
  NavLink,
  NavBtnWrapper,
  MobileMenuWrapper,
  MobileMenu,
} from "./NavBarElements";

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo>dalla</NavLogo>
          <NavMenu>
            <NavLink to="about">About</NavLink>
            <NavLink to="discovery">Discovery</NavLink>
            <NavLink to="services">Services</NavLink>
            <NavLink to="signup">Sign Up</NavLink>
          </NavMenu>
          <NavBtnWrapper>
            <NavBtn>Sign In</NavBtn>
          </NavBtnWrapper>
          <MobileMenuWrapper>
            <MobileMenu />
          </MobileMenuWrapper>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
