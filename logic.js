$( document ).ready(function() {
    
});


$("button.btn.btn-outline-success.my-2.my-sm-0").on("click", function(){
    event.preventDefault();
    var mainIngredient = $(".form-control.mr-sm-2").val().trim();
    var queryURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + mainIngredient
    console.log(queryURL);
    console.log(mainIngredient);

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        var results = response.meals;
        for (var i = 0; i < results.length; i++){
            var recbox = $("<div class='item'>");

            var recImage = $("<img class='foodimage'>");

            var apiImg = results[i].strMealThumb;

            var recTitle = results[i].strMeal;

            var picTitle = $("<p>").text(recTitle);
            
            recImage.attr("src", apiImg);

            var recID = results[i].idMeal;

            recImage.attr("data-id",recID);

            recbox.append(picTitle);

            recbox.append(recImage);

            $("#rec").append(recbox);
            }

      });

      
      $("#rec").empty()
      $("#ingredients").empty();
      $("#amount").empty();
      $("#currentrecIMG").empty();
      $("#recepieINST").empty();
      
})

$(document).on("click",".foodimage", function(){
   
    $("#rec").empty();

    var ititle = $("<h3>").text("Ingredients");

    var atitle = $("<h3>").text("Measurements");

    var institle =$("<h3>").text("Instructions");

        $("#ingredients").append(ititle);
        $("#amount").append(atitle);
        $("#recepieINST").append(institle);


    

    var recID = $(this).attr("data-id");
    var queryURL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" +recID;
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        var results = response.meals;

        console.log('results',results);

        var ingredientList = $("<ul>");
        var amount = $("<ul>");

        


        /// LIST OF INGREDIENTS
        for(var i = 1; i <= 20; i++){ 
        var ingredientKey = 'strIngredient'+i.toString();
        var ingredient = results[0][ingredientKey];
        if (ingredient.length > 0) {
            console.log('ingredient', ingredient)

            var listItem = $("<li>").text(ingredient);

            ingredientList.append(listItem);


            $("#ingredients").append(ingredientList);


            // this is the value of each valid ingredient 
        }

        
        }
        /// LIST OF INGREDIENT MEASURES
        for(var i = 1; i <= 20; i++){
            var ingamountKey = 'strMeasure'+i.toString();
            var ingredientMeasure = results[0][ingamountKey];
            
            if (ingredientMeasure.length > 0){
                
                var amountlist = $("<li>").text(ingredientMeasure);

                amount.append(amountlist);

                $("#amount").append(amount);
            }


        }
        // Selected Recepie
        var recepietitle = $("<h1 id='rectitle'>").text(results[0].strMeal);

        $("#rec").append(recepietitle);

        /// IMAGE OF SELCTED RECEPIE
        var selrecIMG = results[0].strMealThumb;

        console.log(selrecIMG);

        var fIMG = $("<img id='cIMG'>");

        fIMG.attr("src", selrecIMG);

        console.log(fIMG);

        $("#currentrecIMG").append(fIMG);

        /// INSTRUCTIONS FOR SELECTED RECEPIE

        var recinstructions = results[0].strInstructions;

        var instParagraph = $("<p>");

        instParagraph.text(recinstructions);

        $("#recepieINST").append(instParagraph);

        // Pulling and Appending Youtube Video

    var apiVideo = results[0].strYoutube;

       var embed = apiVideo;

       embed = embed.replace('/watch?v=','/embed/');

       console.log(embed)
       

       var linktovideo = $("<p>");

       var linktext = $("<a id'embedlink'>");

       linktext.attr('href',embed);

       linktext.text(embed);

   

       linktovideo.append(linktext);

       var vidBox = $("<iframe>");

       vidBox.attr('src', embed);

       $("#video").append(vidBox);

       $("#video").prepend(linktovideo);
        
      });
})

$(document).on("click",".foodimage", function(){
  event.preventDefault();
  var mainIngredient = $(".form-control.mr-sm-2").val().trim();
    // Here we grab the text from the input box
    // var search = $("#food-input").val();
    // Here we construct our URL
    var queryURL = "https://api.walmartlabs.com/v1/search?apiKey=avwfn326ass7ejz97edr7w49&ls&query=" + mainIngredient;

    $.ajax({
      url: queryURL,
      method: "GET",
      dataType: "jsonp"

    }).then(function(response) {
      console.log(response);
      var results = response.items;
      var price = "$" + results[0].salePrice + "<br>";
      var name = results[0].name + "<br>";
      var image = $("<img>" + "<br>");
      image.attr("src",results[0].mediumImage);
      var site = results[0].productUrl;
      var link = ("<div><a href=" + site + " >Walmart.com</a></div>")

      $("#food-view").append(image);
      $("#food-view").append(price);
      $("#food-view").append(name);
      $("#food-view").append(link);

    });
  });







