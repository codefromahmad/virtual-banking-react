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

const NavBar = ({ scroll, isOpen, toggle }) => {
  return (
    <>
      <Nav isOpen={isOpen} scroll={scroll}>
        {console.log("Scroll " + scroll)}
        <NavBarContainer>
          <NavLogo smooth={true} to="home">
            dalla
          </NavLogo>
          <NavMenu>
            <NavLink smooth={true} to="about">
              About
            </NavLink>
            <NavLink smooth={true} to="discovery">
              Discovery
            </NavLink>
            <NavLink smooth={true} to="services">
              Services
            </NavLink>
            <NavLink smooth={true} to="signup">
              Sign Up
            </NavLink>
          </NavMenu>
          <NavBtnWrapper>
            <NavBtn to="signin">Sign In</NavBtn>
          </NavBtnWrapper>
          <MobileMenuWrapper onClick={toggle}>
            <MobileMenu />
          </MobileMenuWrapper>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
