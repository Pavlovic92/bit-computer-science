/////////////////////// TASK 1: ///////////////////////
//Create an object that represents your favourite coffee. Please include coffee name, strength, flavour, milk, sugar, … everything you like!

var coffee = {
    name: "Espresso",
    strength: "strong",
    flavour: "arabica",
    milk: "no",
    sugar: "no"
};
console.log(coffee);


/////////////////////// TASK 2: ///////////////////////
//Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity. 

var favoriteMovie = {
    title: "The Lord of the Rings",
    actors: ["Orlando Bloom", "Vigo Mortensen", "Elijah Wood", "Ian McKellen"],
    director: "Peter Jackson",
    writer: "J.R.R. Tolkien",
    genre: ["Fantasy", "Action", "Adventure", "Drama"],
    popularity: "Worldwide"
};

console.log(favoriteMovie);
console.log(favoriteMovie.actors[0]);
console.log(favoriteMovie.genre[2]);


/////////////////////// TASK 3: ///////////////////////
//Write a function that creates an object that represents a project. Each project is described by: description,  programming language, git repository, boolean status that says if the project is in development or not. 
//Add a method that prints out the project's repository,  a method that checks if the project is written in JavaScript as well as a method that checks if the project is in development or not.

function projectBootstrap(description, programmingLanguage, gitRepository, booleanStatus) {

    return {
        description: description,
        programmingLanguage: programmingLanguage,
        gitRepository: gitRepository,
        booleanStatus: booleanStatus,
        getRepository: function () {
            return this.gitRepository;
        },
        isJavaScript: function () {
            if (this.programmingLanguage === "JavaScript") {
                return true;
            } else {
                return false;
            }
        },
        getBooleanStatus: function () {
            if (booleanStatus === true) {
                return this.programmingLanguage
            }
        }
    }
}

var project = projectBootstrap("Build a website using a Bootstrap library.", "JavaScript", "bit-web", true)

console.log(project.isJavaScript());


/////////////////////// TASK 4: ///////////////////////
//Write a function that creates an object that represents a culinary recipe.  
//Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
// -Add a method that prints out all the ingredients necessary for the meal preparation. 
// -Add a method that checks if a meal can be prepared for 15 minutes. 
// -Add a method that changes the type of cuisine to the given value. 
// -Add a method that delete a given ingredient from the list of ingredients. 

function culinaryRecipe(recipeName, category, complexity, listOfIngredients, prepTime, prepInstruction)

return {
    recipeName: recipeName,
    category: category,
    complexity: 3,
    listOfIngredients: [
        "4 chicken breast halves",
        "5 oz frozen spinach, thawed",
        "½ cup sour cream",
        "½ cup pecorino cheese",
        "shredded 8 slices bacon",
        "salt", "pepper"
    ],
    prepTime: 45,
    prepInstruction: [
        "1. Preheat the oven to 375°F.",
        "2. In a large bowl, defrost the spinach and stir in sour cream and pecorino cheese.",
        "3. Place the chicken breasts between two sheets of plastic wrap and pound to an even 1 / 2 inch thickness.",
        "4. Spoon in one quarter of the filling into each pounded chicken breast.Roll up the chicken away into a tight roll.",
        "5. Wrap each roll with 2 slices of bacon.If needed, secure the roll with toothpicks to make sure they don '\t' come undone.",
        "6. Bake for 30 minutes and then broilcon.(This time can vary depending on the thickness of your chicken)."
    ],
    printIngredients: function () {
        return this.listOfIngredients;
    },
    checkPrepTime: function () {
        if (this.prepTime > askedTime) {
            return true;
        } else {
            return false;
        }
    },
    changeCategory: function () {
       return this.category;
    },
    deleteIngredient: function () {
        return this.listOfIngredients.splice[2];
    }
}

var recipe = culinaryRecipe('BaconWrappedStuffedChicken', 'mainMeal', 'complexity', 'listOfIngredients', 'prepTime', 'prepInstruction'){}

console.log(recipe);
