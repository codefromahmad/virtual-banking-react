import React from "react";
import { links } from "./Data";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterLink,
  FooterLinks,
  FooterWrapper,
  Title,
  LastLine,
  BottomFooter,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinks>
          {links.map(({ id, title, childs }) => (
            <div key={id}>
              <Title>{title}</Title>
              {childs.map(({ id, text }) => (
                <div key={id}>
                  <FooterLink>{text}</FooterLink>
                </div>
              ))}
            </div>
          ))}
        </FooterLinks>
      </FooterWrapper>
      <BottomFooter>
        <LastLine>dolla © 2022 All rights reserved.</LastLine>
        <SocialIcons>
          <SocialIconLink>
            <FaFacebook />
          </SocialIconLink>
          <SocialIconLink>
            <FaYoutube />
          </SocialIconLink>
          <SocialIconLink>
            <FaTwitter />
          </SocialIconLink>
          <SocialIconLink>
            <FaInstagram />
          </SocialIconLink>
          <SocialIconLink>
            <FaLinkedin />
          </SocialIconLink>
        </SocialIcons>
      </BottomFooter>
    </FooterContainer>
  );
};

export default Footer;
