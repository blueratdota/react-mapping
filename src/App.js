import { recipes } from "./data.js";

export default function RecipeList() {
  function RecipeIngredients(recipe) {
    return recipe.ingredients.map((ingredient) => <li>{ingredient}</li>);
  }

  function RecipeEntry(props) {
    return props.recipes.map((recipe) => {
      return (
        <div>
          <h2>{recipe.name}</h2>
          <ul>
            <RecipeIngredients ingredients={recipe.ingredients} />
          </ul>
        </div>
      );
    });
  }

  return (
    <div>
      <h1>Recipes</h1>
      <RecipeEntry recipes={recipes} />
    </div>
  );
}
