var omdbQuery = document.location.search;
// var omdbQuery = "?i=tt0095690&plot=short&r=json"
var objectNew = {}
omdbQuery = omdbQuery.replace("?" , "")
omdbQuery = omdbQuery.split("&")

for (var i = 0; i < omdbQuery.length; i++) {
  var newArray = omdbQuery[i].split('=');
  objectNew[newArray[0]] = newArray[1];


}

var omdbID = objectNew.i;

var xhr = new XMLHttpRequest();
xhr.open('GET', "http://www.omdbapi.com/?i=" + omdbID  );
xhr.addEventListener('load', function () {
  //recieving the request
  var response = xhr.response;
  //parsing the data into an object
  var responseData = JSON.parse(response);
  var a = document.createElement('a');
  a.innerHTML = "<p>"+ responseData.Title +"</p>"+ "<p>"+  responseData.Plot + "</p>"+ "<strong>Metascore: </strong>" +responseData.Metascore ;
  var p = document.createElement('p');
  p.appendChild(a);

document.body.appendChild(p);

 });
xhr.send();
