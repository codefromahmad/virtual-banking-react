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
            <NavLink
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              activeClass="active"
            >
              About
            </NavLink>
            <NavLink
              to="discovery"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              activeClass="active"
            >
              Discovery
            </NavLink>
            <NavLink
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              activeClass="active"
              to="services"
            >
              Services
            </NavLink>
            <NavLink
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              activeClass="active"
              to="signup"
            >
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
