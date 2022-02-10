require('dotenv/config');
const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = `mongodb+srv://${process.env.MG_USERNAME}:${process.env.MG_PWD}@cluster0.4pwhb.mongodb.net/recipes?retryWrites=true&w=majority`;

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    // return Recipe.deleteMany()
  }
  ).catch(err => console.error('Error connecting to mongo', err));

// Create all recipes \\
// Recipe.create(data)


// Log all titles \\
Recipe.find()
  .then(recipe => recipe.forEach((recipe) => console.log(recipe.title)))

// Update duration at Genovese recipe to 100 \\
Recipe.findOneAndUpdate(
  { title: {$eq: "Rigatoni alla Genovese"} },
  { duration: 100 },
  { new: true }
).catch((error) => console.log(error));




