const axios = require('axios');
const Cocktail = require('../models/Cocktail');
const mongoose = require('mongoose');
const fs = require('fs');
const { mongoURI } = require('../config/keys');

mongoose.Promise = global.Promise;
mongoose.connect(mongoURI);
mongoose.connection.on('error', err => {
  console.error(`Alarma => ${err.message}`);
});

async function getData() {
  const res = await axios.get('http://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka');
  console.log(res.data);
  res.data.drinks.forEach(async drink => {
    console.log(drink.strDrink);
    const cocktail = new Cocktail({
      glass: drink.strGlass,
      category: drink.strCategory,
      tags: drink.strAlcoholic,
      name: drink.strDrink,
      image: drink.strDrinkThumb,
      recipe: drink.strInstructions,
      ingredient1: drink.strIngredient1,
      ingredient2: drink.strIngredient2,
      ingredient3: drink.strIngredient3,
      ingredient4: drink.strIngredient4,
      ingredient5: drink.strIngredient5,
      ingredient6: drink.strIngredient6,
      ingredient7: drink.strIngredient7,
      ingredient8: drink.strIngredient8,
      ingredient9: drink.strIngredient9,
      ingredient10: drink.strIngredient10,
      measure1: drink.strMeasure1,
      measure2: drink.strMeasure2,
      measure3: drink.strMeasure3,
      measure4: drink.strMeasure4,
      measure5: drink.strMeasure5,
      measure6: drink.strMeasure6,
      measure7: drink.strMeasure7,
      measure8: drink.strMeasure8,
      measure9: drink.strMeasure9,
      measure10: drink.strMeasure10
    });
    await cocktail.save();
    console.log(cocktail);
  });
}

async function toJSON() {
  const data = await Cocktail.find();
  const stringified = JSON.stringify(data);
  fs.writeFileSync('data.json', stringified);
}
// getData();

toJSON();
