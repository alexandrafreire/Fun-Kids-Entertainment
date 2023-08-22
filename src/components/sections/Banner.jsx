import React from "react";
import Banner from "../../images/Banner.mp4";
import IndoorActivities from "../../images/IndoorActivities.png";
import OutdoorActivities from "../../images/OutdoorActivities.png";
import ConcertsShows from "../../images/ConcertsShows.png";
import Games from "../../images/Games.png";
import MoviesTVShows from "../../images/MoviesTVShows.png";
import Books from "../../images/Books.png";
import "./Banner.css";

export const HomePageBanner = () => {
  return (
    <div className="Banner-container">
      <video src={Banner} playsInline autoPlay loop muted />
    </div>
  );
};

export const IndoorActivitiesBanner = () => {
  return (
    <div className="Banner-container">
      <img src={IndoorActivities} alt="Indoor Activities" />
    </div>
  );
};

export const OutdoorActivitiesBanner = () => {
  return (
    <div className="Banner-container">
      <img src={OutdoorActivities} alt="Outdoor Activities" />
    </div>
  );
};

export const ConcertsShowsBanner = () => {
  return (
    <div className="Banner-container">
      <img src={ConcertsShows} alt="Concerts & Shows" />
    </div>
  );
};

export const GamesBanner = () => {
  return (
    <div className="Banner-container">
      <img src={Games} alt="Games" />
    </div>
  );
};

export const BooksBanner = () => {
  return (
    <div className="Banner-container">
      <img src={Books} alt="Movies & TVShows" />
    </div>
  );
};

export const MoviesTVShowsBanner = () => {
  return (
    <div className="Banner-container">
      <img src={MoviesTVShows} alt="Movies & TVShows" />
    </div>
  );
};
