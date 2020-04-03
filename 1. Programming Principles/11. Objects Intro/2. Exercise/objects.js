/////////////////////// TASK 1: /////////////////////

// var aboutCoffee = {
//     name: "Black coffee",
//     strength: "Strong",
//     flavour: "Without sugar",
//     milk: "No",
//     sugar: "No"
// };
// console.log(coffee);

/////////////////////// TASK 1 (Construction Function): /////////////////////

// function AboutCoffee(name, strength, flavour, milk, sugar) {
//     this.name = name;
//     this.strength = flavour;
//     this.flavour = strength ;
//     this.milk = milk;
//     this.sugar = sugar;
// }

// var result = new AboutCoffee("Maxi", "Black coffee", "Strong", "No", "No")
// console.log(result);

/////////////////////// TASK 2: /////////////////////

// var favoriteMovie = {
//     title: "The Lord of the Rings",
//     actors: ["Orlando Bloom", "Vigo Mortensen", "Elijah Wood", "Ian McKellen"],
//     director: "Peter Jackson",
//     writer: "J.R.R. Tolkien",
//     genre: ["Fantasy", "Action", "Adventure", "Drama"],
//     popularity: "Worldwide"
// };

// console.log(favoriteMovie);
// console.log(favoriteMovie.actors[0]);
// console.log(favoriteMovie.genre[2]);


/////////////////////// TASK 2 (Constructor Function): /////////////////////

// function FavoriteMovie(title, actors, director, writer, genre, popularity) {
//     this.title = title;
//     this.actors = actors;
//     this.director = director;
//     this.writer = writer;
//     this.genre = genre;
//     this.popularity = popularity;
// }

// var result = new FavoriteMovie("The Lord of the Rings", ["Orlando Bloom", "Vigo Mortensen", "Elijah Wood", "Ian McKellen"], "Peter Jackson", "J.R.R. Tolkien", ["Fantasy", "Action", "Adventure", "Drama"], "Worldwide");
// console.log(result.genre[2]);


/////////////////////// TASK 3: ///////////////////////
// function projectBootstrap(description, programmingLanguage, gitRepository, booleanStatus) {

//     return {
//         description: description,
//         programmingLanguage: programmingLanguage,
//         gitRepository: gitRepository,
//         booleanStatus: booleanStatus,
//         getRepository: function () {
//             return this.gitRepository;
//         },
//         isJavaScript: function () {
//             if (this.programmingLanguage === "JavaScript") {
//                 return true;
//             } else {
//                 return false;
//             }
//         },
//         getBooleanStatus: function () {
//             if (booleanStatus === true) {
//                 return this.booleanStatus
//             }
//         }
//     }
// }

// var project = projectBootstrap("Build a website using a Bootstrap library.", "JavaScript", "bit-web", true)
// console.log(project.getBooleanStatus());

////////////////////////// TASK 3 (Constructor Function): //////////////////////

// function ProjectBootstrap(description, programmingLanguage, gitRepository, booleanStatus) {
//     this.description = description;
//     this.programmingLanguage = programmingLanguage;
//     this.gitRepository = gitRepository;
//     this.booleanStatus = booleanStatus;
//     this.getRepository = function () {
//         return this.gitRepository;
//     };
//     this.isJavaScript = function () {
//         if (this.programmingLanguage === "JavaScript") {
//             return true;
//         } else {
//             return false;
//         }
//     };
//     this.getBooleanStatus = function () {
//         if (booleanStatus === true) {
//             return this.booleanStatus
//         }
//     }
// }

// var result = new ProjectBootstrap("Build a website using a Bootstrap library.", "JavaScript", "bit-web", true);
// console.log(result.getRepository());



//////////////////////////////// TASK 4: ////////////////////////////////////

// function buildRecipe(recipeName, typeOfCuisine, compl, listOfIngredients, prepTime, prepInstructions) {
//     return {
//         name: recipeName,
//         cuisine: typeOfCuisine,
//         complexity: compl,
//         ingredients: listOfIngredients,
//         time: prepTime,
//         instructions: prepInstructions,
//         printIngredients: function () {
//             return this.ingredients;
//         },
//         timeToPrepare: function () {
//             if (this.time < 15) {
//                 return "Yes it can be prepared"
//             }
//             return "No can do, sir"
//         },
//         changeCuisine: function (b) {
//             return this.typeOfCuisine = b;
//         },
//         deleteIngredient: function () {
//             var array = [];
//             for (var i = 0; i < this.ingredients.length; i++) {
//                 if (this.ingredients[i] === this.ingredients[0]) {
//                     continue;
//                 }
//                 array += this.ingredients[i];
//             }
//             return this.ingredients = array;
//         }
//     }
// }

// var a = buildRecipe("Gyros", "Greek", 5, ["2 lb boneless, skinless chicken thighs (910 g), pounded flat", "½ large yellow onion, peeled and root side removed", "1 wooden skewer, sturdy, roughly 10 inches (25 cm)"], 60, "Check menu");
// console.log(a.deleteIngredient());

//////////////////////////////// TASK 4 (Constructor Function): ////////////////////////////////////

// function CreateRecipe(recipeName, typeOfCuisine, compl, listOfIngredients, prepTime, prepInstructions) {
//     this.name = recipeName;
//     this.cuisine = typeOfCuisine;
//     this.complexity = compl;
//     this.ingredients = listOfIngredients;
//     this.time = prepTime;
//     this.instructions = prepInstructions;
//     this.printIngredients = function () {
//         return this.ingredients;
//     };
//     this.timeToPrepare = function () {
//         if (this.time < 15) {
//             return this.name + " can be made under 15 minutes."
//         }
//         return this.name + " can NOT be made under 15 minutes."
//     };
//     this.changeCuisine = function (newTypeofCuisine) {
//         return this.cuisine = newTypeofCuisine;
//     };
//     this.deleteIngredient= function () {
//         var newArray = [];
//         for (var i = 0; i < this.ingredients.length; i++) {
//             if (this.ingredients[i] === this.ingredients[0]) {
//                 continue;
//             }
//             newArray += this.ingredients[i];
//         }
//         return this.ingredients = newArray;
//     }

// }


// var result = new CreateRecipe("Gyros", "Greek", 5, ["2 lb boneless, skinless chicken thighs (910 g), pounded flat", "½ large yellow onion, peeled and root side removed", "1 wooden skewer, sturdy, roughly 10 inches (25 cm)"], 60, "Check menu");
// console.log(result.deleteIngredient());
