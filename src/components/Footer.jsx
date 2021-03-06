import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';

const Footer = () => (
  <footer>
    <nav data-testid="footer" className="footer ruby-bg">
      <Link data-testid="meals-link" to="/comidas">
        <img data-testid="food-bottom-btn" alt="meal-icon" className="icon-filter" src={mealIcon} />
      </Link>
      <Link data-testid="drinks-link" to="/bebidas">
        <img
          data-testid="drinks-bottom-btn"
          alt="drink-icon"
          className="icon-filter"
          src={drinkIcon}
        />
      </Link>
      <Link data-testid="explore-link" to="/explorar">
        <img
          data-testid="explore-bottom-btn"
          alt="explore-icon"
          className="icon-filter"
          src={exploreIcon}
        />
      </Link>
    </nav>
  </footer>
);

export default Footer;
