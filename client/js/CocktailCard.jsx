import React from 'react';

const CocktailCard = props => (
  <div className="cocktail-card">
    <div className="cocktail-card__side cocktail-card__side--front">
      <img src={props.cocktail.image} alt={`${props.cocktail.name}`} />
      <h3 className="cocktail-title">{props.cocktail.name}</h3>
    </div>
    <div className="cocktail-card__side cocktail-card__side--back">
      <p>{props.cocktail.recipe}</p>
    </div>
  </div>
);

export default CocktailCard;
