import styled from "styled-components";

export const FooterContainer = styled.div`
  background: #000;
  width: 100%;
  color: #fff;
  padding: 40px 0px;
`;

export const FooterWrapper = styled.div`
  max-width: 960px;
  display: flex;
  justify-content: center;
  margin: auto;
  padding: 20px 0;
`;

export const Title = styled.div`
  font-weight: bold;
`;
export const FooterLinks = styled.div`
  display: grid;
  padding: 10px 30px;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media screen and (max-width: 780px) {
    grid-template-columns: 1fr 1fr;
    padding: 0px 30px;
  }
`;
export const FooterLink = styled.div`
  padding: 5px 0px;
  margin: 5px 0px;
  cursor: pointer;
  color: #c7c7c7;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #999999;
    transition: all 0.2s ease-in-out;
  }
`;
export const BottomFooter = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 960px;
  margin: auto;
  padding: 20px 0;

  @media screen and (max-width: 780px) {
    display: block;
    align-self: center;
  }
`;
export const LastLine = styled.div`
  font-size: 0.9rem;

  @media screen and (max-width: 780px) {
    display: flex;
    justify-content: center;
    padding-bottom: 10px;
  }
`;
export const SocialIcons = styled.div`
  width: 240px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 780px) {
    /* justify-content: center; */
    padding-top: 10px;
    margin: auto;
  }
`;

export const SocialIconLink = styled.a`
  color: #fff;
  cursor: pointer;
  font-size: 24px;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 780px) {
    display: flex;
    padding: 0 10px;
    justify-content: center;
  }

  &:hover {
    color: #999999;
    transition: all 0.2s ease-in-out;
  }
`;
