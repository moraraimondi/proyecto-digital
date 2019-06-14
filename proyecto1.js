<<<<<<< HEAD

localStorage.removeItem("usuario")
window.addEventListener("load", function() {

  if (localStorage.getItem("usuario") != null) {
    var nombreDeUsuario = localStorage.getItem("usuario")
    document.querySelector(".espacio-login").innerHTML = "Bienvenide " + nombreDeUsuario
=======
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
>>>>>>> master
  }

  //ESTRENOS (HOME)
  fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=2acc6c4b1703a31715d2049b8767b9ff&language=en-US&page=1")
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    var imagen = document.querySelectorAll(".imagenes-populares")
    var srcImage = "https://image.tmdb.org/t/p/w500"
    for (var i =0; i<6; i++){
      imagen[i].setAttribute("src", (srcImage + data.results[i].poster_path))
    }
  })
  .catch(function(error){
    console.log("The error was: " + error);
  })

  document.querySelector("form.login").onsubmit = function(e) {
    e.preventDefault()

    var nombreDeUsuario = document.querySelector(".nombreDeUsuario").value
    document.querySelector(".espacio-login").innerHTML = "Bienvenido/a " + nombreDeUsuario + "!"

    document.querySelector(".uk-modal-close-default").click()

    localStorage.setItem("usuario", nombreDeUsuario)
  }

})

//MEJOR PUNTAJE (HOME)

//GENEROS (LISTA)
