import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
const home = () => {
  return (
    <div>
      <Hero>
        <Banner
          title="Reimagine Home Living"
          subtitle="Helping you find a place you'll love"
        >
          <Link to="/rooms" className="btn-primary">
            our Homes
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </div>
  );
};

export default home;
