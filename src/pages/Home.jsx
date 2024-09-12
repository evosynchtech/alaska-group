import React from "react";
import HeroCarousel from "../components/HeroCarousel/Carousel";
import ContactUs from "../components/contactUs/ContactUs";
import HomeAbout from "../components/about/HomeAbout";

function Home() {
  return (
    <>
      <HeroCarousel />
      <HomeAbout />
      <ContactUs />
    </>
  );
}

export default Home;
