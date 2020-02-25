/////////////////////// TASK 1: /////////////////////
var coffee = {
    name: "Espresso",
    strength: "strong",
    flavour: "arabica",
    milk: "no",
    sugar: "no"
};
console.log(coffee);

/////////////////////// TASK 2: /////////////////////
var favoriteMovie = {
    title: "The Lord of the Rings",
    actors: ["Orlando Bloom", "Vigo Mortensen", "Elijah Wood", "Ian McKellen"],
    director: "Peter Jackson",
    writer: "J.R.R. Tolken",
    genre: ["Fantasy", "Action", "Adventure", "Drama"],
    popularity: "Worldwide"
};

console.log(favoriteMovie);
console.log(favoriteMovie.actors[0]);
console.log(favoriteMovie.genre[2]);

/////////////////////// TASK 3: ///////////////////////
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

var project = projectBootstrap("Build a website using a Bootstrap library.", "JavaaScript", "bit-web", true)

console.log(project.isJavaScript());


