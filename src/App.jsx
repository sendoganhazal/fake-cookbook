/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import { fetchAllRecipes } from "./utils/api-fetcher";
import Home from "./pages/home/Home";
import Root from "./layout/Root";

function App() {
  const [recipes, setRecipes] = useState();
  const [mealTypes, setMealTypes] = useState();
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const recipesData = await fetchAllRecipes();
        setRecipes(recipesData.recipes);
          const allMealTypes = [
      ...new Set(recipesData.recipes.flatMap(recipe => recipe.mealType)),
    ];
    setMealTypes(allMealTypes);
    console.log(mealTypes);
      } catch (error) {
        console.error("Tarifler getirilirken hata oluştu:", error);
      }
    };
    fetchRecipes();
  
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<Home mTypes={mealTypes} />} />
    </Routes>
  );
}

export default App;
