const mongoose = require('mongoose');
const slug = require('slugs');

mongoose.Promise = global.Promise;

const cocktailSchema = new mongoose.Schema({
  glass: String,
  category: String,
  tags: [String],
  name: { type: String, trim: true, required: 'Please enter a cocktail name' },
  slug: String,
  history: String,
  recipe: { type: String, trim: true, required: 'Please enter a cocktail recipe' },
  ingredient1: String,
  ingredient2: String,
  ingredient3: String,
  ingredient4: String,
  ingredient5: String,
  ingredient6: String,
  ingredient7: String,
  ingredient8: String,
  ingredient9: String,
  ingredient10: String,
  measure1: String,
  measure2: String,
  measure3: String,
  measure4: String,
  measure5: String,
  measure6: String,
  measure7: String,
  measure8: String,
  measure9: String,
  measure10: String,
  image: String
});

cocktailSchema.pre('save', function(next) {
  if (!this.isModified('name')) {
    next();
    return;
  }
  this.slug = slug(this.name);
  next();
});

module.exports = mongoose.model('Cocktail', cocktailSchema);
