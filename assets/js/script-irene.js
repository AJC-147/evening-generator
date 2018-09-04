$(document).ready(function() {

    $("#submit").click(function() {
        var selection = $("#dropDown option:selected").text();
        var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?a=" + selection;
        console.log(selection);

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
            $("#foodResult").empty();

            var resultDiv = $("<div class='foodResult'>");

            var imgURL = response.meals[0].strMealThumb;
            var image = $("<img>").attr("src", imgURL);
            resultDiv.prepend(image);

            var name = response.meals[0].strMeal;
            var foodName = $("<p>").text(name);
            resultDiv.append(foodName);

            // console.log(recipeId);
            var recipeId = response.meals[0].idMeal;
            var recipeLink = $("<a />", {
                name : "link",
                href : "https://www.themealdb.com/meal.php?c=" + recipeId,
                text : "Recipe"
            });
            resultDiv.append(recipeLink);


            // function mealId() {
            //     var recipe = response.meals[0].idMeal;
                // var queryURL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + recipe;
            //     var recipeText = $("<p>").text(recipe);
            //     resultDiv.append(recipeText);
            // }

            // var recipe = function() {
            //     var recipeId = response.meals[0].idMeal;
            //     var recipeURL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + recipeId;
            //     // console.log(recipe);
            //     $.ajax({
            //         url: queryURL,
            //         method: "GET"
            //     }).then(function(response) {
            //         // console.log(response);
            //     })
            // };

            // var recipeText = recipe;
            // resultDiv.append(recipeText);


            // function mealId() {
            //     var recipe = response.meals[0].idMeal;
            //     var recipeURL = $("<a />", {
            //         // name : "link",
                    // href : "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + recipe,
            //         text : "Recipe"
            //     });
            //     console.log(recipe);
            // }

            // var recipeName = mealId;
            // resultDiv.append(recipeName);

            $("#foodResult").append(resultDiv);
        })



    })



})


