window.addEventListener("load", function(){

  var urlSearchParams = new URLSearchParams(window.location.search)
  var pelisPorGenero = urlSearchParams.get('pelisPorGenero')
  console.log(pelisPorGenero);

  fetch("https://api.themoviedb.org/3/discover/movie?api_key=2acc6c4b1703a31715d2049b8767b9ff&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1")
    .then(function(response){
      return response.json();
    })
    .then(function(objetoLiteralRespuesta) {
      console.log(objetoLiteralRespuesta);
      //GUARDO EL ARRAY DE PELIS
      var arrayDePeliculas = objetoLiteralRespuesta.results
      // CAPTURO EL UL
      var ul = document.querySelector('section ul')

      var li = ""
      // PARTE FIJA DE LA URL DE LA IMAGEN
      var urlImg = "https://image.tmdb.org/t/p/original"
      // RECORRO EL ARRAY DE PELIS
      for (var i = 0; i < arrayDePeliculas.length; i++) {
          li = "<li>"
          li +="<a href='detalle.html?idPelicula="+arrayDePeliculas[i].id+"'>"
          li +=   "<p>"+arrayDePeliculas[i].title+"</p>"
          li +=   "<img src='"+urlImg + arrayDePeliculas[i].poster_path+"' style='width:300px;'>"
          li +="</a>"
          li += "</li>"

          ul.innerHTML += li
      }
    })
    .catch(function(error) {
      console.log("the error was: " + error);
    })

})
