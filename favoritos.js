window.addEventListener("load", function() {
  var jsonFavoritas = localStorage.getItem("peliculasFavoritas")

  if (jsonFavoritas == null) {
    var favoritas = []
  } else {
    // Paso 2 - Desempaqueto el json
    var objLit = JSON.parse(jsonFavoritas)

    // Paso 3 - Leo del obj lit, la caracteristica importante
    var favoritas = objLit.caracteristica;
  }
console.log(favoritas);

  for (var i = 0; i < favoritas.length; i++) {

      var API_KEY = "928ad4dee3a02646fa1725b8bcaa2a96"
      var url = "https://api.themoviedb.org/3/movie/"+favoritas[i]+"?api_key="+API_KEY
      var urlPic = "https://image.tmdb.org/t/p/original"
    fetch(url)
      .then(function(data) {
        return data.json()
      })
      .then(function(pelicula) {
        console.log(pelicula);
        console.log(pelicula.title, pelicula.id, pelicula.poster_path);
        document.querySelector("ul").innerHTML+= "<li>"+"<a href='detalle.html?idPelicula="+pelicula.id+"'>" + "<p>" + pelicula.title + "</p>" + "<img src='"+ urlPic + pelicula.poster_path +" 'style='width: 300px;'>" + "</a>" + "</li>"
      })
  }
})
