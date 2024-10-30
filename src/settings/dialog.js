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


// (function() {
//     'use strict';
    
//     Office.onReady(function (info) {
//         // Verifica se o add-in está carregado e pronto
//         if (info.host === Office.HostType.Outlook) {
//           console.log("Add-in carregado!");
//         }
//     });
      
//       // Define a função para carregar a página
//     function carregarPagina() {
//         var url = "https://gabrieups.github.io/Addin/src/taskpane/taskpane.html";
    
//         Office.context.ui.displayDialogAsync(
//             url,
//             { height: 50, width: 50 },
//             function (asyncResult) {
//             if (asyncResult.status === Office.AsyncResultStatus.Failed) {
//                 console.error("Erro ao carregar a página: " + asyncResult.error.message);
//             } else {
//                 console.log("Página carregada com sucesso.");
//             }
//             }
//         );
//     }            
// });
  