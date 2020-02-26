/////////////////////// TASK 1: /////////////////////

// var coffee = {
//     name: "Espresso",
//     strength: "strong",
//     flavour: "arabica",
//     milk: "no",
//     sugar: "no"
// };
// console.log(coffee);


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
// console.log(result);



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
