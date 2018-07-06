var config = {
  apiKey: "AIzaSyD22zMFQLX0LSzrND6ccKiFtjQXo4rQFlg",
  authDomain: "recipe-440f0.firebaseapp.com",
  databaseURL: "https://recipe-440f0.firebaseio.com",
  projectId: "recipe-440f0",
  storageBucket: "",
  messagingSenderId: "383790739796"
};

firebase.initializeApp(config);

var database = firebase.database();


  var search = "";
 
  
  $("#search-view1").append("<br>" + "Recent Searches: " + "<br>").css({"text-decoration": "underline"});

  $("button.btn.btn-outline-success.my-2.my-sm-0").on("click", function(event) {
      console.log("firebase click heard");

      event.preventDefault();

      search = $(".form-control.mr-sm-2").val().trim();
    
      console.log(search);
      
      database.ref().push({
        search: search,
        
      });
     
    });

    database.ref().orderByChild("age").limitToLast(3).on("child_added", function(snapshot) {
      // Change the HTML to reflect
      console.log(snapshot.val().search);
      $("#search-view2").append(snapshot.val().search + "<br>");
  
  
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);

  });





























