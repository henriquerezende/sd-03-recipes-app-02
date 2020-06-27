import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCardMeal = ({ meal }) => {
  const { index, strMealThumb, strMeal, idMeal } = meal;

  return (
    <Link to={`/comidas/${idMeal}`}>
      <div data-testid={`${index}-recipe-card`}>
        <img data-testid={`${index}-card-img`} alt="Meal" className="meal-image" src={strMealThumb} />
        <h4 data-testid={`${index}-card-name`} className="meal-title">{strMeal}</h4>
      </div>
    </Link>
  );
}

export default RecipeCardMeal;