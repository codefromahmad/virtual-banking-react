import styled from "styled-components";

export const ServiceContainer = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 760px) {
    height: 700px;
  }
`;
export const ServiceWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
`;

export const ServiceH1 = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  padding: 50px 0px;
  text-align: center;

  @media screen and (max-width: 460px) {
    font-size: 1.7rem;
  }
`;

export const ServiceCards = styled.div`
  display: grid;
  justify-content: center;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;

  @media screen and (max-width: 780px) {
    grid-template-columns: 1fr 1fr;
    padding: 0px 10px;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
export const ServiceCard = styled.div`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 15px;
  padding: 2px 10px;
  box-shadow: 0px 0px 3px #000;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    scale: 1.03;
    transition: all 0.3s ease-in-out;
  }
`;

export const Icon = styled.img`
  width: 150px;
  height: 150px;
  @media screen and (max-width: 780px) {
    width: 130px;
    height: 130px;
  }

  @media screen and (max-width: 460px) {
    width: 120px;
    height: 120px;
  }
`;
export const Heading = styled.h1`
  font-size: 1.2rem;
  @media screen and (max-width: 780px) {
    font-size: 1.1rem;
  }

  @media screen and (max-width: 460px) {
    font-size: 1rem;
  }
`;
export const Text = styled.p`
  text-align: center;
  padding: 10px 0px;

  @media screen and (max-width: 780px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 460px) {
    font-size: 0.9rem;
  }
`;
