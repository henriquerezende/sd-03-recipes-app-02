export const ingredientsList = (recipe) => {
  const response = [];
  for (let index = 1; index < 16; index += 1) {
    if (recipe[`strIngredient${index}`]) {
      response.push({
        name: recipe[`strIngredient${index}`],
        quantity: recipe[`strMeasure${index}`],
      });
    } else {
      break;
    }
  }
  return response;
};

export const destructureRecipe = (recipe, type) => {
  const {
    [`id${type}`]: id,
    [`str${type}`]: name,
    strArea: area,
    strCategory: category,
    [`str${type}Thumb`]: image,
    strYoutube: youtube,
    strInstructions: instructions,
    strTags: tags,
  } = recipe;
  const ingredients = ingredientsList(recipe);
  return { id, name, area, category, image, ingredients, youtube, instructions, tags };
};

export const svRecipes = (recipes) => {
  const data = recipes.meals || recipes.drinks;
  let type = '';
  if (recipes.meals) {
    type = 'Meal';
  } else {
    type = 'Drink';
  }
  type.toLowerCase();
  return data.map((recipe) => destructureRecipe(recipe, type));
};
