var omdbQuery = document.location.search;
// var omdbQuery = "?i=tt0095690&plot=short&r=json"
var objectNew = {}
omdbQuery = omdbQuery.replace("?" , " ")
omdbQuery = omdbQuery.split("&")

for (var i = 0; i < omdbQuery.length; i++) {
  var newArray = omdbQuery[i].split('=');
  objectNew[newArray[0]] = newArray[1];
  ;

}

var omdbID = objectNew.i;

var xhrID = new XMLHttpRequest();
xhrID.open('GET', "http://www.omdbapi.com/?i=" + omdbID, true);
xhrID.addEventListener('load', function () {
  //recieving the request
  var response = xhrID.response;
  //parsing the data into an object
  var responseData = JSON.parse(response);
  var a = document.createElement('a');
  a.innerHTML = responseData
  var p = document.createElement('p');
  p.appendChild(a);

document.body.appendChild(p);

 });
xhrID.send();
