



var query = document.location.search;
var objectNew = {}
var arrayNew = []
var key , value
query = query.replace("?" , " ")
var arrayNew = query.split(/[&=]/)

for ( i = 0; i < arrayNew.length; i++) {
  if (i % 2 == 0 ) {
    key = arrayNew[i];
    objectNew[key] = arrayNew[i+ 1];
  }
  console.log(objectNew);
}


//notes
