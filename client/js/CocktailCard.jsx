import React from 'react';
import { shape, string } from 'prop-types';

const CocktailCard = props => (
  <div className="cocktail-card">
    <div className="cocktail-card__side cocktail-card__side--front">
      <img src={props.cocktail.image} alt={`${props.cocktail.name}`} />
      <h3 className="cocktail-title">{props.cocktail.name}</h3>
    </div>
    <div className="cocktail-card__side cocktail-card__side--back">
      <h3>Ingredients</h3>
      <p>{props.cocktail.ingredient1}</p>
      <p>{props.cocktail.ingredient2}</p>
      <p>{props.cocktail.ingredient3}</p>
      <p>{props.cocktail.ingredient4}</p>
      <p>{props.cocktail.ingredient5}</p>
      <p>{props.cocktail.ingredient6}</p>
      <p>{props.cocktail.ingredient7}</p>
      <p>{props.cocktail.ingredient8}</p>
      <p>{props.cocktail.ingredient9}</p>
      <p>{props.cocktail.ingredient10}</p>
    </div>
  </div>
);

CocktailCard.propTypes = {
  cocktail: shape({
    image: string.isRequired,
    name: string.isRequired,
    ingredient1: String,
    ingredient2: String,
    ingredient3: String,
    ingredient4: String,
    ingredient5: String,
    ingredient6: String,
    ingredient7: String,
    ingredient8: String,
    ingredient9: String,
    ingredient10: String
  }).isRequired
};

export default CocktailCard;
