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

            $("#foodResult").append(resultDiv);
        });

        
        var movieArray = ["Jurassic Park", "Inception", "The Muppets", "Inside Out"];
        var queryURL = movieArray[Math.floor(Math.random()*movieArray.length)];

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(movieSelection) {
           $("#movieResult").empty();

           var movieDiv = $("<div class='movie'>");

           $("#movieResult").append(movieDiv);
        })


        



    })



});


