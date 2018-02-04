import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from '../Search';
import CocktailCard from '../CocktailCard';
import preload from '../../data.json';

Enzyme.configure({ adapter: new Adapter() });

test('Search renders correctly', () => {
  const component = shallow(<Search />);
  expect(component).toMatchSnapshot();
});

test('Search should render correct amount of cocktails', () => {
  const component = shallow(<Search />);
  expect(component.find(CocktailCard).length).toEqual(preload.length);
});

test('Search should render correct amount of cocktails based on search term', () => {
  const searchWord = 'm';
  const component = shallow(<Search />);
  component.find('input').simulate('change', { target: { value: searchWord } });
  const cocktailCount = preload.filter(
    cocktail =>
      `${cocktail.name} ${cocktail.ingredient1} ${cocktail.ingredient2} ${cocktail.ingredient3} ${
        cocktail.ingredient4
      } ${cocktail.ingredient5} ${cocktail.ingredient6} ${cocktail.ingredient7} ${cocktail.ingredient8} ${
        cocktail.ingredient9
      } ${cocktail.ingredient10}`
        .toUpperCase()
        .indexOf(searchWord.toUpperCase()) >= 0
  ).length;
  expect(component.find(CocktailCard).length).toEqual(cocktailCount);
});
