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

      var ul = document.querySelector('section ul')
      // PARTE FIJA DE LA URL DE LA IMAGEN
      var urlImg = "https://image.tmdb.org/t/p/original"

      var li = ""
      li = "<li>"
      li +=   "<p>"+objetoLiteralRespuesta.title+"</p>"
      li +=   "<img src='"+urlImg + objetoLiteralRespuesta.poster_path+"' style='width:300px;'>"
      li +=   "<p>"+objetoLiteralRespuesta.overview+"</p>"
      li +=   "<p>" + +  "</p>"
      li += "</li>"

      ul.innerHTML += li

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

})
