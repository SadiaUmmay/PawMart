import React from "react";
import Slider from "../Component/Slider";
import PopularSection from "../Component/PopularSection";
import AdoptPet from "../Component/AdoptPet";
import MeetOurPetHeroes from "../Component/MeetOurPetHeros";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <PopularSection></PopularSection>
      <AdoptPet></AdoptPet>
      <MeetOurPetHeroes></MeetOurPetHeroes>
    </div>
  );
};

export default Home;
