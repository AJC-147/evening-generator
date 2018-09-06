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
            
            // var imgURL = randomRecipe.recipe.image;
            // var image = $("<img>").attr({
            //     src: imgURL,
            //     addClass: "zoom",
            // });
            // console.log(image);

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


        // DYNAMIC MOVIE CODE
        var selectedCuisine = [$("#foodGenre option:selected").text()];
        var queryURL = "https://www.omdbapi.com/?apikey=d9666985&s=" + selectedCuisine;
        console.log(queryURL);


        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
            $("#movieResult").empty();

            var result = response.Search.slice(0, 5);
            console.log(result);

            var movieDiv = $("<div class='movie'>");

            var movieSuggestion = result[Math.floor(Math.random()*result.length)];
            console.log(movieSuggestion);
            movieDiv.append(movieSuggestion);

            var imgURL = movieSuggestion.Poster;
            var image = $("<img>").attr("src", imgURL);
            movieDiv.prepend(image);
            // $(image).wrap("<a href=" +  "https://www.imdb.com/title/" + imdb + "/plotsummary?ref_=tt_ql_stry_2", target='_blank'></a>");
            // movieDiv.append(recipeLink);


            var plot = movieSuggestion.Plot;
            var plotText = $("<p>").text(plot);
            movieDiv.append(plotText);
           $("#movieResult").append(movieDiv);
        });

            var year = movieSuggestion.Year;
            var yearText = $("<p>").text(year);
            movieDiv.append(yearText);

            var imdb = movieSuggestion.imdbID;
            // console.log(imdb);
            var imdbURL = "https://www.imdb.com/title/" + imdb + "/plotsummary?ref_=tt_ql_stry_2";
            var imdbText = $("<a />", {
                name : "link",
                href : imdbURL,
                text : "Learn more at IMDB",
                target : "_blank"
            })
            movieDiv.append(imdbText);

            https://www.imdb.com/title/" + imdb + "/plotsummary?ref_=tt_ql_stry_2"

            $("#movieResult").append(movieDiv);
        });



    })



});


