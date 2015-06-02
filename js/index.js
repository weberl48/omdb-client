var h1 = document.createElement('h1');
h1.innerHTML = "OMBD Movies About Pizza";
document.body.appendChild(h1);

var xhr = new XMLHttpRequest();
xhr.open('get', "http://www.omdbapi.com/?s=pizza");
xhr.addEventListener('load', function () {
  var response = xhr.response;
  var responseData = JSON.parse(response);

  var p = document.createElement('p');
  p.innerHTML = responseData.Search[0].Title;
  document.body.appendChild(p);

  console.log(responseData);

});
xhr.send();
