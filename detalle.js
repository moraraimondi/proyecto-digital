window.addEventListener("load", function(){

  var urlSearchParams = new URLSearchParams(window.location.search)
  var idPelicula = urlSearchParams.get('idPelicula')
  console.log(idPelicula);

  var jsonFavoritas = localStorage.getItem("peliculasFavoritas")

  if (jsonFavoritas == null) {
    var favoritas = []
  } else {
    // Paso 2 - Desempaqueto el json
    var objLit = JSON.parse(jsonFavoritas)

    // Paso 3 - Leo del obj lit, la caracteristica importante
    var favoritas = objLit.caracteristica;
  }
  var API_KEY = "928ad4dee3a02646fa1725b8bcaa2a96"
  var url = "https://api.themoviedb.org/3/movie/"+idPelicula+"?api_key="+API_KEY
  fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(function(objetoLiteralRespuesta) {
      console.log(objetoLiteralRespuesta);
      var urlImg = "https://image.tmdb.org/t/p/original"
      document.querySelector(".titulo").innerHTML += objetoLiteralRespuesta.title
      document.querySelector(".poster-pelis").setAttribute("src",(urlImg + objetoLiteralRespuesta.poster_path))
      document.querySelector(".fecha").innerHTML += objetoLiteralRespuesta.release_date
      document.querySelector(".detalles").innerHTML+= objetoLiteralRespuesta.overview

      var idiomas = objetoLiteralRespuesta.spoken_languages
      for (var i = 0; i<idiomas.length; i++) {
        console.log(idiomas[i]);
        document.querySelector(".idiomas").innerHTML+= "<p>" +idiomas[i].name + "</p>"
      }

      var generos = objetoLiteralRespuesta.genres
      for (var i = 0; i < generos.length; i++) {
        document.querySelector(".generos").innerHTML+= "<p>" + generos[i].name + "</p>"
      }

      if (favoritas.indexOf(idPelicula) >= 0) {
        document.querySelector(".estrellita").style.backgroundColor = "gold"
      }

    })
    .catch(function(error) {
      console.log("the error was: " + error);
    })

    // Bloque 3 - Que pasa al clickear en la estrella
    document.querySelector(".estrellita").onclick = function() {
      // Bloque 3 a - Modifico el array
      if (favoritas.indexOf(idPelicula) >= 0) {
        // La quito
        var pos = favoritas.indexOf(idPelicula)
        favoritas.splice(pos,1)
        document.querySelector(".estrellita").style.backgroundColor = "white"
      } else {
        // La agrego
        favoritas.push(idPelicula)
        document.querySelector(".estrellita").style.backgroundColor = "gold"
      }
      // Fin bloque 3 a

      var objLit = {
         caracteristica: favoritas
       }

       var json = JSON.stringify(objLit)

       localStorage.setItem("peliculasFavoritas", json)

    }

  //  var trailer= (": https://api.themoviedb.org/3/movie/"+idPelicula+"/videos?api_key=928ad4dee3a02646fa1725b8bcaa2a96")
    //fetch(trailer)
    //.then(function(response){
      //return response.json();})
    //.then(function(peliTrailer){
    //  console.log(peliTrailer);
    //  console.log(peliTrailer.results[0].key);
    //  var urlTrailer = "<iframe width="560" height="315" src="https://www.youtube.com/embed/"+peliTrailer+" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>"
    //  document.querySelector(".detalles").innerHTML = peliTrailer;
  //  })

})
