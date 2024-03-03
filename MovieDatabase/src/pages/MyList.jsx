import React from "react";
import Header from "../components/Header";
import CarouselSlider from "../components/CarouselSlider";

const MyList = () => {
  return (
    <>
      <Header />
      <div className="container">
        <h1>My Lists</h1>
        <h2>Favorite movies</h2>
        <CarouselSlider></CarouselSlider>
        <h2>Movies to watch</h2>
        <CarouselSlider></CarouselSlider>
        <h2>Classic movies</h2>
        <CarouselSlider></CarouselSlider>
      </div>
    </>
  );
};

export default MyList;
