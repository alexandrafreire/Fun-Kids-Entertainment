import React from "react";
import "../.././App.css";
import SitesCardCollection from "./../sections/Sites";
import HomePageBanner from "../sections/Banner";
import CustomDivider from "./../sections/Divider";



function Home() {
  return (
    <>
      <HomePageBanner />
      <CustomDivider />
      <SitesCardCollection />

    </>
  );
}

export default Home;
