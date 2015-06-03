var h1 = document.createElement('h1');
h1.innerHTML = "OMBD Movies About Pizza";
document.body.appendChild(h1);
// sending the request
var xhr = new XMLHttpRequest();
xhr.open('get', "http://www.omdbapi.com/?s=pizza");
xhr.addEventListener('load', function () {
  //recieving the request
  var response = xhr.response;
  //parsing the data into an object
  var responseData = JSON.parse(response);
  //get all the titles
  for (var i = 0; i < responseData.Search.length; i++) {
    var a = document.createElement('a'); // creates an anchor element
    a.innerHTML = responseData.Search[i].Title; // sets the <a>Titles[] </a>

    a.href = '/movie.html?' ; //sets the href of the a element to
    console.log(responseData.Search[i].imdbID);
    var p = document.createElement('p');
    p.appendChild(a);
    document.body.appendChild(p);
}

});
xhr.send();
