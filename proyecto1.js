//ESTRENOS (HOME)
fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=2acc6c4b1703a31715d2049b8767b9ff&language=en-US&page=1")
.then(function(response){
  return response.json();
})
.then(function(data){
  var imagen = document.querySelectorAll(".imagenes-populares")
  console.log(imagen);
  var srcImage = "https://image.tmdb.org/t/p/w500"
  for (var i =0; i<10; i++){
    imagen[i].setAttribute("src", (srcImage + data.results[i].poster_path))
  }
})
.catch(function(error){
  console.log("The error was: " + error);
})

//MEJOR PUNTAJE (HOME)

//GENEROS (LISTA)
