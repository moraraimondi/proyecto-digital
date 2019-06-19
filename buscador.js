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
    for (var i=0; i < informacion.results.length; i++){
    //informacion[i]
    console.log(informacion.resulys[i].id)
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
