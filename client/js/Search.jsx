import React, { Component } from 'react';
import preload from '../data.json';
import CocktailCard from './CocktailCard';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }
  handleSearchTermChange(event) {
    this.setState({ searchTerm: event.target.value });
  }
  render() {
    return (
      <div>
        <header className="nav">
          <h1 className="nav__brand">MyBar</h1>
          <input
            onChange={this.handleSearchTermChange}
            value={this.state.searchTerm}
            className="nav__search"
            type="text"
            placeholder="Search"
          />
        </header>
        <div className="search-container">
          {preload
            .filter(
              cocktail =>
                `${cocktail.name} ${cocktail.ingredient1} ${cocktail.ingredient2} ${cocktail.ingredient3} ${
                  cocktail.ingredient4
                } ${cocktail.ingredient5} ${cocktail.ingredient6} ${cocktail.ingredient7} ${cocktail.ingredient8} ${
                  cocktail.ingredient9
                } ${cocktail.ingredient10}`
                  .toUpperCase()
                  .indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(cocktail => <CocktailCard key={cocktail._id} cocktail={cocktail} />)}
        </div>
      </div>
    );
  }
}

export default Search;
