/* eslint-disable no-unused-vars */
import React from "react";
import MealTypes from "./MealTypes";
import styles from "./MealTypesSection.module.css";

export default function MealTypesSection({ mealTypes }) {
  return (
    <section className={`${styles.section} grid-nogutter`}>
      <h2 className="text-center">Search Recipes By Meal Type</h2>
      <div className="md:col-6">
        <MealTypes data={mealTypes} />
      </div>
    </section>
  );
}
