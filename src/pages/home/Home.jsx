/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Root from "../../layout/Root";
import MealTypesSection from "../../components/meal-types/MealTypesSection";
export default function Home({mTypes}) {
  return (
    <Root>
      <Hero />
      <MealTypesSection mealTypes={mTypes}/>
    </Root>
  );
}
