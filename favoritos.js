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

  for (var i = 0; i < favoritas.length; i++) {
    favoritas[i]
  }
})
