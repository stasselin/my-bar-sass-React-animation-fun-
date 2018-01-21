import React from 'react';

const CocktailCard = props => (
  <div className="search-containter__cocktail-card">
    <img src={props.cocktail.image} alt={`${props.cocktail.name}`} width="100%" />
    <div>
      <h3>{props.cocktail.name}</h3>
      <p>{props.cocktail.recipe}</p>
    </div>
  </div>
);

export default CocktailCard;
