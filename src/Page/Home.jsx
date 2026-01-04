import React from "react";
import Slider from "../Component/Slider";
import PopularSection from "../Component/PopularSection";
import AdoptPet from "../Component/AdoptPet";
import MeetOurPetHeroes from "../Component/MeetOurPetHeros";
import CategorySection from "./CategorSectiony";
import Newsletter from "./Newsletter";
import FAQ from "./Faq";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <CategorySection></CategorySection>
      <PopularSection></PopularSection>
      <AdoptPet></AdoptPet>
      <MeetOurPetHeroes></MeetOurPetHeroes>
      <Newsletter></Newsletter>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
