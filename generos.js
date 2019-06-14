fetch(url)
.then(function(response){
  return response.json();
})
.then(function(data){

  for (var i =0; i<data.genres.length; i++){
    imagen[i].setAttribute("src", (srcImage + data.results[i].poster_path))
  }
})
.catch(function(error){
  console.log("The error was: " + error);
})
