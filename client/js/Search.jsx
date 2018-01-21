import React from 'react';
import preload from '../data.json';
import CocktailCard from './CocktailCard';

const Search = () => (
  <div className="search-container">{preload.map(cocktail => <CocktailCard cocktail={cocktail} />)}</div>
);

export default Search;
