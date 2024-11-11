(function(){
  const changeMap = document.getElementById("MudaMapa");

  function ALterarMapa(){
    var mapaTerreo = document.getElementById("mapaTerreo");
    var mapaPrimeriro = document.getElementById("mapaPrimeiro");

    if(mapaTerreo.style.display === "block"){
      mapaTerreo.style.display = "none";
      mapaPrimeriro.style.display = "block";
    } else {
      mapaTerreo.style.display = "block";
      mapaPrimeriro.style.display = "none";
    }
  }
  changeMap.addEventListener('click', ALterarMapa);
})();
