window.addEventListener("load", function(){
  var urlSearchParams = new URLSearchParams(window.location.search)
  var textoBuscado= urlSearchParams.get("buscador")
  console.log(textoBuscado);

  fetch("https://api.themoviedb.org/3/search/movie?api_key=2acc6c4b1703a31715d2049b8767b9ff&language=en-US&page=1&include_adult=false")
  .then(function (respuesta){
    return respuesta.json()
  })
  .then(function(información){
    console.log(información);
    var arrayBuscador = información.results
    var imagen = document.querySelector(".buscar")
    var texto = document.querySelector(".buscar-titulo")
    for (var i=0; i < informacion.results.length; i++){
    imagen[i].setAttribute("src", (posterUrl + información.results[i].poster_path))
    for (var i = 0; i <6; i++) {
      texto[i].innerHTML += información.results[i].title
    }
    console.log(informacion.results[i].id)
    titulo =informacion.results[i].title
    poster= informacion.results.poster_path
    posterUrl= "https://image.tmdm.org/t/p/original/"
    image= posterUrl + poster
    console.log(image);
  }
  })
  .catch(function(error){
    console.log("Error:" + error);

  })
})
