/* eslint-disable no-unused-vars */
export async function fetchRecipes() {
  try {
    const res = await fetch("https://dummyjson.com/recipes");
    if (res.ok) {
      const post = await res.json();

      return post;
    } else {
      console.error("Error", res.status);
      return { error: true, status: res.status };
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function fetchAllRecipes() {
  try {
    const recipesData = await fetchRecipes();
    const totalData = recipesData.total;
    const res = await fetch(`https://dummyjson.com/recipes?limit=${totalData}`);
    if (res.ok) {
      const post = await res.json();

      return post;
    } else {
      console.error("Error", res.status);
      return { error: true, status: res.status };
    }
  } catch (error) {
    console.error("Tarifler getirilirken hata oluştu:", error);
    // Hata yönetimi burada yapılabilir (örn: setError(error))
  }
}
export async function fetchAllMealType() {
  try {
    const allRecipes = await fetchRecipes();
    console.log(allRecipes)
    const allMealTypes = [...new Set(allRecipes.recipes.flatMap(recipe => recipe.mealType))];
    return allMealTypes;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
