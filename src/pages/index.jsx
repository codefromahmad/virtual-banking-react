import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/InfoSection/Data";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import img from "../images/svg-1.svg";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const changeScroll = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeScroll);
  }, []);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <SideBar scroll={scroll} isOpen={isOpen} toggle={toggle} />
      <NavBar scroll={scroll} isOpen={isOpen} toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </>
  );
};

export default Home;
