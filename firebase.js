var config = {
  apiKey: "AIzaSyDnQYeH8dvtDNC8tIZMecc6Y0uaDLTqH-I",
  authDomain: "foodsearch-82582.firebaseapp.com",
  databaseURL: "https://foodsearch-82582.firebaseio.com",
  projectId: "foodsearch-82582",
  storageBucket: "foodsearch-82582.appspot.com",
  messagingSenderId: "378088961315"
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
      $("#search-view1").hide();
      $("#search-view2").hide();
    });

    database.ref().orderByChild("age").limitToLast(3).on("child_added", function(snapshot) {
      // Change the HTML to reflect
      console.log(snapshot.val().search);
      $("#search-view2").append(snapshot.val().search + "<br>");
  
  
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);

  });





























