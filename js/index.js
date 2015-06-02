var h1 = document.createElement('h1');
h1.innerHTML = "OMBD Movies About Pizza";
document.body.appendChild(h1);

var xhr = new XMLHttpRequest();
xhr.open('get', "http://www.omdbapi.com/?s=pizza");
xhr.addEventListener('load', function () {
  var response = xhr.response;
  var responseData = JSON.parse(response);


  for (var i = 0; i < responseData.Search.length; i++) {
    var p = document.createElement('p');
    responseData.Search[i];
    p.innerHTML = responseData.Search[i].Title;
    document.body.appendChild(p);
}

});
xhr.send();
