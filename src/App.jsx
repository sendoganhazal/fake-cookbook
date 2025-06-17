/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState, useEffect } from "react";

import { fetchAllRecipes,fetchAllMealType } from "./utils/api-fetcher";
import Hero from "./components/hero/Hero";
import Header from "./components/header/Header";



function App() {
  const [recipes, setRecipes] = useState();
  const [mealTypes, setMealTypes] = useState()
  useEffect(() => {
      // 1. useEffect içinde async bir fonksiyon tanımlayın
    const fetchRecipes = async () => {
      try {
        const recipesData = await fetchAllRecipes(); // Asenkron işlemi await ile bekleyin
        const meals = await fetchAllMealType();
        setRecipes(recipesData.recipes); // State'i güncelleyin
        setMealTypes(meals);
        console.log("recipes", recipesData); // Güncel veriyi loglayın
         console.log("mealTypes", mealTypes); // Güncel veriyi loglayın
      } catch (error) {
        console.error("Tarifler getirilirken hata oluştu:", error);
        // Hata yönetimi burada yapılabilir (örn: setError(error))
      }
    };

    // 2. Tanımladığ
     fetchRecipes();
  }, []);

  return (
    <>
      <Header/>
      <Hero/>
    </>
  );
}

export default App;
