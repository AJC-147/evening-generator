$(document).ready(function() {

    $("#submit").click(function() {
        var keyword = $("#foodGenre option:selected").text();
        var ingredientNum = $("#ingredientNumb option:selected").text();
        var queryURL = "https://api.edamam.com/search?&app_id=c5fa5243&app_key=1374f025ec2d733d2010bcbfe317e079&q=" + keyword + "&ingr=" + ingredientNum;
        console.log(keyword);
        console.log(ingredientNum);

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
            
            $("#recipe").empty();

            var resultDiv = $("<div class='recipe'>");

            var randomRecipe = response.hits[Math.floor(Math.random() * response.hits.length)];
            console.log(randomRecipe);
            
            var name = randomRecipe.recipe.label;
            var recipeTitle = $("<h3>").text(name);
            resultDiv.append(recipeTitle);
            console.log(name);
            console.log(recipeTitle);

            var imgURL = randomRecipe.recipe.image;
            var image = $("<img>").attr("src", imgURL);
            console.log(image);
            
            var ingred = randomRecipe.recipe.ingredientLines;
            var ingredients = $("<p>").text(ingred);
            resultDiv.append(ingredients);
            console.log(ingredients);

var source = randomRecipe.recipe.source;
            var recipeURL = randomRecipe.recipe.url;
            var recipeLink = $("<a />", {
                name : "link",
                href : recipeURL,
                text : "Instructions at " + source,
                target : "_blank"
            });
            console.log(recipeURL);
            console.log(recipeLink);

            resultDiv.prepend(image);
            $(image).wrap("<a href=" + recipeURL +" target='_blank'></a>");
            resultDiv.append(recipeLink);

            $("#recipe").append(resultDiv);
        });
        
        
//        var selection = $("#dropDown option:selected").text();
//        var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?a=" + selection;
//        console.log(selection);
//
//        $.ajax({
//            url: queryURL,
//            method: "GET"
//        }).then(function(response) {
//            console.log(response);
//            $("#foodResult").empty();
//
//            var resultDiv = $("<div class='foodResult'>");
//
//            var chosenMeal = response.meals[Math.floor(Math.random() * response.meals.length)];
//
//            var imgURL = chosenMeal.strMealThumb;
//            var image = $("<img>").attr("src", imgURL);
//
//            var name = chosenMeal.strMeal;
//            var foodName = $("<p>").text(name);
//            resultDiv.append(foodName);
//
//            // console.log(recipeId);
//            var recipeId = chosenMeal.idMeal;
//            var recipeLink = $("<a />", {
//                name : "link",
//                href : "https://www.themealdb.com/meal.php?c=" + recipeId,
//                text : "Recipe"
//            });
//            console.log(recipeLink);
//
//            resultDiv.prepend(image);
//            $(image).wrap("<a href=" + "https://www.themealdb.com/meal.php?c=" + recipeId +" target='_blank'></a>");
//            resultDiv.append(recipeLink);
//
//            $("#foodResult").append(resultDiv);
//        });

        
        var movieArray = ["Jurassic Park", "Inception", "The Muppets", "Inside Out", "Gravity", "Slumdog Millionaire"];
        var randomMovie = movieArray[Math.floor(Math.random()*movieArray.length)];

        $.ajax({
            url: "https://www.omdbapi.com/?apikey=d9666985&t=" + randomMovie,
            method: "GET"
        }).then(function(response) {
           $("#movieResult").empty();

           var movieDiv = $("<div class='movie'>");

            var imgURL = response.Poster;
            var image = $("<img>").attr("src", imgURL);
            movieDiv.prepend(image);


           $("#movieResult").append(movieDiv);
        });


        



    })



});


