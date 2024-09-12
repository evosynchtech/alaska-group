import React from "react";
import HeroCarousel from "../components/HeroCarousel/Carousel.jsx";
import ContactUs from "../components/contactUs/ContactUs.jsx";
import HomeAbout from "../components/about/HomeAbout.jsx";

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
