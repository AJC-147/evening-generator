$(document).ready(function () {

    $("#submit").click(function () {
        

    var x = document.getElementById("movieResultCol");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "block";
    }
        
    var y = document.getElementById("foodResultCol");
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "block";
    }
        
//    var a = document.getElementById("movieParaCol");
//    if (a.style.display === "inherit") {
//        a.style.display = "none";
//    } else {
//        a.style.display = "inherit";
//    }
//        
//    var b = document.getElementById("foodParaCol");
//    if (b.style.display === "inherit") {
//        b.style.display = "none";
//    } else {
//        b.style.display = "inherit";
//    }
        
//        var a = document.getElementByClass("slideOutRight");
//    if (a.style.animation-delay === "100s") {
//        a.style.animation-delay = "1s";
//    } else {
//        a.style.animation-delay = "1s";
//    }
//        
//        var b = document.getElementByClass("slideOutLeft");
//    if (b.style.animation-delay === "100s") {
//        b.style.animation-delay = "1s";
//    } else {
//        b.style.animation-delay = "1s";
//    }


        var keyword = $("#foodKeyword").val().trim();
        var ingredientNum = $("#ingredientNumber input:checked").val();
        var cookingTime = $("#cookTime input:checked").val();
        var foodExclusions = $("#healthExclusions input:checked").val();
        var queryURL = "https://api.edamam.com/search?&app_id=c5fa5243&app_key=1374f025ec2d733d2010bcbfe317e079&q=" + keyword + "&ingr=" + ingredientNum + "&time=" + cookingTime + foodExclusions;
        console.log(queryURL);
        //        console.log(keyword);
        //        console.log(ingredientNum);
        //        console.log(cookingTime);
        //        console.log(foodExclusions);

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            $("#recipeResults").empty();

            var recipeDiv = $("<div class='recipe'>");

            var randomRecipe = response.hits[Math.floor(Math.random() * response.hits.length)];
            //            console.log(randomRecipe);

            var name = randomRecipe.recipe.label;
            var recipeTitle = $("<h3>").text(name);
            recipeDiv.append(recipeTitle);
            //            console.log(name);
            //            console.log(recipeTitle);

            var imgURL = randomRecipe.recipe.image;
            var image = $("<img>").attr("src", imgURL);
            //            console.log(image);

            var ingred = randomRecipe.recipe.ingredientLines;
            var ingredients = $("<p>").text(ingred);
            recipeDiv.append(ingredients);
            //            console.log(ingredients);

            var source = randomRecipe.recipe.source;
            var recipeURL = randomRecipe.recipe.url;
            var recipeLink = $("<a />", {
                name: "link",
                href: recipeURL,
                text: "Instructions at " + source,
                target: "_blank"
            });
            console.log(recipeURL);
            console.log(recipeLink);

            recipeDiv.prepend(image);
            $(image).wrap("<a href=" + recipeURL + " target='_blank'></a>");
            recipeDiv.append(recipeLink);

            $("#recipeResults").append(recipeDiv);
        });




        var filmGenre = $("#withGenre option:selected").val();
        var sortBy = $("#sortedBy input:checked").val();
        var queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=af5bef9fa0d9daa3815142e331d7fa37&language=en-US&include_adult=false&include_video=false&vote_count.gte=500" + "&sort_by=" + sortBy + filmGenre;
        console.log(queryURL);
        //        console.log(sortBy);



        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            $("#movieResult").empty();

            var movieDiv = $("<div class='movie'>");

            var randomMovie = response.results[Math.floor(Math.random() * response.results.length)];
            //            console.log(randomMovie);



            var filmTitle = randomMovie.title;
            var movieTitle = $("<h3>").text(filmTitle);
            movieDiv.append(movieTitle);
            //            console.log(filmTitle);
            //            console.log(movieTitle);

            var posterURL = randomMovie.poster_path;
            var imagePost = $("<img>").attr("src", "https://image.tmdb.org/t/p/w1280" + posterURL);
            movieDiv.prepend(imagePost);
            //            console.log(imagePost);

            var summary = randomMovie.overview;
            var plotSummary = $("<p>").text(summary);
            movieDiv.append(plotSummary);
            //            console.log(plotSummary);


            $("#movieResult").append(movieDiv);
        });


    })

});
