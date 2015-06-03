var omdbQuery = "?i=tt0095690&plot=short&r=json"
// var omdbQuery = document.location.search;
var objectNew = {}
omdbQuery = omdbQuery.replace("?" , " ")
omdbQuery = omdbQuery.split("&")

for (var i = 0; i < omdbQuery.length; i++) {
  var newArray = omdbQuery[i].split('=');
  objectNew[newArray[0]] = newArray[1];
  ;

}

var omdbID = objectNew.i;
