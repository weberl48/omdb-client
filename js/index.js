
// sending the request

var button = document.getElementById('button');
var text = document.getElementById('input')
button.addEventListener('click', function (){
  var s = text.value;
  var h1 = document.createElement('h1');
  h1.innerHTML = "OMBD Movies About " + s;
  document.body.appendChild(h1);





var xhr = new XMLHttpRequest();
xhr.open('get', "http://www.omdbapi.com/?s=" + s);
xhr.addEventListener('load', function () {
  //recieving the request
  var response = xhr.response;
  //parsing the data into an object
  var responseData = JSON.parse(response);
  //get all the titles
  for (var i = 0; i < responseData.Search.length; i++) {
    var a = document.createElement('a'); // creates an anchor element
    a.innerHTML = responseData.Search[i].Title; // sets the <a>Titles[] </a>
    // var x = responseData.Search[i]
  var  id = responseData.Search[i].imdbID;
  console.log(id);
    a.href = '/movie.html?i=' + id  ; //sets the href of the a element to

    var p = document.createElement('p');
    p.appendChild(a);
    document.body.appendChild(p);
}

});
xhr.send();
});
