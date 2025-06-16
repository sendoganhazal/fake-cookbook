/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { fetchAllRecipes,fetchAllMealType } from "./utils/api-fetcher";
import Hero from "./components/Hero";



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
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Hero/>
    </>
  );
}

export default App;
