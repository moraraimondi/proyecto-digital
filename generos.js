
fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=2acc6c4b1703a31715d2049b8767b9ff&language=en-US")
.then(function(response){
  return response.json();
})
.then(function(data){
  console.log(data)
  for (var i =0; i<data.genres.length; i++){
    document.querySelector("ul.generosLista").innerHTML+= "<a href=pelisPorGenero.html?idGenero=" + data.genres[i].id + ">"+ "<li>"  + data.genres[i].name + "<li>"+ "</a>"
  }
})
.catch(function(error){
  console.log("The error was: " + error);
})
